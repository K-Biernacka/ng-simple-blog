import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { AdminComponent } from './admin/admin.component';
import { NewPostComponent } from './admin/panel/new-post/new-post.component';
import { StartComponent } from './start/start.component';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './blog/post/post.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    AdminComponent,
    NewPostComponent,
    StartComponent,
    PostComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
