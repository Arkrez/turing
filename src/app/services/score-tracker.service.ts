import { User } from '../models/User'; // Import the User type from the correct file path with correct casing
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
export class ScoreTrackerService {
    constructor(private http: HttpClient) {}

    updateUserScore(hasWon: Boolean, user: User): Observable<any> { // Use the imported Message type here
        // implementation
        return this.http.post('api/update_score?user_id=' + user.id + '?score=' + hasWon, null); // Add null as the body parameter
    }
}