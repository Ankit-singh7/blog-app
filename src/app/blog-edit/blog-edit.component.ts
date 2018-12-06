import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];

  constructor(private blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router: Router,private toastr:ToastrService) { }

  ngOnInit() {

    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data => {
        this.currentBlog = data.data;

      },
      error => {
        console.log(error.errorMessage);
      }
    )



  }//end of on init

  public editThisBlog(): any {

    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(

      data => {
        this.toastr.success("blog edited succesfully");
         setTimeout(()=>{
             this.router.navigate(['/blog',this.currentBlog.blogId]);
           },1000)
      },
      error => {
        this.toastr.error("some error occured");
      }
    )

  }//end of function
}
