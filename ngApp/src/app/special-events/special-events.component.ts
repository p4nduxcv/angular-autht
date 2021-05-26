import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss'],
})
export class SpecialEventsComponent implements OnInit {
  special_events = [
    {
      name: '',
      description: '',
      date: '',
    },
  ];

  constructor(private _eventService: EventService) {}

  ngOnInit(): void {
    this.listSpecialEvent();
  }

  listSpecialEvent() {
    this._eventService.getSpecialEvents().subscribe(
      (res) => (this.special_events = res),
      (err) => console.log(err)
    );
  }
}
