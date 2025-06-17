import { Component } from '@angular/core';
import { StudentDTO } from '../../shared/student.dto';
import { AlumnosService } from '../../shared/alumnos.service';

// Angular Material
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { ScrollingModule } from '@angular/cdk/scrolling';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatListModule, MatDividerModule, ScrollingModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

    public students: StudentDTO[] = [];
  
    constructor(private as: AlumnosService){
  
    }
  
    ngOnInit(): void {
      this.as.getData().subscribe( (data: StudentDTO[]) => {
        this.students = data;  
      });
    }

}
