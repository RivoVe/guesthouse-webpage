import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MealService } from 'src/app/shared/services/mealService';


const baseUrl = 'http://localhost:4200/updateMeal/ :id'

@Component({
  selector: 'app-update-meal',
  templateUrl: './update-meal.component.html',
  styleUrls: ['./update-meal.component.scss']
})
export class UpdateMealComponent implements OnInit {

  mealTypes: string[] = ['Breakfast', 'Lunch', 'Dinner'];
  updateMealForm!: FormGroup;


  constructor(private mealService: MealService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.updateMealForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl(),
      mealType: new FormControl(),
      price: new FormControl(),
      mealImages: new FormControl(),
      active: new FormControl()  
    });

    this.route.params.subscribe(params => this.getMeal(params["id"]));
    
  }

  onSubmit(): void {
    this.mealService.updateMeal(this.updateMealForm.value).subscribe(() => {
      this.router.navigateByUrl('/meals');
    })
  }

  selectMealType(event:any): void {
    this.updateMealForm.patchValue({
      listOfMealTypes: event.target.value
    })
  }

getMeal(id: string): void {
  this.mealService.get(id)
  .subscribe(
    {
      next: (res) => {
        console.log(res);
        this.updateMealForm.patchValue({
          id: res.id,
          name: res.name,
          description: res.description,
          mealType: res.mealType,
          price: res.price,
          mealImages: res.mealImages,
          active: res.active 
        });

      console.log(this.updateMealForm);

      } ,
      error: (e) => console.error(e)
    }
  );
}
}
