import { Component } from '@angular/core';
import { CommentService } from './services/comment.service';
import {Router, Event, NavigationStart} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'app';
  showNavPanel = false;

  constructor(private router: Router) {

  }

  showMenu() {
    this.showNavPanel = !this.showNavPanel;
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationStart) {
        this.showNavPanel = false;
      }

    });

  }
}
