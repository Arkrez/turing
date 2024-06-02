import { Component } from '@angular/core';
import { User } from '../models/User';
import { MessagingService } from '../services/messaging.service';
import { MatchingService } from '../services/matching.service';
import { ScoreTrackingService } from '../services/score-tracker.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
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
    this.messagingService.submitChoice(isHuman).subscribe((response) => {
      if (response.status === 200) {
        console.log("Choice submitted");
      } else {
        console.log("Error submitting choice");
      }
    });
  }

  findMatch() {
    this.matchingService.findMatch().subscribe((response) => {
      if (response) {
        this.resetVariables();
        this.opponent = response;
        console.log("Match found");
      } else {
        console.log("Error finding match");
      }
    });
  }

  updateScore() {
    this.scoreTrackingService.updateUserScore(this.match_score, this.user).subscribe((response) => {
      if (response.status === 200) {
        this.score += this.match_score;
        console.log("Score updated");
      } else {
        console.log("Error updating score");
      }
    });
  }

}
