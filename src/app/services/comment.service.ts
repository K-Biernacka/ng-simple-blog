import { Injectable } from '@angular/core';
import { Comment } from '../interfaces/comment';

@Injectable()
export class CommentService {

  constructor() { }

  getCommentsByPostId(postId: number): Comment[] {
    return [];
  };

  addComment(comment: Comment): Comment {
    return;
  };


}
