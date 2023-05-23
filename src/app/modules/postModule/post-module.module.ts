import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostModuleRoutingModule } from './post-module-routing.module';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostDetailPageComponent } from './pages/post-detail-page/post-detail-page.component';


@NgModule({
  declarations: [
    PostPageComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    PostDetailPageComponent
  ],
  imports: [
    CommonModule,
    PostModuleRoutingModule
  ]
})
export class PostModuleModule { }
