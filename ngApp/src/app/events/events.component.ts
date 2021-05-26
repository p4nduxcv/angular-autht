import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events = [
    {
      name: '',
      description: '',
      date: '',
    },
  ];
  constructor(private _eventService: EventService) {}

  ngOnInit(): void {
    this.listEvent();
  }

  listEvent() {
    this._eventService.getEvents().subscribe(
      (res) => ((this.events = res), console.log(res)),
      (err) => console.log(err)
    );
  }
}
