import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DishService } from '../API/dish.service';
import { Dish } from '../models/dish.model';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.scss']
})
export class AddDishComponent implements OnInit {

  addForm: FormGroup;
  isSubmitted = false;
  error: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private dishService: DishService) { }

  ngOnInit() {
    this.buildForm();
  }

  onSubmit() {
    this.isSubmitted = true;
    this.error = null;
    if (this.addForm.invalid) {
      this.onFailed();
      return;
    }
    this.onSuccess();
  }

  onSuccess() {
    this.dishService.addDish(new Dish(this.addForm.value.name, this.addForm.value.url)).subscribe();
    this.router.navigate(['admin/dishList']);
  }

  onFailed() {
    this.error = 'Invalid username or password';
  }

  private buildForm() {
    this.addForm = this.formBuilder.group({
      name: [ null, Validators.required ],
      url: [ null, Validators.required ]
    });
  }
}
