import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogs:any[]=[];

  constructor() { }

  ngOnInit(): void {
    this.blogs=JSON.parse(localStorage.getItem("blogs")||'{}');
    console.log(this.blogs);
  }

  remove(blog: any)
  {
    let index= this.blogs.indexOf(blog);
    this.blogs.splice(index,1);
    localStorage.setItem("blogs",JSON.stringify(this.blogs));
    console.log("Item has been deleted");
  }

}
