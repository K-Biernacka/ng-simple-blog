import { Component, OnInit } from '@angular/core';
import {Post} from '../interfaces/post';
import {PostService} from '../services/post.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [PostService]
})
export class BlogComponent implements OnInit {


  posts: Observable<Post[]>;
  showSpinner: boolean = true;


  constructor(private postService: PostService) {
    this.posts = postService.getPosts();
  }

  ngOnInit() {
    this.posts.subscribe(() => this.showSpinner = false)
  }

}
