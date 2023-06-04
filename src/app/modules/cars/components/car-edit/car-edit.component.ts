import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ICar} from "../../../../interfaces/car.interface";

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ICar) {
  }
}
