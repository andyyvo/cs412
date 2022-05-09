import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TicketmasterService {

  private ticketmasterEndpoint = "http://localhost:3000/ps4/";

  constructor( private http: HttpClient ) { }

  getEvent(eventType: string, location: string) {
    const body: object = {
      event: eventType,
      location: location,
    }

    return this.http.post(this.ticketmasterEndpoint, body);
  }
}
