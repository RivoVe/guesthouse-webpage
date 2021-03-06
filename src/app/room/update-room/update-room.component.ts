import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/shared/services/room.service';


const baseUrl = 'http://localhost:4200/updateRoom/:id'

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.scss']
})
export class UpdateRoomComponent implements OnInit {

  roomTypes: string[] = ['APARTMENT', 'SINGLE_ROOM', 'DOUBLE_ROOM', 'SUMMER_HOUSE'];
  updateRoomForm!: FormGroup;


  constructor(private roomService: RoomService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.updateRoomForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl(),
      roomType: new FormControl(),
      price: new FormControl(),
      roomImages: new FormControl(),
      active: new FormControl()
    });

    this.route.params.subscribe(params => this.getRoom(params["id"]));

  }

  onSubmit(): void {
    this.roomService.updateRoom(this.updateRoomForm.value).subscribe(() => {
      this.router.navigateByUrl('/rooms');
    })
  }

  selectRoomType(event:any): void {
    this.updateRoomForm.patchValue({
      listOfRoomTypes: event.target.value
    })
  }

  getRoom(id: string): void {
    this.roomService.get(id)
    .subscribe(
      {
        next: (res) => {
          console.log(res);
          this.updateRoomForm.patchValue({
            id: res.id,
            name: res.name,
            description: res.description,
            roomType: res.roomType,
            price: res.price,
            roomImages: res.roomImages,
            active: res.active
          });


        console.log(this.updateRoomForm);

        } ,
        error: (e) => console.error(e)
      }
    );
  }

}
