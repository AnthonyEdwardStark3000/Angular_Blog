import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBlogComponent } from './add-blog/add-blog.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"addBlog",
    component:AddBlogComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
