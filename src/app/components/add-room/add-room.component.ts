import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/shared/models/room.model';
import { RoomService } from 'src/app/shared/services/room.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {

  room: Room = {
    name: '',
    price: '',
  };

  submitted = false;

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {

  }

  saveRoom(): void{
    const data = {
      name: this.room.name,
      price: this.room.price
    };

    this.roomService.create(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newRoom(): void {
      this.submitted = false;
      this.room = {
        name: '',
        price: ''
      }
    };

}
