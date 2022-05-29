import { MealImage } from "./mealImage";

export class Meal{
  id?:number;
  name?:string;
  description?:string;
  price?:number;
  active?:boolean;
  mealType?:string;
  mealImages?:MealImage[];

  constructor(id:number, name:string, description:string,
    price: number, active:boolean, mealType:string,
     mealImages: MealImage[]){
      this.id=id;
      this.name=name;
      this.description=description;
      this.price=price;
      this.active=active;
      this.mealType=mealType;
      this.mealImages=mealImages;
    }
}
