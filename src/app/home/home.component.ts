import { Component } from '@angular/core';
import { User } from '../models/User';
import { MessagingService } from '../services/messaging.service';
import { MatchingService } from '../services/matching.service';
import { ScoreTrackingService } from '../services/score-tracker.service';
import { TimerComponent } from './timer/timer.component';
import { MessagingWindowComponent } from './messaging-window/messaging-window.component';
import { CommonModule } from '@angular/common';
import { Message, MessageBuilder } from '../models/Message';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TimerComponent,
    MessagingWindowComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user: User = new User();
  opponent: User = new User();
  score: number = 0;
  match_score: number = 0;
  constructor(
    private messagingService: MessagingService,
    private matchingService: MatchingService,
    private scoreTrackingService: ScoreTrackingService
    ) {}
  resetVariables() {
    this.match_score = 0;
    this.opponent = new User();
  }
  submitChoice(isHuman : Boolean) {

  }

  findMatch() {
    this.matchingService.findMatch();
  }

  updateScore() {
    this.scoreTrackingService.updateUserScore(this.match_score, this.user);
  }

  sendMessage(user_input: string) {
    this.messagingService.sendMessage(
      new MessageBuilder()
      .setId(this.user.id!)
      .setContent(user_input)
      .build()
    );
  }

}
