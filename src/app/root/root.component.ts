import { Component, OnInit ,NgModule,
  Pipe
  } from '@angular/core';
import { RequestOptions,Request,RequestMethod,Http,Response,Headers, } from '@angular/http';
import { ActivatedRoute, Router, } from '@angular/router';
//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/toPromise';

import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';


import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  teacher=[];
  class=[];
  tea=[];
  stu=[];
    constructor(private http: Http, private router: Router, private route: ActivatedRoute) { }
  fetchclass=function()
  {

    this.http.get("http://10.10.5.54:3004/fetch").subscribe (
        (res:Response) =>{
          this.teacher=res.json();
            // var teacherslist=this.teacher[0].First_Name;
          console.log(this.teacher)




        }
      )
  }

  fetchsubjects=function(pro)
  {
    this.http.get("http://10.10.5.54:3004/fetch").subscribe (
        (res:Response) =>{
          this.teacher=res.json();
            // var teacherslist=this.teacher[0].First_Name;
          console.log(this.teacher)

      }
    )
  }

  openCity=function(c,s)
  {console.log("hii")
  var e=document.getElementById(c)
  var x=document.getElementById(s)
  var url="http://10.10.5.54:3004/getdetails"+"/"+e.options[e.selectedIndex].value+"/"+x.options[x.selectedIndex].value
  console.log(url)
    this.http.get(url).subscribe (
      (res:Response) =>{
        this.tea=res.json();
          // var teacherslist=this.teacher[0].First_Name;
          console.log(this.tea)

      }

  )



  }
  openLock=function(c,s)
  {console.log("hii")
  var e=document.getElementById(c)
  var x=document.getElementById(s)
  var url="http://10.10.5.42:5000/filter"+"/"+e.options[e.selectedIndex].value+"/"+x.options[x.selectedIndex].value
  console.log(url)
    this.http.get(url).subscribe (
      (res:Response) =>{
        this.stu=res.json();
          // var teacherslist=this.teacher[0].First_Name;
          console.log(this.stu)

      }

  )



  }
    ngOnInit() {
      this.fetchclass();



    }

  }
