import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/shared/models/room.model';
import { RoomService } from 'src/app/shared/services/room.service';

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

  constructor(private roomService: RoomService) { }

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

  removeAllRooms(): void {
    this.roomService.deleteRoom(this.currentRoom.id)
    .subscribe({
      next: (res) =>{
        console.log(res);
        this.refreshList();
      },
      error: e => console.error(e)
    });
  }


}
