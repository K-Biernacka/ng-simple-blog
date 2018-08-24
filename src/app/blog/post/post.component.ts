import { Component, OnInit } from '@angular/core';
import {Post} from '../../interfaces/post';
import {Comment} from '../../interfaces/comment';
import {PostService} from '../../services/post.service';
import {CommentService} from '../../services/comment.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService, CommentService]
})
export class PostComponent implements OnInit {

  post: Observable<Post>;
  comments: Observable<Comment[]>;

  comment: Comment = {
    name: '',
    text: '',
    timestamp: new Date()
  };
  private postId: string;

  constructor(private postService: PostService, private commentService: CommentService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.postId = this.route.snapshot.paramMap.get('id');
    this.post = this.postService.getPostById(this.postId);
    this.comments = this.commentService.getCommentsByPostId(this.postId);

  }

  async addComment() {
      await this.commentService.addComment(this.postId, this.comment);

      this.comment = {
        name: '',
        text: '',
        timestamp: new Date()
      };
  }
}
