import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MealService } from 'src/app/shared/services/mealService';

@Component({
  selector: 'app-meal-list-c',
  templateUrl: './meal-list-c.component.html',
  styleUrls: ['./meal-list-c.component.scss']
})
export class MealListCComponent implements OnInit {
  Mealslist: any;
  Imagelist: any;

  @ViewChild('content') addview !: ElementRef;
  

  constructor(
    private mealService: MealService,
    private modalService: NgbModal,
    private router: Router) {
      this.getAllMeals();
     }

  getAllMeals(): void{
      this.mealService.getAll().subscribe(result => {
        this.Mealslist = result;
      });
    }

  getMealSlide(id: any) {
      this.mealService.get(id).subscribe(result => {
        this.Imagelist = result;
      })
      this.open();
    }
  
  open() {
      this.modalService.open(this.addview, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      }, (reason) => {
      });
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }










  

  ngOnInit(): void {
  }

}
