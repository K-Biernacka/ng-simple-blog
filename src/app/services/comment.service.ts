import { Injectable } from '@angular/core';
import { Comment } from '../interfaces/comment';

@Injectable()
export class CommentService {

  constructor() { }

  getComments() {
    let allComments = localStorage.getItem('comments');

    if (!allComments) {
      return []
    }

    let comments = JSON.parse(allComments);

    if (!comments.length) {
      return []
    }

    return comments;

  }

  getCommentsByPostId(postId: number): Comment[] {

    return this.getComments().filter(comment => comment.postId === postId);

  };

  addComment(comment: Comment): Comment {
    let allComments = this.getComments();
    comment.id = Date.now();
    allComments.push(comment);
    localStorage.setItem('comments', JSON.stringify(allComments));

    return comment;
  };


}
