import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable()
export class PostService {

  constructor() { }

  getPosts(): Post[] {
    return [];
  };

  addPost(post: Post): Post {
    return;
  }

  getPostById(id: number): Post {
    return;
  }

}
