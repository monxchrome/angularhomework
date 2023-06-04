import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { CarsComponent } from './components/cars/cars.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CarComponent } from './components/car/car.component';
import {MatButtonModule} from "@angular/material/button";
import { CarEditPageComponent } from './pages/car-edit-page/car-edit-page.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';


@NgModule({
  declarations: [
    CarsPageComponent,
    CarsComponent,
    CarComponent,
    CarEditPageComponent,
    CarEditComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatButtonModule
  ]
})
export class CarsModule { }
