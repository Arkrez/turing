import { Message } from '../models/Message'; // Import the Message type from the correct file path
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WebSocketService } from '../websocket/websocket.service.component';
@Injectable({
    providedIn: 'root'
  })
export class MessagingService {
    constructor(
        private http: HttpClient,
        private websocketService: WebSocketService
    ) {}

    sendMessage(message: Message): Observable<any> { // Use the imported Message type here
        // implementation
        this.websocketService.sendMessage({ 
            message: message
            
         });
        return this.http.post('api/message', message);
    }
    submitChoice(isHuman: Boolean): Observable<any> {
        return this.http.post('api/submit_choice?ishuman=' + isHuman, null);
    }
}