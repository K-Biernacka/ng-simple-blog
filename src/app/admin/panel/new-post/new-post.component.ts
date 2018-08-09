import { Component, OnInit } from '@angular/core';
import {Post} from "../../../interfaces/post";
import {PostService} from "../../../services/post.service";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
  providers: [PostService]
})
export class NewPostComponent implements OnInit {

  model: Post = {
    title : '',
    short: '',
    text: ''
  };


  constructor(private postService: PostService) {

  }

  ngOnInit() {
  }
  onSubmit() {
    this.postService.addPost(this.model);

    this.model = {
      title : '',
      short: '',
      text: ''
    };

  }

}
