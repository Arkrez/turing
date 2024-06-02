import { Message } from '../models/Message'; // Import the Message type from the correct file path
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
export class MessagingService {
    constructor(private http: HttpClient) {}

    sendMessage(message: Message): Observable<any> { // Use the imported Message type here
        // implementation
        return this.http.post('api/message', message);
    }
    submitChoice(isHuman: Boolean): Observable<any> {
        return this.http.post('api/submit_choice?ishuman=' + isHuman, null);
    }
}