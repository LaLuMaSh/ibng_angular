import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feed } from '../model/feed';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private httpClient: HttpClient) {
  }

  public getFeed(): Observable<Feed> {
    return this.httpClient.get<Feed>('http://localhost:8080/feed/' + JSON.parse(localStorage.getItem('user')).username);
  }

  public update(feed: Feed) {
    return this.httpClient.post('http://localhost:8080/feed/user/update', feed);
  }
}
