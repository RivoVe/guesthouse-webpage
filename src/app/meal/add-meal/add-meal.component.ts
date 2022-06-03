import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MealService } from 'src/app/shared/services/mealService';


const baseUrl = 'http://localhost:4200/addMeal'

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss']
})
export class AddMealComponent implements OnInit {
  mealTypes: string[] = ['Breakfast', 'Lunch', 'Dinner'];
  addMealForm!: FormGroup;

  constructor(private mealService: MealService, private router: Router) { }

  ngOnInit(): void {
    this.addMealForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl(),
      mealType: new FormControl(),
      price: new FormControl(),
      mealImages: new FormControl(),
      active: new FormControl()
    })
  }

  onSubmit(): void {
    this.mealService.createMeal(this.addMealForm.value).subscribe(() => {
      this.addMealForm.reset();
      this.router.navigateByUrl('/meals');
    })
  }

  selectMealType(event:any): void {
    this.addMealForm.patchValue({
      listOfMealTypes: event.target.value
    })
  }

}
