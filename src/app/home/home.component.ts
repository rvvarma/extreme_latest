import { Component, OnInit ,NgModule,
  Pipe
  } from '@angular/core';
import { RequestOptions,Request,RequestMethod,Http,Response,Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, } from '@angular/router';


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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  teacher=[];
  section=[];
  ip:any;
  port:any;
  arrBirds:any;
  constructor(private http: Http, private httpService: HttpClient,private router: Router, private route: ActivatedRoute) { }
  fetchsection=function(pro)
  {
    var hash={};
    hash['one']='onellll';
    console.log(hash['one'])

    this.http.get(this.arrBirds.IP+":"+this.arrBirds.port+"/getClass").subscribe (
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

        }
    )
  }

  ngOnInit() {
    var pro;
    var p;


   this.httpService.get('../assets/config/IPconfig.json').subscribe(
       data => {
         this.arrBirds = data ;	 // FILL THE ARRAY WITH DATA.
this.ip=this.arrBirds.IP;




  var hash={};
  hash['one']='onellll';
  console.log(hash['one'])
  this.http.get(this.arrBirds.IP+":"+this.arrBirds.port+"/getClass").subscribe (
    (res:Response) =>{
      this.teacher=res.json();
       // var classes=this.class[0].classname;
       var data = this.teacher;

       for(var i in data)
       {
            var id = data[i].classes.classname;
          hash[data[i].classes.classname]=data[i].classes.sections
       }

this.section=hash[pro]
      console.log(hash)
    }
  )






       },
       (err: HttpErrorResponse) => {
         console.log (err.message);
       }
     );




         console.log(this.ip +"vsjdncv")

/*
    this.http.get("http://10.10.5.42:5000/getclass").subscribe (
       (res:Response) =>{
         this.teacher=res.json();
           // var teacherslist=this.teacher[0].First_Name;
         console.log(this.teacher)




       }
  )*/


  }

}
