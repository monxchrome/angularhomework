import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CarEditComponent} from "../../components/car-edit/car-edit.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-car-edit-page',
  template: '',
})
export class CarEditPageComponent implements OnInit{

  constructor(private matDialog: MatDialog, private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => {
      this.matDialog.open(CarEditComponent, {data:data})
    })
  }

}
