import {Component, OnInit} from '@angular/core';
import {UserServiceService} from "../../../../services";
import {IUser} from "../../../../interfaces";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users: IUser[];

  constructor(private userService: UserServiceService) {

  }

  ngOnInit():void {
    this.userService.getAll().subscribe(value => this.users = value)
  }
}
