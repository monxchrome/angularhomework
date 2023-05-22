import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostModuleRoutingModule } from './post-module-routing.module';
import { PostPageComponent } from './pages/post-page/post-page.component';


@NgModule({
  declarations: [
    PostPageComponent
  ],
  imports: [
    CommonModule,
    PostModuleRoutingModule
  ]
})
export class PostModuleModule { }
