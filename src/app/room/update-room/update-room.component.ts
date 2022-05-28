import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { RoomService } from 'src/app/shared/services/room.service';


const baseUrl = 'http://localhost:4200/updateRoom'

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.scss']
})
export class UpdateRoomComponent implements OnInit {
  roomTypes: string[] = ['APARTMENT', 'SINGLE_ROOM', 'DOUBLE_ROOM', 'SUMMER_HOUSE'];
  updateRoomForm!: FormGroup;


  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.updateRoomForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl(),
      roomType: new FormControl(),
      price: new FormControl(),
      roomImages: new FormControl(),
      active: new FormControl()
    })
  }

  onSubmit(): void {
    this.roomService.updateRoom(this.updateRoomForm.value).subscribe(() => {
      this.updateRoomForm.reset();
    })
  }

  selectRoomType(event:any): void {
    this.updateRoomForm.patchValue({
      listOfRoomTypes: event.target.value
    })
  }

}
