import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { RoomService } from 'src/app/shared/services/room.service';
import { Router } from '@angular/router';

const baseUrl = 'http://localhost:4200/addRoom'

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {
  roomTypes: string[] = ['APARTMENT', 'SINGLE_ROOM', 'DOUBLE_ROOM', 'SUMMER_HOUSE'];
  addRoomForm!: FormGroup;


  constructor(private roomService: RoomService, private router: Router) { }

  ngOnInit(): void {
    this.addRoomForm = new FormGroup({
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
    this.roomService.createRoom(this.addRoomForm.value).subscribe(() => {
      this.addRoomForm.reset();
      this.router.navigateByUrl('/rooms');
    })
  }

  selectRoomType(event:any): void {
    this.addRoomForm.patchValue({
      listOfRoomTypes: event.target.value
    })
  }

}
