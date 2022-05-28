import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Meal } from 'src/app/shared/models/meal';
import { MealService } from 'src/app/shared/services/mealService';



@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {
meals!:Meal[];
closeResult!: string;

  constructor(private mealService: MealService,
    private modalService: NgbModal) {

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
