import { Component, OnInit } from '@angular/core';
import { TicketmasterService } from './ticketmaster.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  constructor() { }

  eventType: string = "";
  location: string = "";

  ticketmaster: TicketmasterService = null;

  submitted = false;

  ngOnInit(): void {
    if (this.submitted) {
      this.ticketmaster.getEvent(this.eventType, this.location).subscribe(
        response => {
          console.log("Event details");
          console.log(response);
        }
      )
    }
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.eventType);
  }

}
