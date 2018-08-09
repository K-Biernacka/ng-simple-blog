import { Component, OnInit } from '@angular/core';
import {Post} from "../../interfaces/post";
import {Comment} from "../../interfaces/comment";
import {PostService} from "../../services/post.service";
import {CommentService} from '../../services/comment.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService, CommentService]
})
export class PostComponent implements OnInit {

  model: Post;
  comments: Comment[];

  comment: Comment = {
    name: "",
    text: "",
    postId: null
  };

  constructor(private postService: PostService, private commentService: CommentService, private route: ActivatedRoute) { }

  ngOnInit() {

    let postId = Number(this.route.snapshot.paramMap.get('id'));

    this.model = this.postService.getPostById(postId);
    this.comments = this.commentService.getCommentsByPostId(postId).reverse()

  }

  addComment() {
    this.comment.postId = this.model.id;
    this.commentService.addComment(this.comment);

    this.comments = this.commentService.getCommentsByPostId(this.model.id).reverse();

    this.comment = {
      name: "",
      text: "",
      postId: null
    };
  }
}
