import { ExtrasImages } from "./extrasImage";

export class Extras {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  active?: boolean;
  extrasImages?: string;

  constructor(id: number, name: string, description: string,
    price: number, active: boolean,
    extrasImages: string){
      this.id=id;
      this.name=name;
      this.description=description;
      this.price=price;
      this.active=active;
      this.extrasImages=extrasImages;
    }
}
