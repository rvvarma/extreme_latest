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
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';

import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  day=[]
bankName:any
constructor(private http: Http, private router: Router, private route: ActivatedRoute,private httpService: HttpClient) { }
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
 terms=[];
 su=[];
 s:any
 l:any
 c:any
 d:any
 newAttribute:any
 newAttributes:any
 dh=[];

onSubmit=function(Teacher_Name) {
  alert(JSON.stringify(Teacher_Name))
   var classname = this.route.snapshot.params['id'];


    var secti = $("input[name='sections']")
    .map(function(){return $(this).val();}).get();
    console.log(secti)
    this.su.push(secti)
    console.log(this.su)
    var subj = $("input[name='subjects']")
    .map(function(){return $(this).val();}).get();
    console.log(subj)
    this.dh.push(subj)
   var aws={
    "terms":[Teacher_Name.TERMS],
    "fee":Teacher_Name.fee,
    "studentlimit":Teacher_Name.studentlimit,
    "sections":this.su,
    "subjects":this.dh,
    "classname":classname

   }



   console.log(aws)
  if(confirm("ARE U SURE FOR UPDATE?"))
  {var url=this.arrBirds.IP +":"+this.arrBirds.port+"/updateclassdetails+"/"+classname"
    console.log(url)

    //const url="http://10.10.5.42:5000/updateclassdetails"+"/"+classname;
    //const url="http://10.10.5.54:3004/post";



    return this.http.put(url,{classes:aws}).toPromise()
    .then(res => console.log(aws,<any[]> res.json()))


    .then(data => { return data; });
   // alert("successfully updated....!")

  }
}
deleteFieldValue(index) {
this.section.splice(index,1);
}
addFieldValue() {
this.section.push(this.newAttribute)


this.newAttribute = {};


}
deleteFieldValues(index) {
this.subjects.splice(index,1);
}
addFieldValues() {
this.subjects.push(this.newAttributes)
this.newAttributes = {};
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
          var id = data[i].classes.classname;
        hash[data[i].classes.classname]=data[i].classes.sections
     }

var sec=this.section=hash[pro]

  }
)
}

ngOnInit() {
  var pro;

  this.httpService.get('../assets/config/IPconfig.json').subscribe(
         data => {
           this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.



            this. bankName = this.route.snapshot.params['id'];

          console.log("dsvsdvsd" +this.bankName)
          var url=this.arrBirds.IP +":"+this.arrBirds.port+"/getclassdetails"+"/"+this.bankName
          console.log(url)

        //  var  url="http://10.10.5.42:5000/getclassdetails"+"/"+this.bankName;

          //var u="http://10.10.5.4:5000/getclass"

          this.http.get(url).subscribe (
          (res:Response) =>{
            this.day=res.json();
            //console.log(this.day)
          /*var hash1={};
          var hash={};*/
          var hash3={}
          /*hash["sections"]=this.day.classes.sections
          hash1["subjects"]=this.day.classes.subjects~*/
          hash3["terms"]=this.day.classes.terms
          this.terms.push(hash3["terms"])

          console.log(this.section.sections)
          console.log(this.section)
          //var ln=hash["sections[]".length]
          //console.log(ln)



          console.log(this.section.values())
          //console.log(hash)
          for(var i=0; i < this.section.length; i++) {
          console.log(this.section[i]);
          }
          console.log(this.section)
          console.log(this.day.classes.sections)

          console.log(this.day.classes.sections)


              this.section=this.day.classes.sections
            this.subjects=this.day.classes.subjects;
            console.log(this.subjects)

          console.log(this.section)
          //this.subjects.push(hash1["subjects"])
          var f=this.day.classes.fee;
          var t=this.day.classes.terms
          var sl=this.day.classes.studentlimit
          console.log(f,t,sl)
          //var ln=hash["sections"].length
          //var lns=hash1["subjects"].length
          console.log()
          console.log(hash3["terms"])

          //console.log(hash1["subjects"])
          //this.subjects.push(hash1["subjects"])

           this.c=this.day.classes.sections[0]
           this.d=this.day.classes.subjects[0]
           this.sub=this.day.classes.terms[0]
           this.s=this.day.classes.fee
           this.l=this.day.classes.studentlimit
          console.log(this.sub,this.d,this.c,this.s,this.l)

          var counter;
          var msg = '';
                    for(var i=1; i<counter; i++){
                         msg += "\n Textbox #" + i + " : " + $('#s' + i).val();
                    }
                          console.log(msg);


              }
            )

         },
         (err: HttpErrorResponse) => {
           console.log (err.message);
         }
       );

}
}
