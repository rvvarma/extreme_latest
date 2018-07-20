import { Component, OnInit,NgModule,Pipe,} from '@angular/core';
import { trigger, style, transition, animate, group }
    from '@angular/animations';
import { RequestOptions,Request,RequestMethod,Http,Response,Headers,ResponseType, ResponseContentType } from '@angular/http';
import { ActivatedRoute, Router, } from '@angular/router';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import * as $ from 'jquery';

import { HttpErrorResponse } from '@angular/common/http';

import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { HttpClient } from '@angular/common/http';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { identifierName } from '@angular/compiler';


@Component({
  selector: 'app-assign-teacher-class-list',
  templateUrl: './assign-teacher-class-list.component.html',
  styleUrls: ['./assign-teacher-class-list.component.css']
})
export class AssignTeacherClassListComponent implements OnInit {
  constructor( private http: Http, private router: Router, private route: ActivatedRoute, private httpService: HttpClient) { }
  teacher=[];
  class=[];
  section=[];
  subjects=[];
  timein=[];
  timeout=[];
  day=[];

  fetchDate=function()
{
var url=this.arrBirds.IP +":"+this.arrBirds.port+"/users1/fetch";
console.log(url)
  this.http.get(url).subscribe (
    (res:Response) =>{
      this.teacher=res.json();


    }
)
}

fetchclass=function()
{
var url=this.arrBirds.IP +":"+this.arrBirds.port+"/getclass"
console.log(url)
  this.http.get(url).subscribe (

    (res:Response) =>{
      this.class=res.json();


    }
)
}

fetchsection=function(pro)
{
  var hash={};
  hash['one']='onellll';
  console.log(hash['one'])
var url=this.arrBirds.IP +":"+this.arrBirds.port+"/getclass"

  this.http.get(url).subscribe (

    (res:Response) =>{
      this.class=res.json();
       // var classes=this.class[0].classname;
       var data = this.class;

       for(var i in data)
       {
            var id = data[i].classes.classid;
          hash[data[i].classes.classname]=data[i].classes.sections
       }

this.section=hash[pro]



    }
  )
}


fetchsubjects=function(pro)
{
  var hash={};

var url=this.arrBirds.IP +":"+this.arrBirds.port+"/getclass"


  this.http.get(url).subscribe (
    (res:Response) =>{
      this.class=res.json();
       // var classes=this.class[0].classname;
       var data = this.class;

       for(var i in data)
       {
            var id = data[i].classes.classid;
          hash[data[i].classes.sections[i]]=data[i].classes.subjects
       }


this.subjects=hash[pro]



this.subjects=hash[pro]

    }
  )
}
  ngOnInit() {

this.httpService.get('../assets/config/IPconfig.json').subscribe(
       data => {
         this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.

          console.log(this.arrBirds.IP +":"+this.arrBirds.port+"vsjdncv")
          this.fetchDate();
             this.fetchclass();
       },
       (err: HttpErrorResponse) => {
         console.log (err.message);
       }
     );


  }

}
