import { Component, Input } from '@angular/core';
import { StudentDTO } from '../../../shared/student.dto';
import { AlumnosService } from '../../../shared/alumnos.service';

// Chart JS
import { Chart, registerables } from 'chart.js';
import { MatCardModule } from '@angular/material/card';
Chart.register(...registerables)

@Component({
  selector: 'app-general-results',
  standalone: true,
  imports: [ MatCardModule ],
  templateUrl: './general-results.component.html',
  styleUrl: './general-results.component.scss'
})
export class GeneralResultsComponent {
    @Input() title: string = 'Sin titulo';
    
    public students: StudentDTO[] = [];

    public aprobados = 0;
    public suspendidos = 0;
    
    constructor(private as: AlumnosService){
    }
    
    ngOnInit(): void {
        this.as.getData().subscribe( (data: StudentDTO[]) => {
        this.students = data;
        if(this.students != null){
            this.students.map(st => {
                if(st.Nota_Final < 5) this.suspendidos++;
                else this.aprobados++; 
            });
        }
        this.RenderChart();
        });
    }
        
    RenderChart(){
        const resumeChart = new Chart('pieChart', {
        type: 'pie',
        data: {
            labels: ["Aprobados", "Suspendidos"],
            datasets: [
                {
                    label: 'Aprobados vs Suspensos',
                    data: [this.aprobados, this.suspendidos], // Datos numéricos (totales)
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
