import { Component, Input, OnInit } from '@angular/core';
import { AlumnosService } from '../../../shared/alumnos.service';
import { StudentDTO } from '../../../shared/student.dto';

// Angular Material
import { MatCardModule } from '@angular/material/card';

// Chart JS
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)


@Component({
  selector: 'app-resume-data',
  standalone: true,
  imports: [ MatCardModule ],
  templateUrl: './resume-data.component.html',
  styleUrl: './resume-data.component.scss'
})
export class ResumeDataComponent implements OnInit{

    @Input() title: string = 'Sin titulo';

    public students: StudentDTO[] = [];

    private totales = 0;
    public aprobados = 0;
    public suspendidos = 0;
    
    constructor(private as: AlumnosService){
    }
    
    ngOnInit(): void {
      this.as.getData().subscribe( (data: StudentDTO[]) => {
        this.students = data;
        if(this.students != null){
          this.totales = this.students.length;
          this.students.map(st => {
            if(st.Nota_Final < 5) this.suspendidos++;
            else this.aprobados++;            
          });
        }
        this.RenderChart();
      });
    }
      
    RenderChart(){
      const resumeChart = new Chart('barchart', {
        type: 'bar',
        data: {
          labels: ["Alumnos", "Aprobados", "Suspensos"],
          datasets: [
            {
              label: 'Totales',
              data: [this.totales, this.aprobados, this.suspendidos], // Datos numéricos (totales)
              backgroundColor: [
                'rgba(255, 206, 86, 0.2)',                
                'rgba(54, 162, 235, 0.2)' ,
                'rgba(255, 99, 132, 0.2)',                 
              ],
              borderColor: [
                'rgba(255, 206, 86, 1)',                
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',                 
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true // Empieza el eje Y desde cero
              }
          }
        }
      });
    }

}
