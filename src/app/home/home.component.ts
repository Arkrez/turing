import { Component } from '@angular/core';
import { User } from '../models/User';
import { MessagingService } from '../services/messaging.service';
import { MatchingService } from '../services/matching.service';
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
  constructor(
    private messagingService: MessagingService,
    private matchingService: MatchingService
    ) {}


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
        this.opponent = response;
        console.log("Match found");
      } else {
        console.log("Error finding match");
      }
    });
  }

  updateScore() {

  }

}
