import { BrowserModule } from '@angular/platform-browser';
 
import { NgModule } from '@angular/core';

//import this for forms
import {FormsModule} from '@angular/forms';

//HttpClientModule is to be imported in latest version of angular
import { HttpClientModule } from '@angular/common/http';

//router module used for setting up the application level route
import {RouterModule,Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
//import this module for toastr
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {ToastrModule} from 'ng2-toastr/ng2-toastr';  
import { ToastrModule } from 'ngx-toastr';
 

 
import { AppComponent } from './app.component';
import {AboutComponent} from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { NotfoundComponent } from './notfound/notfound.component';

//import statement for service
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';




//decorators
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    NotfoundComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
    
    //routerModule forRoot method to declare the possible routes in application
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'about',component:AboutComponent},
      {path:'create',component: BlogCreateComponent},
      {path:'blog/:blogId',component: BlogViewComponent},
      {path:'edit/:blogId',component: BlogEditComponent},
      {path:'**',component: NotfoundComponent}

      
      


    ])
  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
