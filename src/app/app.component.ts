import { Component } from '@angular/core';
import { CommentService } from './services/comment.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'app';
  showNavPanel = false;
  showMenu() {
    this.showNavPanel = !this.showNavPanel;
  }

}
