



import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import {Router} from '@angular/router';

import { HttpClient } from '@angular/common/http';







@Component({
  selector: 'app-eventsui',
  templateUrl: './eventsui.component.html',
  styleUrls: ['./eventsui.component.css']
})
export class EventsuiComponent implements OnInit {
class=[];
cln:any;
id:any;

teacher=[];

  tea=[];



    student=[];
    stu=[];
    sdf=[];
    sln:any
    sub:any;
    sec:any;
    section=[];
    subject=[];
    a11=[]
      hash={};
     a:any;
     s:any;
     filetype:any;
     c:any;
     s1:any;
     c11:any;
     sub1:any
     i:any

    constructor(private http: Http,private _cookieService:CookieService, private router: Router,) {
      }


  getCookie(key:string){
      return this._cookieService.get(key);
    }





      fetchclasses=function()
        {
this.student=[]
var url=this.arrBirds.IP+":"+this.arrBirds.port+"/Event"
        console.log(url)
this.http.get(url).subscribe (
  (res:Response) =>{
    var d=res.json();
    console.log(JSON.stringify(d)+"data")
    for(var i1 in d)
    {
      this.cln=d[i1].Class
      console.log(this.cln+"class")

      this.sdf.push(this.cln)
	}
console.log(this.student)

    var uniqueItems = Array.from(new Set(this.sdf))
   console.log("checking "+uniqueItems)

  this.student=uniqueItems;
    })




)
}

  fetchsection=function(pro)
      {
this.section=[]
var hash={}
var url=this.arrBirds.IP+":"+this.arrBirds.port+"/Event"
        console.log(url)
this.http.get(url).subscribe (
  (res:Response) =>{
    var d=res.json();
  //  console.log(JSON.stringify(d)+"data")
    for(var i in d)
    {

    this.s=d[i].Class;
    console.log(this.s+"class")
    hash[this.s]=d[i].Section;
    this.sln=hash[this.s]

    }
    this.section.push(this.sln)
})


      }







        onSubmit=function(account)
        {

          var dat=JSON.stringify(account)
          //alert(dat)
          alert(JSON.stringify(account))
          //console.log(dat)





          var counter=0;
          var cla=(<HTMLInputElement>document.getElementById("class")).value;
          var sec=(<HTMLInputElement>document.getElementById("section")).value;
          var dest=(<HTMLInputElement>document.getElementById("description")).value;
          var date=(<HTMLInputElement>document.getElementById("date")).value;
          var Type=(<HTMLInputElement>document.getElementById("PType")).value;
          this._cookieService.put("cTYPE",Type);



var ss={

  "Name":"venkat",
   "Type":"Class",
   "From_Date":date,
   "To_Date":date,
   "Category":Type,
   "Class":cla,
   "Section":sec,
     "Description":dest,
 	"SchoolId":"6666"

}





console.log(JSON.stringify(ss))
this.http.post('http://localhost:3000/calenders',ss).subscribe

  (res:Response) =>{

var d=res.json();
console.log(d)
router.navigate(["/events"])
})





  }




  ngOnInit(){



    this.httpService.get('../assets/config/IPconfig.json').subscribe(
           data => {
             this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.

console.log(this.arrBirds)




  //this.fetchclasses()
}
)

}
}
