import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    ListRoutingModule
  ]
})
export class ListModule { }
