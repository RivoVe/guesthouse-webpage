import { ExtrasImages } from "./extrasImage";

export class Extras {
  id: number;
  name: string;
  description: string;
  price: number;
  isActive: boolean;
  extrasImages: ExtrasImages[];

  constructor(id: number, name: string, description: string,
    price: number, isActive: boolean,
    extrasImages: ExtrasImages[]){
      this.id=id;
      this.name=name;
      this.description=description;
      this.price=price;
      this.isActive=isActive;
      this.extrasImages=extrasImages;
    }
}
