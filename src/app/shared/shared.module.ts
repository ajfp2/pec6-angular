import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AlumnosService } from './alumnos.service';



@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [AlumnosService]
})
export class SharedModule { }
