import { User } from '../models/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreTrackingService {
  updateUserScore(score: number, user: User){
    const params = { user_id: user.id!.toString(), score: score.toString() };
    
  }
}
