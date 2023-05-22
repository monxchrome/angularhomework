import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserDetailPageComponent } from './pages/user-detail-page/user-detail-page.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';


@NgModule({
  declarations: [
    UserPageComponent,
    UserDetailPageComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule
  ]
})
export class UserModuleModule {
  constructor() {
  }
}
