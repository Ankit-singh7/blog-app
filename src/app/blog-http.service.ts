import { Injectable } from '@angular/core';


//importing Http client to make the request from api
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';

//importing observable related code'

import { Observable } from "rxjs/Observable";
//import { catchError,map} from rxjs/operators;
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/throw';

@Injectable()
export class BlogHttpService {
  public currentBlog;
  public allBlogs;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public AccessToken = 'ZWFkNTM3NWVhOWFhMTVmOGU4ODMxZTJhNjc2N2Q5ZTIwNWMwZWYxMDEzMWYzOTcwNTdiODNiYTBlNGE2ODk5OTdhMjhjZmNiNGNmMzY4YWMyMDAwMTE2YTA5OTNjMGEyZGZhODRmMmRjZjc4YzY3ZDg1OWU5OGUyNWIxYTE3ZDA4MA==';
  constructor(private _http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls");
    console.log("err.message");
    return Observable.throw(err.message||"Server Error")
  }

  //method to return all the blogs
  public getAllBlogs(): any {

    let myResponse = this._http.get(this.baseUrl + '/all?authToken=' + this.AccessToken).catch(this.handleError);
    console.log(myResponse);
    return myResponse;

  }



  //method to get a particular blog 
  public getSingleBlogInformation(currentBlogId): any {

    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.AccessToken).catch(this.handleError);
    return myResponse;


  }//end of getSingleBlogInformation() function

  public createBlog(blogData)
  {
    let myResponse=this._http.post(this.baseUrl+'/create'+'?authToken='+this.AccessToken,blogData).catch(this.handleError);
    return myResponse;
  }
   
  public deleteBlog(blogId)
  {
    let data={}
    let myResponse=this._http.post(this.baseUrl+'/'+blogId+'/delete'+'?authToken='+this.AccessToken,data).catch(this.handleError);
    return myResponse;
  }

  public editBlog(blogId,blogData)
  {
    let myResponse=this._http.put(this.baseUrl+'/'+blogId+'/edit'+'?authToken='+this.AccessToken,blogData).catch(this.handleError);
    return myResponse;
  }









}
