import { Component, OnInit } from '@angular/core';
import { DishService } from '../API/dish.service';
import { Dish } from '../models/dish.model';



@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit {

  dishes: Dish[];

  constructor(private dishService: DishService) { }


  ngOnInit() {
    this.getDishes();
  }

  getDishes() {
    this.dishService.getDishes()
      .subscribe(dishes => {
        this.dishes = dishes;
      });
  }

  delete(dish: Dish): void {
    this.dishes = this.dishes.filter(h => h !== dish);
    this.dishService.deleteDish(dish).subscribe();
  }

}
