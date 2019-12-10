import { Component, OnInit } from '@angular/core';
import { DishService } from '../dishes/dish.service';
import { Dish } from '../dishes/dish';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit {
  dishes: Dish[];

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
      // .subscribe(dishes => this.dishes = dishes);
  }

  // getDishes(): Dish[] {
  //   //  this.dishService.getAllDishes();
  //   //  .subscribe(dishes => this.dishes = dishes);
  // }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.dishService.addDish(name);
  }

  delete(dish: Dish): void {
    //this.dishes = this.dishes.filter(h => h !== dish);
    this.dishService.deleteDish(dish);
  }

}
