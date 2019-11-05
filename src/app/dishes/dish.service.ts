import { Injectable } from '@angular/core';
import { Dish } from './dish';

@Injectable({ providedIn: 'root' })
export class DishService {

    getAllDishes() {
        return [
            { id: 11, name: 'Banana' },
            { id: 12, name: 'IceCream' },
            { id: 13, name: 'Tomato' },
            { id: 14, name: 'Spagetti' },
            { id: 15, name: 'Mango' },
            { id: 16, name: 'Qiwi' },
            { id: 17, name: 'Borsh' },
            { id: 18, name: 'Holodets' },
            { id: 19, name: 'Mango' },
            { id: 20, name: 'Chocolate' }
        ];
    }

    getDish(id: number): Dish {
        //return this.getAllDishes().filter(dish => dish.id === id);
        return this.getAllDishes().find(dish => dish.id === id );
      }

}



