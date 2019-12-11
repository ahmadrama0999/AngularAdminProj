import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../dishes/dish';
import { DishService } from '../dishes/dish.service';

@Component({
  selector: 'app-dishDetail',
  templateUrl: './dishDetail.component.html',
  styleUrls: ['./dishDetail.component.scss']
})
export class DishDetailComponent implements OnInit {

  @Input() dish: Dish;

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService,
    private location: Location) {}

  ngOnInit() {
    // this.getDish();
  }

  // getDish() {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.dish = this.dishService.getDish(id);
  // }

  // save() {
  //   this.dishService.updateDish(this.dish);
  //   this.location.back();
  // }

  goBack() {
    this.location.back();
  }

}
