import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { Feed, Post } from '../../model/feed';
import DateTimeFormat = Intl.DateTimeFormat;
import { RegisterUser } from '../../model/User';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  post = new Post();
  message = '';
  formError = false;
  postGroup = new FormGroup({
    postText: new FormControl(''),
  }, Validators.required);
  feed: Feed;
  error = '';
  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feedService.getFeed().subscribe(value => {
      this.feed = value;
    }, error1 => {
      this.error = 'Fehler beim laden des Feeds...';
    });
  }

  parse(created: string): string {
    const date = new Date(created);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  }

  sendPost(f: NgForm) {
    this.post.author = JSON.parse(localStorage.getItem('user')).nickname;
    this.post.created = new Date(Date.now()).toISOString();
    this.feed.postEntities.push(this.post);
    this.post = new Post();
    this.feedService.update(this.feed).subscribe(value => {
      this.message = 'Der Post wurde erfoglreich erstellt.';
    }, error => {
      this.message = error.message;
      this.formError = true;
    });
  }
}
