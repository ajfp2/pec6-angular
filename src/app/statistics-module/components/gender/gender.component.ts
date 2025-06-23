import { Component, Input, OnInit } from '@angular/core';
import { StudentDTO } from '../../../shared/student.dto';
import { AlumnosService } from '../../../shared/alumnos.service';
import { MatCardModule } from '@angular/material/card';

// Chart JS
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)

@Component({
  selector: 'app-gender',
  standalone: true,
  imports: [ MatCardModule ],
  templateUrl: './gender.component.html',
  styleUrl: './gender.component.scss'
})
export class GenderComponent implements OnInit{
    @Input() title: string = 'Sin titulo';

    public students: StudentDTO[] = [];

    public hombres = 0;
    public mujeres = 0;
    
    constructor(private as: AlumnosService){
    }
    
    ngOnInit(): void {
      this.as.getData().subscribe( (data: StudentDTO[]) => {
        this.students = data;
        if(this.students != null){
          this.students.map(st => {
            if(st.Sexo == 'M') this.hombres++;
            else this.mujeres++;            
          });
        }
        this.RenderChart();
      });
    }
      
    RenderChart(){
      const resumeChart = new Chart('doughnutData', {
        type: 'doughnut',
        data: {
            labels: ["Hombres", "Mujeres"],
            datasets: [
                {
                    label: 'Géneros',
                    data: [this.hombres, this.mujeres], // Datos numéricos (totales)
                    backgroundColor: [
                        'rgb(54, 162, 235)',
                        'rgb(255, 99, 132)'                    
                    ],
                    hoverOffset: 4
                }
            ]
        },
        options: {
            responsive: true
        }
      });
    }
}
