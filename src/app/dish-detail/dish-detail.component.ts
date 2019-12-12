import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../models/dish.model';
import { DishService } from '../API/dish.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})

export class DishDetailComponent implements OnInit {

  @Input() dish: Dish;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private dishService: DishService,
    private location: Location) { }

  ngOnInit() {
    this.getDish();
  }

  // TODO PROBABLY HARDCODED
  getDish() {
    let mystring = this.router.url;
    mystring = mystring.replace('/admin/detail/', '');
    this.dishService.getDishById(mystring).subscribe((dish => {
      this.dish = dish;
    }));
  }

  save() {
    this.dishService.updateDish(this.dish).subscribe(() => this.location.back());
  }

}
