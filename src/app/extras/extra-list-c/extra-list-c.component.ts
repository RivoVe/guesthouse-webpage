import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ExtrasService } from 'src/app/shared/services/extrasService';

@Component({
  selector: 'app-extra-list-c',
  templateUrl: './extra-list-c.component.html',
  styleUrls: ['./extra-list-c.component.scss']
})
export class ExtraListCComponent implements OnInit {

  Extraslist: any;
  Imagelist: any;

  @ViewChild('content') addview !: ElementRef;
  constructor(
    private extrasService: ExtrasService,
    private modalService: NgbModal,
    private httpclient: HttpClient,
    private route: ActivatedRoute,
    private router: Router) {
      this.getAllExtras();
     }

    getAllExtras(): void{
      this.extrasService.getAll().subscribe(result => {
        this.Extraslist = result;
      });
    }
  
    getExtrasSlide(id: any) {
      this.extrasService.get(id).subscribe(result => {
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
