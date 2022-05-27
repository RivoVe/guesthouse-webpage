import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MealService } from 'src/app/shared/services/mealService';


const baseUrl = 'http://localhost:4200/meals'

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss']
})
export class AddMealComponent implements OnInit {
  mealTypes: string[] = ['Breakfast', 'Lunch', 'Dinner'];
  addMealForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: MealService) { }

  ngOnInit(): void {
    this.initializeForm();

  }

  initializeForm(): void {
    this.addMealForm = this.formBuilder.group({
      name: '',
      description: '',
      price: '',
      mealType: '',
      isActive: null
    });
  }

  onSubmit(): void {
    console.log(this.addMealForm.value);
    this.service.createMeal(this.addMealForm.value).subscribe(res => {
      console.log(res);
    })
  }



  selectMealType(event:any): void {
    this.addMealForm.patchValue({
      listOfMealTypes: event.target.value
    })
  }

}
