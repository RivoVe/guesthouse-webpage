import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Room } from 'src/app/shared/models/room.model';
import { RoomService } from 'src/app/shared/services/room.service';
import * as alertifyjs from 'alertifyjs'
import { catchError, map, of } from 'rxjs';
import { HttpErrorResponse, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  rooms?: Room[];
  currentRoom: Room = {};
  currentIndex = -1;
  name = '';
  roomImages: any;
  EditRoomId = '';
  file!: File; //variable to store file
  progressvalue = 0;

  @ViewChild('content') addview !: ElementRef;

  constructor(private roomService: RoomService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.retrieveRooms();
  }

  retrieveRooms(): void{
    this.roomService.getAll()
    .subscribe({
      next: (res) => {
        this.rooms = res;
        console.log(res);
      },
      error: e => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveRooms();
    this.currentRoom = {};
    this.currentIndex = -1;
  }

  setActiveRoom(room: Room, index: number): void {
    this.currentRoom = room;
    this.currentIndex = index;
  }

  UploadImage(id:any, roomImages:any){
    this.open();
    this.roomImages=roomImages;
    this.EditRoomId=id;

  }

  RemoveImage(id:any, name:any){
    if (confirm("Do you want remove the image : " + name + " ?")) {
      this.roomService.RemoveImage(id).subscribe(result => {
        alertifyjs.success("Image removed successfully.");
        this.retrieveRooms();
      });
    }
    
  }

  ProceedUpload(){
    let formdata= new FormData();
    formdata.append("file", this.file, this.EditRoomId)
    this.roomService.UploadImage(formdata).pipe(

      map(events => {
        switch (events.type) {
          case HttpEventType.UploadProgress:
            this.progressvalue = Math.round(events.loaded / events.total! * 100);
            break;
          case HttpEventType.Response:
            this.retrieveRooms();
            alertifyjs.success("Upload completed");
            setTimeout(() => {
              this.progressvalue = 0;
            }, 2500);
            break;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        alertifyjs.error('Failed to upload')
        return of("failed");
      })
      ).subscribe(result=>{
     // this.retrieveRooms();
     // alertifyjs.success("Upload completed");
    });
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

  onchange(event: any) {
    let reader = new FileReader();
    this.file=event.target.files[0];
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.roomImages = reader.result;
    };
  }

   
}
