import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable()
export class PostService {

  constructor() { }

  getPosts(): Post[] {
    let allPosts = localStorage.getItem('posts');

    if (!allPosts) {
      return []
    }

    let postsObject = JSON.parse(allPosts);

    if (!postsObject.length) {
      return []
    }

    return postsObject;
  };

  addPost(post: Post): Post {
    let allPosts = this.getPosts();
    post.id = Date.now();
    allPosts.push(post);
    localStorage.setItem('posts', JSON.stringify(allPosts));

    return post;
  }

  getPostById(id: number): Post {
    return this.getPosts().find(post => post.id === id );
  }

}
