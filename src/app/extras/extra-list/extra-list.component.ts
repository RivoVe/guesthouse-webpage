import { Component, OnInit } from '@angular/core';
import { Extras } from 'src/app/shared/models/extras';
import { ExtrasService } from 'src/app/shared/services/extrasService';


@Component({
  selector: 'app-extra-list',
  templateUrl: './extra-list.component.html',
  styleUrls: ['./extra-list.component.scss']
})
export class ExtraListComponent implements OnInit {
  extrass?: Extras[];
  currentExtras: Extras = {};
  currentIndex = -1;
  name = '';

  constructor(private extrasService: ExtrasService) { }

  ngOnInit(): void {
    this.retrieveExtras();
  }

  retrieveExtras(): void{
    this.extrasService.getAll()
    .subscribe({
      next: (res) => {
        this.extrass = res;
        console.log(res);
      },
      error: e => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveExtras();
    this.currentExtras = {};
    this.currentIndex = -1;
  }

  setActiveExtras(extras: Extras, index: number): void {
    this.currentExtras = extras;
    this.currentIndex = index;
  }

}
