import {Component, OnInit} from '@angular/core';
import {IUser} from "../../../../interfaces";
import {ActivatedRoute} from "@angular/router";
import {UserServiceService} from "../../../../services";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit{
  user: IUser

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({userData}) => this.user = userData)
  }
}
