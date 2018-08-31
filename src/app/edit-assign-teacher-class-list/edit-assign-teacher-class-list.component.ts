//import 'rxjs/add/operator/toPromise';
//import 'rxjs/Rx';
//import {Observable} from "rxjs/Rx";
import { HttpClient } from '@angular/common/http';


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
  selector: 'app-edit-assign-teacher-class-list',
    templateUrl: './edit-assign-teacher-class-list.component.html',
    styleUrls: ['./edit-assign-teacher-class-list.component.css']






})
export class EditAssignTeacherClassListComponent implements OnInit {

  constructor( private http: Http, private router: Router, private route: ActivatedRoute,private httpService: HttpClient) {
  }
  private headers =new Headers({'ContentType':'application/json'})
  fetch=[];
  cl:any;
  sec:any;
  sub:any
   teacher=[];
   class;
   section=[];
   subjects=[];
   timein=[];
   timeout=[];
   day=[];
   fetchDate=function()
   {

     this.http.get(this.arrBirds.IP +":"+this.arrBirds.port+"/users1/fetch").subscribe (
       (res:Response) =>{
         this.teacher=res.json();
           // var teacherslist=this.teacher[0].First_Name;
         console.log(this.teacher)


         console.log(this.Teacher_Name)


       }
  )
   }
fetchclass=function()
{
var url=this.arrBirds.IP +":"+this.arrBirds.port+"/getclass";
console.log(url)
  this.http.get(url).subscribe (
    (res:Response) =>{
      this.class=res.json();

       // var classes=this.class[0].classname;

     // console.log("vsjfbvckjs "+this.teacherslist)


    }
)
}
fetchsection=function(pro)
{

var url=this.arrBirds.IP +":"+this.arrBirds.port+"/getclass";
console.log(url)
 var hash={};
  hash['one']='onellll';
  console.log(hash['one'])
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

var sec=this.section=hash[pro]

    }
  )
}

fetchsubjects=function(pro)

{

var url=this.arrBirds.IP +":"+this.arrBirds.port+"/getclass";
console.log(url)


  var hash={};
  var acc = document.getElementById("class").value;
console.log("saa  "+acc)
  this.http.get(url).subscribe (
    (res:Response) =>{
      this.class=res.json();
       // var classes=this.class[0].classname;
       var data = this.class;

       for(var i in data)
       {
            var id = data[i].classes.classname;
          hash[id]=data[i].classes.subjects
       }

this.subjects=hash[acc]

    }
 )
}


/*fetchtimein=function()
{
  var hash={};
var url=this.arrBirds.IP +":"+this.arrBirds.port+"/users1/fetch";
console.log(url)
  this.http.get(url).subscribe (
    (res:Response) =>{
      this.timein=res.json();
      console.log(this.timein)



    }
)
}
fetchtimeout=function()
{var url=this.arrBirds.IP +":"+this.arrBirds.port+"/users1/fetch";
 console.log(url)
  this.http.get(url).subscribe (
    (res:Response) =>{
      this.timein=res.json();
      console.log(this.timeout)



    }
)
}*/

/*fetchday=function()
{
  this.http.get("http://10.10.5.54:3004/fetch").subscribe (
    (res:Response) =>{
      this.day=res.json();
      console.log(this.day)



    }
)
}*/
bankName:any;

  ngOnInit() {
this.httpService.get('../assets/config/IPconfig.json').subscribe(
       data => {
         this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.

          console.log(this.arrBirds.IP +":"+this.arrBirds.port+"vsjdncv")
          this.fetchDate();
         this.fetchclass();
this. bankName = this.route.snapshot.params['id'];
var url=this.arrBirds.IP +":"+this.arrBirds.port+"/users1/classes/"+this.bankName;
         this.http.get(url).subscribe (
           (res:Response) =>{
             this.day=res.json();
             console.log(this.day)

            var r=this.day

            this.cl=r[0].Class
            this.sec=r[0].Section
            this.sub=r[0].Subject
            console.log(this.cl)
            console.log(this.sec)
            console.log(this.sub)
            this.fetchsection(r[0].Class)
           // this.fetchsubjects(r[0].Class)

           var hash={};
         var url=this.arrBirds.IP +":"+this.arrBirds.port+"/getClass";
         console.log(url)
            this.http.get(url).subscribe (
             (res:Response) =>{
               this.class=res.json();
                // var classes=this.class[0].classname;
                var data = this.class;

                for(var i in data)
                {
                     var id = data[i].classes.classname;
                   hash[id]=data[i].classes.subjects
                }

         this.subjects=hash[r[0].Class]

             }
           )

           })
       },
       (err: HttpErrorResponse) => {
         console.log (err.message);
       }
     );



console.log("dsvsdvsd" +this.bankName)
 // this.fetchsection();
//this.fetchtimein();
 //this.fetchtimeout();
 //this.fetchday();
//var url=this.arrBirds.IP +":"+this.arrBirds.port+"/users1/c/this.bankName";
//console.log(url)
 //const url="http://10.10.5.54:3004/c"+"/"+this.bankName;




}

  onSubmit=function(Teacher_Name) {
//alert(JSON.stringify(Teacher_Name))
     var bankName = this.route.snapshot.params['id'];
console.log(Teacher_Name)
var final=JSON.stringify(Teacher_Name)
alert(final
)
    if(confirm("ARE U SURE FOR UPDATE?"))
    {

var url=this.arrBirds.IP +":"+this.arrBirds.port+"/users1/updates/"+bankName;
console.log(url)
     // const url="http://10.10.5.54:3004/u"+"/"+bankName;
      //const url="http://10.10.5.54:3004/post";

alert(url)

      return this.http.put(url,Teacher_Name).toPromise()
      .then(res => console.log(<any[]> res.json()))


      .then(data => { return data; });
     // alert("successfully updated....!")

    }
}


}
