import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from "./blog/blog.component";
import {AdminComponent} from "./admin/admin.component";
import {PanelComponent} from "./admin/panel/panel.component";
import {NewPostComponent} from "./admin/panel/new-post/new-post.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'blog'},
  {path: 'blog', component: BlogComponent},
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'panel'},
      {path: 'panel', component: PanelComponent},
      {path: 'new-post', component: NewPostComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
