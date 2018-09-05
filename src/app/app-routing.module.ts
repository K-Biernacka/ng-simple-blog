import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from "./blog/blog.component";
import {AdminComponent} from "./admin/admin.component";
import {NewPostComponent} from "./admin/panel/new-post/new-post.component";
import {PostComponent} from './blog/post/post.component';
import {StartComponent} from "./start/start.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'start'},
  {path: 'blog', component: BlogComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'start', component: StartComponent},
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'new-post'},
      {path: 'new-post', component: NewPostComponent}
    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
