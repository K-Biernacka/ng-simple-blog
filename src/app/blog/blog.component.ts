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

  model: Post[];
  posts: Observable<Post[]>;

  constructor(private postService: PostService) {
    this.posts = postService.getPosts();
  }

  ngOnInit() {
  }

}
