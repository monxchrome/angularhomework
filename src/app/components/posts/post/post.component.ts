import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IPost} from "../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input()
  post: IPost

  @Output()
  selectedPost = new EventEmitter<IPost>()

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  setSelectedPost(): void {
    this.selectedPost.emit(this.post)
  }

  getDetails(): void {
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute, state: this.post})
  }
}
