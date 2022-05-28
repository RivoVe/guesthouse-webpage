import { Extras } from "./extras";
import { User } from "./user";
import { Meal } from "./meal";

export class Booking {
  id?:number;
  arrivalDate?:Date;
  leavingDate?:Date;
  numberOfPeople?:number;
  name?:string;
  email?:string;
  phoneNumber?:string;
  rooms?:any;
  meals?: Meal[];
  extras?:Extras[];
  totalPrice?:number;
  paymentMethod?:string;
  comments?:string;
  user?:User[];
  isConfirmed?:boolean;
  isActive?:boolean;
  isPaid?:boolean;

  constructor(id: number, arrivalDate: Date, leavingDate: Date,
    numberOfPeople: number, name: string, email: string, phoneNumber: string,
    rooms: any, meals: Meal[], extras: Extras[], totlPrice: number,
    paymentMethod: string, comments: string, user: User[],
    isConfirmed:boolean, isActive: boolean, isPaid: boolean ){
      this.id=id;
      this.arrivalDate=arrivalDate;
      this.leavingDate=leavingDate;
      this.numberOfPeople=numberOfPeople;
      this.name=name;
      this.email=email;
      this.phoneNumber=phoneNumber;
      this.rooms=rooms;
      this.meals=meals;
      this.extras=extras;
      this.totalPrice=totlPrice;
      this.paymentMethod=paymentMethod;
      this.comments=comments;
      this.user=user;
      this.isConfirmed=isConfirmed;
      this.isActive=isActive;
      this.isPaid=isPaid;
    }

}
