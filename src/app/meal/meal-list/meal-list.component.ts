import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/shared/models/meal';
import { MealService } from 'src/app/shared/services/mealService';



@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {
meals!:Meal[];

  constructor(private mealService: MealService) {

  }

  ngOnInit(): void {
    this.retrieveMeals();
  }

  retrieveMeals(): void{
    this.mealService.getAllMeals()
    .subscribe({
      next: (res) => {
        this.meals = res;
        console.log(res);
      },
      error: e => console.error(e)
    });
  }

}
