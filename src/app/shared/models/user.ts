export class User {
  id:number;
  name:string;
  phoneNumber:string;
  email:string;
  registrationDate:Date;
  isActive:boolean;

  constructor(id:number, name:string, phoneNumber:string,
    email: string, registrationDate: Date, isActive:boolean){
      this.id=id;
      this.name=name;
      this.phoneNumber=phoneNumber;
      this.email=email;
      this.registrationDate=registrationDate;
      this.isActive=isActive;
    }
}
