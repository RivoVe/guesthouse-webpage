import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/shared/models/room.model';
import { RoomService } from 'src/app/shared/services/room.service';


@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentRoom: Room = {
    id: 0,
    name: '',
    description: '',
    roomType: '',
    price: 0,
    roomImages: '',
    active: true
  }

  message? = '';


  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getRoom(this.route.snapshot.params["id"]);
    }
  }

  getRoom(id: string): void {
    this.roomService.get(id)
    .subscribe(
      {
        next: (res) => {
          this.currentRoom = res;
          console.log(res);
        } ,
        error: (e) => console.error(e)
      }
    );
  }

  /*updateRoom(): void{
    this.message = '';
    this.roomService.updateRoom(this.currentRoom)
    .subscribe(
      {
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    }
    );
  }
  */

  inActiveRoom(): void{
    this.message = '';
    this.roomService.delete(this.currentRoom.id)
    .subscribe(
      {
      next: (res) => {
        console.log(res);
        this.message = res.message ? res.message:'The room was updated';
      },
      error: (e) => console.error(e)
    }
    );
  }


    activeRoom(): void{
      this.message = '';
      this.roomService.restore(this.currentRoom.id)
      .subscribe(
        {
        next: (res) => {
          console.log(res);
          this.router.navigate(['/rooms']);
        },
        error: (e) => console.error(e)
      }
      );
    }

    deleteRoom(): void{
      this.message = '';
      this.roomService.deleteRoom(this.currentRoom.id)
      .subscribe(
        {
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message:'The room was updated';
        },
        error: (e) => console.error(e)
      }
      );
    }



}

