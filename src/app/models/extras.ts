import { ExtrasImages } from "./extrasImage";
import { GuestHouse } from "./guestHouse";

export class Extras {
  id: number;
  name: string;
  description: string;
  price: number;
  isActive: boolean;
  guesthouse: GuestHouse;
  extrasImages: ExtrasImages[];

  constructor(id: number, name: string, description: string,
    price: number, isActive: boolean, guestHouse: GuestHouse,
    extrasImages: ExtrasImages[]){
      this.id=id;
      this.name=name;
      this.description=description;
      this.price=price;
      this.isActive=isActive;
      this.guesthouse=guestHouse;
      this.extrasImages=extrasImages;
    }
}
