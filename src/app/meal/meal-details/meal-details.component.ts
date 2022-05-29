import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from 'src/app/shared/models/meal';
import { MealService } from 'src/app/shared/services/mealService';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.scss']
})
export class MealDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentMeal: Meal = {
    id: 0,
    name: '',
    description: '',
    mealType: '',
    price: 0,
    mealImages: [],
    active: true
  }

  message? = '';


  constructor(
    private mealService: MealService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getMeal(this.route.snapshot.params["id"]);
    }
  }

  getMeal(id: string): void {
    this.mealService.get(id)
    .subscribe(
      {
        next: (res) => {
          this.currentMeal = res;
          console.log(res);
        } ,
        error: (e) => console.error(e)
      }
    );
  }

  inActiveMeal(): void{
    this.message = '';
    this.mealService.delete(this.currentMeal.id)
    .subscribe(
      {
      next: (res) => {
        console.log(res);
        this.message = res.message ? res.message:'The meal was updated';
      },
      error: (e) => console.error(e)
    }
    );
  }


    activeMeal(): void{
      this.message = '';
      this.mealService.restore(this.currentMeal.id)
      .subscribe(
        {
        next: (res) => {
          console.log(res);
          this.router.navigate(['/meals']);
        },
        error: (e) => console.error(e)
      }
      );
    }

    deleteMeal(): void{
      this.message = '';
      this.mealService.deleteMeal(this.currentMeal.id)
      .subscribe(
        {
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message:'The meal was deleted';
        },
        error: (e) => console.error(e)
      }
      );
    }


}
