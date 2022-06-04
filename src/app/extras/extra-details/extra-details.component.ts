import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Extras } from 'src/app/shared/models/extras';
import { ExtrasService } from 'src/app/shared/services/extrasService';

@Component({
  selector: 'app-extra-details',
  templateUrl: './extra-details.component.html',
  styleUrls: ['./extra-details.component.scss']
})
export class ExtraDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentExtras: Extras = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    extrasImages: '',
    active: true
      
  }

  message = '';
  
  constructor(
    private extrasService: ExtrasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getExtras(this.route.snapshot.params["id"]);
    }
  }

  getExtras(id: string): void {
    this.extrasService.get(id)
    .subscribe(
      {
        next: (res) => {
          this.currentExtras = res;
          console.log(res);
        } ,
        error: (e) => console.error(e)
      }
    );
  }

  updateExtra(): void{
    this.router.navigate(['updateExtra', this.currentExtras.id]);
  }

  inActiveExtra(): void{
    this.message = '';
    this.extrasService.delete(this.currentExtras.id)
    .subscribe(
      {
      next: (res) => {
        console.log(res);
        this.message = res.message ? res.message:'The room was updated';
      },
      error: (e) => console.error(e)
    }
    );
  }

  activeExtra(): void{
    this.message = '';
    this.extrasService.restore(this.currentExtras.id)
    .subscribe(
      {
      next: (res) => {
        console.log(res);
        this.router.navigate(['/extras']);
      },
      error: (e) => console.error(e)
    }
    );
  }

  deleteExtra(): void{
    this.message = '';
    this.extrasService.deleteExtra(this.currentExtras.id)
    .subscribe(
      {
      next: (res) => {
        console.log(res);
        this.message = res.message ? res.message:'The room was deleted';
      },
      error: (e) => console.error(e)
    }
    );
  }

}
