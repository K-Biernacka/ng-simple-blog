import { Component, OnInit } from '@angular/core';
import {Post} from "../../../interfaces/post";
import {PostService} from "../../../services/post.service";
import {auth} from "firebase";
import {AngularFireAuth} from "angularfire2/auth";

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
    text: '',
    author: ''
  };


  constructor(private postService: PostService, public afAuth: AngularFireAuth) {

  }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
    this.afAuth.user.subscribe(user => this.model.author = user.displayName);
  }
  onSubmit() {
      this.postService.addPost(this.model);

      this.model = {
        title : '',
        short: '',
        text: '',
        author: ''
      };
  }

}
