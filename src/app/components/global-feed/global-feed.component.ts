import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/feed';
import { FeedService } from '../../services/feed.service';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss']
})
export class GlobalFeedComponent implements OnInit {
  posts: Post[];
  error = '';

  constructor(private feedService: FeedService) { }

  parse(created: string): string {
    const date = new Date(created);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  }

  ngOnInit() {
    this.feedService.getAll().subscribe(value => {
      this.posts = value;
    }, error1 => {
      this.error = 'Fehler beim laden des Feeds...';
    });
  }

}
