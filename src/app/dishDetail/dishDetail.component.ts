import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../dishes/dish.model';
import { DishService } from '../dishes/dish.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dishDetail',
  templateUrl: './dishDetail.component.html',
  styleUrls: ['./dishDetail.component.scss']
})
export class DishDetailComponent implements OnInit {

  @Input() dish: Dish;

  fileToUpload: File = null;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadFileToActivity(this.fileToUpload);
  }

  uploadFileToActivity(image: File) {
    this.dish.image = this.fileToUpload;
    // this.postFile(this.fileToUpload).subscribe(data => {
    //   console.log(data);
    // }, error => {
    //   console.log(error);
    // });
  }

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

    //   .subscribe(dish => this.dish = dish);
    // const _id = +this.route.snapshot.paramMap.get('_id');
    // this.dish = this.dishService.getDishById(_id);
    // return this.dishes.find(dish => dish.id === id);
  }

  save() {
    console.log(this.dish.image);
    this.dishService.updateDish(this.dish).subscribe(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }

}
