import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket!: WebSocket;
  private server_name = 'ws://localhost:4200/';

  constructor() {
    console.log("Browser: " + this.isBrowser());
    if (this.isBrowser()) {
      this.initializeWebSocket();
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.WebSocket !== 'undefined';
  }

  private initializeWebSocket() {
    this.socket = new WebSocket(this.server_name);

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
      this.tryReconnect();
    };
  }

  private async tryReconnect() {
    let attempts = 3;
    while (attempts > 0 && this.socket.readyState !== WebSocket.OPEN) {
      console.log('Attempting to reconnect...');
      this.socket = new WebSocket(this.server_name);

      let timeout = 15;
      while (timeout > 0 && this.socket.readyState === WebSocket.CONNECTING) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        timeout--;
      }
      if (this.socket.readyState === WebSocket.OPEN) {
        console.log('Reconnected to WebSocket');
        return true;
      }
      attempts--;
    }
    return this.socket.readyState === WebSocket.OPEN;
  }

  async sendMessage(message: any) {
    if (await this.tryReconnect()) {
      this.socket.send(JSON.stringify(message));
    } else {
      console.log("Error: WebSocket connection to server is not open. Status is: " + this.socket.readyState);
    }
  }

  getMessages(callback: (message: any) => void) {
    if (this.isBrowser()) {
      this.socket.onmessage = (event) => {
        callback(JSON.parse(event.data));
      };
    }
  }
}
