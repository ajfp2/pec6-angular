import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { StatisticsRoutingModule } from './statistics-routing.module';
import { ResumeDataComponent } from '../shared/components/resume-data/resume-data.component';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    ResumeDataComponent
  ]
})
export class StatisticsModule { }
