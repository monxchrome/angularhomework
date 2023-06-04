import {Component, Input, OnInit} from '@angular/core';
import {ICar} from "../../../../interfaces/car.interface";
import {CarService} from "../../../../services/car.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{
  @Input()
  cars: ICar[];
  panelOpenState = false;

  ngOnInit(): void {
  }
}
