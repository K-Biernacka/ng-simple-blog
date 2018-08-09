import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { AdminComponent } from './admin/admin.component';
import { PanelComponent } from './admin/panel/panel.component';
import { NewPostComponent } from './admin/panel/new-post/new-post.component';
import { StartComponent } from './start/start.component';
import { FormsModule }   from '@angular/forms';
import { PostComponent } from './blog/post/post.component';



@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    AdminComponent,
    PanelComponent,
    NewPostComponent,
    StartComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
