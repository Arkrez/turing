import { Component, Input } from '@angular/core';
import { User } from '../../models/User';
import { Message } from '../../models/Message';
import { MessagingService } from '../../services/messaging.service';
import { MessageBuilder } from '../../models/Message';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-messaging-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messaging-window.component.html',
  styleUrls: ['./messaging-window.component.scss']
})
export class MessagingWindowComponent {
  @Input() user!: User;
  messages: Message[] = [];
  constructor(
    private messagingService: MessagingService
    ) {}
  sendMessage(user_input: string): void {
    let message = new MessageBuilder()
      .setId(this.user.id!)
      .setContent(user_input)
      .build();

    this.messagingService.sendMessage(message)
    this.messages.push(message);

  }
}
