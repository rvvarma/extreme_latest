import { Component, OnInit ,NgModule,
  Pipe
  } from '@angular/core';
import { RequestOptions,Request,RequestMethod,Http,Response,Headers, } from '@angular/http';
import { ActivatedRoute, Router, } from '@angular/router';
//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';

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
    constructor(private http: Http, private router: Router, private route: ActivatedRoute,private httpService: HttpClient) { }
  fetchclass=function()
  {
    var url=this.arrBirds.IP +":"+this.arrBirds.port+"/users1/fetch"


console.log(url)
    this.http.get(url).subscribe (
        (res:Response) =>{
          this.teacher=res.json();
            // var

            list=this.teacher[0].First_Name;
          console.log(this.teacher)




        }
      )
  }

  fetchsubjects=function(pro)
  {
    var url=this.arrBirds.IP +":"+this.arrBirds.port+"/users1/fetch"

    this.http.get(url).subscribe (
        (res:Response) =>{
          this.teacher=res.json();
            // var teacherslist=this.teacher[0].First_Name;
          console.log(this.teacher)

      }
    )
  }

  openCity=function(evt,ee,c,s)
  {console.log("hii")
  var i, tabcontent, tablinks;
   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
       tabcontent[i].style.display = "none";
   }
   tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" active", "");
   }
   document.getElementById(ee).style.display = "block";
  var e=document.getElementById(c)
  var x=document.getElementById(s)
  //var url=this.arrBirds.IP +":"+this.arrBirds.port+"/users1/getdetails"

  var url=this.arrBirds.IP +":"+this.arrBirds.port+"/users1/getdetails"+"/"+e.options[e.selectedIndex].value+"/"+x.options[x.selectedIndex].value
  console.log(url)
    this.http.get(url).subscribe (
      (res:Response) =>{
        this.tea=res.json();
          //var teacherslist=this.teacher[0].First_Name;
          console.log(this.tea)

      }

  )



  }
  openLock=function(c,s)
  {console.log("hii")
  var e=document.getElementById(c)
  var x=document.getElementById(s)
  var url=this.arrBirds.IP +":"+this.arrBirds.port+"/filter"+"/"+e.options[e.selectedIndex].value+"/"+x.options[x.selectedIndex].value

//  var url="http://10.10.5.42:5000/filter"+"/"+e.options[e.selectedIndex].value+"/"+x.options[x.selectedIndex].value
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
      this.httpService.get('../assets/config/IPconfig.json').subscribe(
          data => {
            this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.

             var url=this.arrBirds.IP +":"this.arrBirds.port+"/classesconfig"
             console.log(url)
             this.fetchclass();
           });




    }

  }
