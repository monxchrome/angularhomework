import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarsPageComponent} from "./pages/cars-page/cars-page.component";
import {CarEditPageComponent} from "./pages/car-edit-page/car-edit-page.component";
import {carResolver} from "../../services/resolvers/car.resolver";

const routes: Routes = [
  {path: '', component: CarsPageComponent, children: [
      {path: ':id', component: CarEditPageComponent, resolve: {data: carResolver}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
