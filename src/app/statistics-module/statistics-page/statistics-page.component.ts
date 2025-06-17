import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ResumeDataComponent } from "../../shared/components/resume-data/resume-data.component";
import { GenderComponent } from '../../shared/components/gender/gender.component';
import { GeneralResultsComponent } from '../../shared/components/general-results/general-results.component';
import { AlumnosService } from '../../shared/alumnos.service';
import { StudentDTO } from '../../shared/student.dto';


@Component({
  selector: 'app-statistics-page',
  standalone: true,
  imports: [MatDividerModule, ResumeDataComponent, GenderComponent, GeneralResultsComponent ],
  templateUrl: './statistics-page.component.html',
  styleUrl: './statistics-page.component.scss'
})
export class StatisticsPageComponent {

  public students: StudentDTO[] = [];

  // barType: ChartType = 'bar';
  // dataBar: ChartData<'bar'> = {
  //   labels: [],
  //   datasets: []
  // }


  constructor(private as: AlumnosService){
    
  }
    
  ngOnInit(): void {
    this.as.getData().subscribe( (data: StudentDTO[]) => {
      this.students = data;
      console.log(data);      
    });
  }

}
