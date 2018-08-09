import { Component, OnInit } from '@angular/core';
import {Post} from "../interfaces/post";
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [PostService]
})
export class BlogComponent implements OnInit {

  model: Post[];

  constructor(private postService: PostService) {
    this.model = postService.getPosts();
  }

  ngOnInit() {
  }

}
