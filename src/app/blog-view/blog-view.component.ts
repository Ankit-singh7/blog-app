import { Component, OnInit } from '@angular/core';

//importing route related code
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import {Location} from '@angular/common';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit {

  public currentBlog;

 
  

  constructor(private _route: ActivatedRoute, private router: Router,public blogHttpService:BlogHttpService,private location:Location,private toastr:ToastrService) {
    // alert("constructor is called");
  }

  ngOnInit() {

    // alert("OnInit is called");
    //getting the blogId from the route
    let MyBlogId = this._route.snapshot.paramMap.get('blogId');
    //  alert(MyBlogId);
    this.blogHttpService.getSingleBlogInformation(MyBlogId).subscribe(

      data =>
      {
      
        console.log(data);
        this.currentBlog = data.data;
      },
      error=>
      {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )}

    public deleteThisBlog():any{
      this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
        data=>
        {
          this.toastr.success("blog deleted succesfully");
          setTimeout(()=>{
            this.router.navigate(['/home']);
          },1000)
        },
        error=>
        {
          this.toastr.error("some error occured");
        }
      )
    }//end of deleteThisBlog

    public goBackToPreviousPage():any{
      this.location.back();
    }

  
}
