import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Room } from 'src/app/shared/models/room.model';
import { RoomService } from 'src/app/shared/services/room.service';



@Component({
  selector: 'app-room-list-c',
  templateUrl: './room-list-c.component.html',
  styleUrls: ['./room-list-c.component.scss']
})
export class RoomListCComponent implements OnInit {
  title ='Filehandling';
  Roomslist: any;
  Imagelist: any;

  @ViewChild('content') addview !: ElementRef;
  
  
  constructor(
    private roomService: RoomService,
    private modalService: NgbModal,
    private httpclient: HttpClient,
    private route: ActivatedRoute,
    private router: Router) {
      this.getAllRooms();
     }

  getAllRooms(): void{
    this.roomService.getAll().subscribe(result => {
      this.Roomslist = result;
    });
  }

  getRoomSlide(id: any) {
    this.roomService.get(id).subscribe(result => {
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
