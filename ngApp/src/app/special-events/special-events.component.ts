import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

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

  constructor(private _eventService: EventService, private _router: Router) {}

  ngOnInit(): void {
    this.listSpecialEvent();
  }

  listSpecialEvent() {
    this._eventService.getSpecialEvents().subscribe(
      (res) => (this.special_events = res),
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(['/login']);
          }
        }
      }
    );
  }
}
