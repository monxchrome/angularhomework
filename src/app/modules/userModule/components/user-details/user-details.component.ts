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

  constructor(private activatedRoute: ActivatedRoute, private userService: UserServiceService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userService.getById(id).subscribe(value => this.user = value);
    })
  }
}
