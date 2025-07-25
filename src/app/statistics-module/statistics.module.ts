import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    SharedModule,
    StatisticsRoutingModule
  ]
})
export class StatisticsModule { }
