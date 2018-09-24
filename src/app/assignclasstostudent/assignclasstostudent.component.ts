


import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, ActivatedRoute, Params} from '@angular/router';
import { Injectable } from '@angular/core';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-assignclasstostudent',
  templateUrl: './assignclasstostudent.component.html',
  styleUrls: ['./assignclasstostudent.component.css']
})
export class AssignclasstostudentComponent implements OnInit {


constructor(private activatedRoute: ActivatedRoute,private httpService: HttpClient,private http: Http){ }



student = [];
stu = [];
section=[];
class=[];



  fetchData = function ()
   {
     var url=this.arrBirds.IP +":"+this.arrBirds.port+"/studentdetails"
     console.log(url)
    this.http.get(url).subscribe((res: Response)

    => {

        this.student = res.json();
console.log("sdfcdsa "+this.student)
}
    )
  }




addProduct = function(student,name,phonenumber,mailid) {

alert(student,name,phonenumber,mailid)

console.log("ioif"+ student)




var x = document.getElementById("class").value;

var y = document.getElementById("section").value;




console.log("vsvdsv"+ x)

console.log("yy" + y)

console.log("uu" + k)



var k={
 stid:student,




        class: x,
        section:y,
        year:2019,
        mailid:mailid,
        phonenumber:phonenumber,
        name:name




}



//var k={"stid":"EX148","name":"v","admissionnumber":"gg","lastname":"gg","mothername":"gg","fathername":"gg","phonenumber":"gg","mailid":"gg","class":"1A","bloogroup":"gg","address":"gg" }

   {

      const url = `${this.arrBirds.IP+":"+this.arrBirds.port+"/studenttoclasspost"}`;

      this.http.post(url,k).subscribe((res:Response) => {

        this.isAdded = true;

//this.student.push(k);




console.log(res);
console.log(this.student)

          })
        }}


  deleteProduct = function (stid) {
  console.log(stid)

   if (confirm("Are you sure?")) {
   console.log(stid)

      var  url = this.arrBirds.IP+":"+this.arrBirds.port+"/delete"+"/"+stid;

      return this.http.delete(url).toPromise()
        .then(() => {


       })
   }

 }






  fetchclass=function()
  {
    this.http.get(this.arrBirds.IP+":"+this.arrBirds.port+"/getclass").subscribe (
      (res:Response) =>{
        this.class=res.json();


      }
    )
  }

    fetchsection=function(pro) {
      this.fetchData();

      var hash = {};
      hash['one'] = 'onel';
      console.log(hash['one'])
      this.http.get(this.arrBirds.IP+":"+this.arrBirds.port+"/getClass").subscribe((res: Response)
          => {

          this.section = res.json();
          var data = this.section;

          for (var i in data) {
            var id = data[i].classes.classid;
            hash[data[i].classes.classname] = data[i].classes.sections


          }

          this.section = hash[pro]
          console.log(this.student)

        }
      )
    }









  ngOnInit() {





       this.httpService.get('../assets/config/IPconfig.json').subscribe(
      data => {
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(this.arrBirds);



this.fetchData();
this.fetchclass();
//this.addProduct();

      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );



    }


   //this.http.Service.get(this.arr.birds.IP+":"+this.brids.Port+"/ffetch')






}










}














}
