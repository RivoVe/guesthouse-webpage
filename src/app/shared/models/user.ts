export class User {
  id?:number;
  name?:string;
  phoneNumber?:string;
  email?:string;
  registrationDate?:Date;
  isActive?:boolean;
  password?:string;
  authority?:string;

  constructor(id:number, name:string, phoneNumber:string,
    email: string, registrationDate: Date, isActive:boolean, password:string, authority:string){
      this.id=id;
      this.name=name;
      this.phoneNumber=phoneNumber;
      this.email=email;
      this.registrationDate=registrationDate;
      this.isActive=isActive;
      this.password=password;
      this.authority=authority;
    }
}
