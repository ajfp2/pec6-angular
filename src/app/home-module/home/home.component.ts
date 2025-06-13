import { Component } from '@angular/core';
import { AlumnosService } from '../../shared/alumnos.service';
import { StudentDTO } from '../../shared/student.dto';

// Angular Material
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MatListModule, MatDividerModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public students: StudentDTO[] = [];

  constructor(private as: AlumnosService){

  }

  ngOnInit(): void {
    this.as.getData().subscribe( (data: StudentDTO[]) => {
      this.students = data;
      console.log(data);      
    });
  }

  // trackById(index: number, student: StudentDTO): number {
  //   return student.ID_Alumno; // Devuelve el id de la tarea como identificador único
  // }

}
