import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RoomService } from 'src/app/shared/services/room.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {
  addRoomForm: FormGroup;
  

  constructor(private roomService: RoomService) { }

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
    })
  }

  

}
