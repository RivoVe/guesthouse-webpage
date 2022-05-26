import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss']
})
export class AddMealComponent implements OnInit {
  mealTypes: string[] = ['Breakfast', 'Lunch', 'Dinner'];
  addMealForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();

  }

  initializeForm(): void {
    this.addMealForm = this.formBuilder.group({
      name: '',
      description: '',
      price: '',
      listOfMealTypes: '',
      isActive: this.formBuilder.group({
        active: true,
        notActive: false
      })
    });
  }

  onSubmit(): void {
    console.log(this.addMealForm);
  }

  selectMealType(event:any): void {
    this.addMealForm.patchValue({
      listOfMealTypes: event.target.value
    })
  }

}
