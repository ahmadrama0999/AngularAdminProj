import { Component, OnInit } from '@angular/core';
import { DishService } from '../dishes/dish.service';
import { Dish } from '../dishes/dish.model';

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
        console.log(dishes)
      });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    const dish  = new Dish(name);
    this.dishService
      .addDish(dish)
      .subscribe(hero => this.dishes.push(dish));
  }

  delete(dish: Dish): void {
    this.dishes = this.dishes.filter(h => h !== dish);
    this.dishService.deleteDish(dish).subscribe();
  }

}
