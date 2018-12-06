import { Injectable } from '@angular/core';


//importing Http client to make the request from api
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';

//importing observable related code'

import { Observable } from "rxjs/Observable";
//import { catchError,map} from rxjs/operators;
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class BlogHttpService {
  public currentBlog;
  public allBlogs;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public AccessToken = 'MzJhN2M0NjAwOWM1ZGQzZDgyMWVhYjgwYTk1MDIyZTI4ODRlZmZjOTlmOWYwNTMxMGNhMTgwN2QxYzU3Y2IwZGU3OTUwOGU3MzNhMTAwYWY0YTZjNzYzNWI1OTViNTVmYTU0ZjFjZWUxYjIxOTMyMjFjZWJlMTJlNmNkMDNjYWJiZA==';
  constructor(private _http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls");
    console.log("err.message");
    return Observable.throw(err.message)
  }

  //method to return all the blogs
  public getAllBlogs(): any {

    let myResponse = this._http.get(this.baseUrl + '/all?authToken=' + this.AccessToken);
    console.log(myResponse);
    return myResponse;

  }



  //method to get a particular blog 
  public getSingleBlogInformation(currentBlogId): any {

    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.AccessToken);
    return myResponse;


  }//end of getSingleBlogInformation() function

  public createBlog(blogData)
  {
    let myResponse=this._http.post(this.baseUrl+'/create'+'?authToken='+this.AccessToken,blogData);
    return myResponse;
  }
   
  public deleteBlog(blogId)
  {
    let data={}
    let myResponse=this._http.post(this.baseUrl+'/'+blogId+'/delete'+'?authToken='+this.AccessToken,data);
    return myResponse;
  }

  public editBlog(blogId,blogData)
  {
    let myResponse=this._http.put(this.baseUrl+'/'+blogId+'/edit'+'?authToken='+this.AccessToken,blogData);
    return myResponse;
  }









}
