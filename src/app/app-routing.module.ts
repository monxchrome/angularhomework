import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayootComponent} from "./layouts/main-layoot.component";

const routes: Routes = [
  {path: '', component: MainLayootComponent, children: [
      {path: '', redirectTo: 'auth/login', pathMatch: "full"},
      {path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthModule)},
      {path: 'cars', loadChildren: () => import('./modules/cars/cars.module').then(module => module.CarsModule)}
    ]}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
