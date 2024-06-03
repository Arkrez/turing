// src/app/services/websocket.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: WebSocket;

  constructor() {
    this.socket = new WebSocket('ws://yourserver.com:port');

    this.socket.onopen = (event) => {
      console.log('WebSocket connection established');
    };

    this.socket.onmessage = (event) => {
      console.log('WebSocket message received:', event.data);
    };

    this.socket.onclose = (event) => {
      console.log('WebSocket connection closed');
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }

  sendMessage(message: any) {
    this.socket.send(JSON.stringify(message));
  }

  getMessages(callback: (message: any) => void) {
    this.socket.onmessage = (event) => {
      callback(JSON.parse(event.data));
    };
  }
}
