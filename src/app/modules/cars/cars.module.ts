import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { CarsComponent } from './components/cars/cars.component';


@NgModule({
  declarations: [
    CarsPageComponent,
    CarsComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule
  ]
})
export class CarsModule { }
