import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/shared/models/meal';
import { MealService } from 'src/app/shared/services/mealService';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {
  meals?: Meal[];
  currentMeal: Meal = {};
  currentIndex = -1;
  name = '';

  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    this.retrieveMeals();
  }

  retrieveMeals(): void{
    this.mealService.getAll()
    .subscribe({
      next: (res) => {
        this.meals = res;
        console.log(res);
      },
      error: e => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveMeals();
    this.currentMeal = {};
    this.currentIndex = -1;
  }

  setActiveMeal(meal: Meal, index: number): void {
    this.currentMeal = meal;
    this.currentIndex = index;
  }


}
