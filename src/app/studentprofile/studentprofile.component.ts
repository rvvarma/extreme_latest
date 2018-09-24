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
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {
  d:any
   stu=[]
   filetype1:any
  constructor(private http: Http,private private router: Router,private httpService: HttpClient,private _cookieService:CookieService) { }

  getCookie(key:string){
      return this._cookieService.get(key);
    }

  onSubmit=function(data)
    {
      alert(JSON.stringify(data))
      console.log("hi")

      console.log(data)
      console.log(data.fname+"fNAME")
      var tt={
        "photo":this.s1
        "admissionnumber":data.admissionnumber,
        "stid":data.stid,
        "firstname":data.firstname,
        "lastname":data.lastname,
        "mothername":data.mothername,
        "fathername": data.fathername,
        "guardian":data.guardian,
        "phonenumber":data.phonenumber,
        "mailid":data.emailid,
        "bloogroup":data.bloogroup,
        "address":data.address,
        "School_Id":data.schoolid,
        "phototype":this.filetype1,
"dob":this.filetype1

      }
      console.log(JSON.stringify(tt))
var url=this.arrBirds.IP +":"+this.arrBirds.port+"/update1/"+data.stid
console.log(url)
    // var url="http://localhost:3000/update1/"+data.stid
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



  ngOnInit()
   {



     this.httpService.get('../assets/config/IPconfig.json').subscribe(
            data => {
              this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
              this.id = this.getCookie("Id");

               var url=this.arrBirds.IP +":"+this.arrBirds.port+"/studentdetails/"+this.id
               console.log(url)

           console.log(this.id);
           this.S=[];




           console.log("cookie "+this.getCookie("Id"));

     this.http.get(url).subscribe((res: Response)
   =>{

       this.d=res.json();
       var data=this.d
       console.log(JSON.stringify(this.d))


       for(var i in data)
       {

     var a11=    {
          photo:data[i].photo,
         admissionnumber:data[i].admissionnumber,
         stid:data[i].stid,
         firstname:data[i].firstname,
         lastname:data[i].lastname,
         mothername:data[i].mothername,
         fathername:data[i].fathername,
         guardian:data[i].guardian,
         phonenumber:data[i].phonenumber,
         emailid:data[i].mailid,
         bloogroup:data[i].bloogroup,
         address:data[i].address,
         School_Id:data[i].School_Id


       }
   this.stu.push(a11)
   }
     })

  }

}
