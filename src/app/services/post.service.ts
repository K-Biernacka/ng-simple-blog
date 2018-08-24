import {Injectable} from '@angular/core';
import {Post} from '../interfaces/post';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class PostService {
  private db: AngularFirestore;

  constructor(db: AngularFirestore) {
    this.db = db;
  }


  async addPost(post: Post): Promise<Post> {
    const id = this.db.createId();
    post.id = id;
    await this.db.collection<Post>('posts').doc(id).set(post);
    return post;
  }

  getPostById(id: string): Observable<Post> {
    return this.db.doc<Post>(`posts/${id}`).valueChanges();
  }

  getPosts(): Observable<Post[]> {
    return this.db.collection<Post>('posts').valueChanges();
  }

}


