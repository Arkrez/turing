import { Message } from '../models/Message'; // Import the Message type from the correct file path
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebSocketService } from './websocket/websocket.service.component';
@Injectable({
    providedIn: 'root'
  })
export class MessagingService {
    constructor(
        private websocketService: WebSocketService
    ) {}

    sendMessage(message: Message){ // Use the imported Message type here
        // implementation
        this.websocketService.sendMessage({ 
            message: message
         });
    }
    submitChoice(isHuman: Boolean) {
    }
}