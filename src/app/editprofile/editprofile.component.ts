import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response,Headers} from '@angular/http';
import { CommonModule} from '@angular/common';
import { RouterModule, ActivatedRoute, Params} from '@angular/router';
import { RouterModule, router, Params} from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
import {Router} from '@angular/router';
import Base64 from 'js-base64';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor(private http: Http,private private router: Router,private httpService: HttpClient,private _cookieService:CookieService) { }


  getCookie(key:string){
      return this._cookieService.get(key);
    }

id:any
  fname:any;
  lname:any;
  experience:any;
  address:any;
  pnumber:any;
  age:any;
  mailid:any;
  s1:any;
  filetype1:any;
  sub=[]
  sub1=[]
  myFiles=[]
  d:any
    title = 'app';

   value = 'example';
     onSubmit(data)
     {
       alert(JSON.stringify(data))


    console.log("hi")

    console.log(data)
    console.log(data.fname+"fNAME")
    var tt={

   "Teacher_Id": data.id,
   "First_Name": data.fname,
   "Last_Name": data.lname,
   "Age":data.age,
   "Experience": data.experience,
   "Address": data.address,
   "Phone_Number": data.phonenumber,
   "Email_id": data.emailid,
   "image":this.s1,
   "imagetype":this.filetype1

    }
    console.log(JSON.stringify(tt))


  var url=this.arrBirds.IP +":"+this.arrBirds.port+"/users5/update3"+"/"+data.id

    this.http.put(url,tt).subscribe((res: Response)
   =>{
    this.d=res.json();
    var data=this.d
    console.log(data)
  })

}


     handleFileSelect(evt){
       console.log("e"+evt)
         var files = evt.target.files;
         var file = files[0];
         console.log(file)
         this.filetype1=file.type;

  console.log(this.filetype1)
       if (files && file) {
           var reader = new FileReader();

           reader.onload =this._handleReaderLoaded.bind(this);

           reader.readAsBinaryString(file);
       }
     }

     _handleReaderLoaded(readerEvt) {
        var binaryString = readerEvt.target.result;
               this.base64textString= btoa(binaryString);
               this.s1=this.base64textString





  }





     onChange=function(event, ctrl)
      {
       console.log(event);
       console.log(ctrl);
       var t=this.value
       this.fname=t

       console.log(this.fname);



     }
     onChange1=function(event, ctrl)
      {
       console.log(event);
       console.log(ctrl);
       console.log(this.value);
       this.lname=this.value;
       console.log(this.lname+"lname")



     }

     onChange11=function(event, ctrl)
      {
       console.log(event);
       console.log(ctrl);
       console.log(this.value);
       this.tid=this.value;
       kk=this.tid
       console.log(kk+"kk")
       console.log(this.tid+"tid")



     }
     onChange2=function(event, ctrl)
      {
       console.log(event);
       console.log(ctrl);
       console.log(this.value);
       this.experience=this.value;
       console.log(this.experience+"experience")



     }
     onChange3=function(event, ctrl)
      {
       console.log(event);
       console.log(ctrl);
       console.log(this.value);
       this.address=this.value;
       console.log(this.address+"address")



     }
     onChange4=function(event, ctrl)
      {
       console.log(event);
       console.log(ctrl);
       console.log(this.value);
       this.phonenumber=this.value;
       console.log(this.phonenumber+"phonenumber")



     }
     onChange5=function(event, ctrl)
      {
       console.log(event);
       console.log(ctrl);
       console.log(this.value);
       this.age=this.value;
       console.log(this.age+"age")



     }


     onChange6=function(event, ctrl)
      {
       console.log(event);
       console.log(ctrl);
       console.log(this.value);
       this.mailid=this.value;
       console.log(this.mailid+"mailid")



     }



  ngOnInit()
  {



    this.httpService.get('../assets/config/IPconfig.json').subscribe(
           data => {
             this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
             this.id = this.getCookie("Id");

              var url=this.arrBirds.IP +":"+this.arrBirds.port+"/users5/fetch"
              console.log(url)

          console.log(this.id);
          this.S=[];




          console.log("cookie "+this.getCookie("Id"));

    this.http.get(url).subscribe((res: Response)
  =>{
   this.d=res.json();
   var data=this.d
   console.log(this.d)
   for(var i in data)
   {

 var a11=    {
     firstname:data[i].First_Name,
     lastname:data[i].Last_Name,
     id:data[i].Teacher_Id,
     experience:data[i].Experience,
     address:data[i].Address,
     phonenumber:data[i].Phone_Number,
     age:data[i].Age,
     emailid:data[i].Email_id,
     image:data[i].image

   }
  this.sub.push(a11)

   console.log(data[i].image+"d")

 }

 console.log(this.sub)
 })
})
 }

  }
