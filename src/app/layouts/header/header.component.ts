import {Component, OnInit} from '@angular/core';
import {IAuth} from "../../interfaces/auth.interface";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  user: IAuth | null;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getAuthUser().subscribe(value => {
      if(value) {
        this.user = value
      } else  {
        this.authService.me().subscribe(value => this.user = value)
      }
    }
    )
  }
}
