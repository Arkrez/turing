import { Component, Input } from '@angular/core';
import { User } from '../../models/User';
import { Message } from '../../models/Message';
import { MessagingService } from '../../services/messaging.service';
import { MessageBuilder } from '../../models/Message';
@Component({
  selector: 'app-messaging-window',
  standalone: true,
  imports: [],
  templateUrl: './messaging-window.component.html',
  styleUrl: './messaging-window.component.scss'
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

      this.messagingService.sendMessage(message).subscribe((response) => {
        if (response.status === 200) {
          this.messages.push(message);
        } else {
          console.log("Error sending message")
        }
      });
    }

}
