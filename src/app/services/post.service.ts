import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import {allNgComponent} from "codelyzer/walkerFactory/walkerFactory";

@Injectable()
export class PostService {

  constructor() { }

  getPosts(): Post[] {
    let allPosts = localStorage.getItem('posts');
    if (!allPosts) {
      return []
    }
    return allPosts;
  };

  addPost(post: Post): Post {
    let allPosts = this.getPosts();
    post.id = Date.now();
    allPosts.push(post);
    localStorage.setItem('posts', 'posts');

    return;
  }

  getPostById(id: number): Post {
    return;
  }

}
