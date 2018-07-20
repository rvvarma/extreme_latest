import { Component, OnInit ,NgModule,
  Pipe
  } from '@angular/core';
import { RequestOptions,Request,RequestMethod,Http,Response,Headers, } from '@angular/http';
import { ActivatedRoute, Router, } from '@angular/router';
//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/toPromise';
import { NgxSpinnerService } from 'ngx-spinner';

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
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private http: Http, private router: Router, private route: ActivatedRoute,private httpService: HttpClient) { }
  class=[];
  section=[];
  subjects=[];
  teacherid=[];
  teacher=[];

  fetchclass=function()
  {
    var url=this.arrBirds.IP +":"+this.arrBirds.port+"/getclass"
    console.log(url)
    this.http.get(url).subscribe (
      (res:Response) =>{
        this.class=res.json();

         // var classes=this.class[0].classname;

       // console.log("vsjfbvckjs "+this.teacherslist)


      }
  )
  }
  fetchstudentid=function()
  {
    var url=this.arrBirds.IP +":"+this.arrBirds.port+"/users5/fetch"
    console.log(url)
    this.http.get(url).subscribe (
      (res:Response) =>{
        this.teacherid=res.json();

         // var classes=this.class[0].classname;

       // console.log("vsjfbvckjs "+this.teacherslist)


      }
  )
  }
  fetchsection=function(pro)
  {
    var hash={};
    hash['one']='onellll';
    console.log(hash['one'])
    var url=this.arrBirds.IP +":"+this.arrBirds.port+"/getclass"
    console.log(url)
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

          console.log(id+"  "+data[i].classes.subjects+" "+pro)

       }
var f=document.getElementById('class').value;
this.subjects=hash[f]

    }
  )
}


  ngOnInit() {  //  this.fetchDate();
    this.spinner.show();


this.httpService.get('../assets/config/IPconfig.json').subscribe(
       data => {
         this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.

          var url=this.arrBirds.IP +":"+this.arrBirds.port+"/classesconfig"
          console.log(url)
          this.fetchclass();
        this.fetchstudentid();
        this.fetchDate();
      this.fetchclasses();
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 5000);

       },
       (err: HttpErrorResponse) => {
         console.log (err.message);
       }
     );

}




onSubmit=function(Teacher_Info) {
    alert(JSON.stringify(Teacher_Info))


    if(confirm("ARE U SURE FOR ADD?"))
    {var Teacher=JSON.stringify(Teacher_Info)
      alert("SUDHER"+Teacher)
      var tname=Teacher_Info.Teacher_Id;
      console.log(Teacher)
      //const url="http://10.10.5.54:3004/update"+"/"+tname;
      var url=this.arrBirds.IP +":"+this.arrBirds.port+"/users1/add"
    console.log(url)
    //  const url="http://10.10.5.47:3004/add";

//alert(url)

      this.http.post(url,Teacher_Info).toPromise()
      .then(res => console.log(Teacher_Info,<any[]> res.json()))


      .then(data => { return data; });
//alert("successfully ADDED....!")

    }
}//==============================================================================================================
private headers =new Headers({'ContentType':'application/json'})

   fetchDate=function()
   {
     var url=this.arrBirds.IP +":"+this.arrBirds.port+"/users1/fetch"
         console.log(url)
     this.http.get(url).subscribe (
       (res:Response) =>{
         this.teacher=res.json();
           // var teacherslist=this.teacher[0].First_Name;
         console.log(this.teacher)


         console.log(this.Teacher_Name)


       }
  )
   }
fetchclasses=function()
{var url=this.arrBirds.IP +":"+this.arrBirds.port+"/getclass"
  //  congetclass
  this.http.get(url).subscribe (
    (res:Response) =>{
      this.class=res.json();

       // var classes=this.class[0].classname;

     // console.log("vsjfbvckjs "+this.teacherslist)


    }
)
}

}
