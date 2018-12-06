import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
 
  public currentBlog;

  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "author": "admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "This is a blog",
      "description": "This is blog 1 description",
      "title": "The First Blog"
    },
    {
      "blogId": "2",
      "lastModified": "2017-10-21T21:47:51.678Z",
      "created": "2017-10-21T21:47:51.678Z",
      "tags": [],
      "author": "admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "This is a blog",
      "description": "This is blog 2 description",
      "title": "The Second Blog"
    },
    {
      "blogId": "3",
      "lastModified": "2017-11-14T14:15:54.407Z",
      "created": "2017-11-14T14:15:54.407Z",
      "tags": [],
      "author": "admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "This is a blog",
      "description": "This is blog 3 description",
      "title": "The Third Blog"
    }

  ]

  constructor() {

    console.log("Blog service is called");
   }


   //method to return all the blogs
  public getAllBlogs():any
  {
    return this.allBlogs;
  }

 

  //method to get a particular blog 
  public getSingleBlogInformation(currentBlogId): any {
    //using a for of loop

    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }

    return this.currentBlog;

    // console.log( this.currentBlog);

  }//end of getSingleBlogInformation() function



 
}
