import {Component, Input} from '@angular/core';
import {ICar} from "../../../../interfaces/car.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input()
  car: ICar

  constructor(private router: Router, private activateRoute: ActivatedRoute) {
  }


  edit() {
    this.router.navigate([this.car.id], {relativeTo: this.activateRoute, state: this.car})
  }
}
