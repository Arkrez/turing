import { User } from '../models/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreTrackingService {
  private apiUrl = 'http://localhost:3000/api'; // Update this URL to your Node.js server's URL

  constructor(private http: HttpClient) {}

  updateUserScore(score: number, user: User): Observable<any> {
    const url = `${this.apiUrl}/update_score`;
    const params = { user_id: user.id!.toString(), score: score.toString() };
    return this.http.post(url, null, { params });
  }
}
