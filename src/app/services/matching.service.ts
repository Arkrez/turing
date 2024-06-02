import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/User";

@Injectable({
    providedIn: 'root'
})
export class MatchingService {
  constructor(private http: HttpClient) {}

  findMatch(): Observable<User> {
    return this.http.get<User>('api/find_match');
  }

}