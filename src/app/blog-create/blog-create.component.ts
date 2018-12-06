import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router: Router, private toastr: ToastrService/*,private toastr:ToastsManager,vcr:ViewContainerRef*/) {

    //   this.toastr.setRootViewContainerRef(vcr);
  }

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];


  ngOnInit() {
  }

  public createBlog(): any {

    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    }//end of blog data
    console.log(blogData);
    this.blogHttpService.createBlog(blogData).subscribe(

     (data) => {
        console.log(data);
        // this.toastr.success("blog created succesfully");
        // alert("blog created succesfully");
        this.toastr.success("blog created succesfully");
        //very useful function to redirect the user after creating a blog to the blog-view component
        setTimeout(() => {
          this.router.navigate(['/blog', data['data']['blogId']]);
        }, 1000)
      },

      error => {
        this.toastr.error('Some Error occured!', 'Error');
        //  alert("some error occured");
      }





    )

  }//end of create blog method




}
