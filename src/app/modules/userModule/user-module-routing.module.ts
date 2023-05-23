import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserPageComponent} from "./pages/user-page/user-page.component";
import {UserDetailPageComponent} from "./pages/user-detail-page/user-detail-page.component";
import {userDetailResolver} from "../../services/resolver/user-detail.resolver";

const routes: Routes = [
  {path: '', component: UserPageComponent, children:[
      {path: ':id', component: UserDetailPageComponent, resolve: {userData: userDetailResolver}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
