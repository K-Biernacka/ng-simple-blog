import { Injectable } from '@angular/core';
import { Comment } from '../interfaces/comment';
import {AngularFirestore, DocumentReference} from 'angularfire2/firestore';
import {Post} from '../interfaces/post';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CommentService {

  db: AngularFirestore;

  constructor(db: AngularFirestore) {
    this.db = db;
  }

  getCommentsByPostId(postId: string): Observable<Comment[]> {
    return this.db.collection<Post>('posts')
      .doc(postId)
      .collection<Comment>('comments', ref => ref.orderBy('timestamp', 'desc'))
      .valueChanges();
  }

  addComment(postId: string, comment: Comment): Promise<DocumentReference> {
    return this.db.collection<Post>('posts')
      .doc(postId)
      .collection<Comment>('comments')
      .add(comment);
  }

}
