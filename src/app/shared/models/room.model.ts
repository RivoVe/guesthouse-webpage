export class Room {
id?: number;
name?: string;
description?: string;
roomType?: string;
price?: number;
roomImages?: string;
active?: boolean;

constructor(id:number, name:string, description:string,  roomType:string, price: number,
  roomImages: string, active:boolean, ){
    this.id=id;
    this.name=name;
    this.description=description;
    this.roomType=roomType;
    this.price=price;
    this.roomImages=roomImages;
    this.active=active;  }


}
