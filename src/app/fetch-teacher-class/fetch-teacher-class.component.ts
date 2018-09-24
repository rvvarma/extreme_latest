import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response,Headers} from '@angular/http';
import { CommonModule} from '@angular/common';
import { RouterModule, ActivatedRoute, Params} from '@angular/router';
import { RouterModule, router, Params} from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-fetch-teacher-class',
  templateUrl: './fetch-teacher-class.component.html',
  styleUrls: ['./fetch-teacher-class.component.css']
})
export class FetchTeacherClassComponent implements OnInit
{
a:any;
  S=[];
  id:any;
    Class=[];
    stu=[];
     hash={};


  constructor(private activatedRoute: ActivatedRoute,private httpService: HttpClient,private http: Http,private _cookieService:CookieService,private router: Router) {
  }


getCookie(key:string){
    return this._cookieService.get(key);
  }
      fetchClass=function(cls,data,data1){

        this.hash={}
        console.log(cls)
        console.log(data)
          var res1 = cls.charAt(0);
          console.log(res1);
          var res2 = cls.charAt(1)
            console.log(res2);
            var url=this.arrBirds.IP +":"+this.arrBirds.port+"/filter/"+res1+"/"+res2
    console.log(url)

            this.http.get(url).subscribe(
              (res:Response)=>{
              this.stu=res.json();
              for(var i in this.stu){
this.hash[this.stu[i].stid]="Present"
       console.log(this.stu[i].stid)
}
              console.log(res.json());


            } )
          }

  ngOnInit()
{
  this.httpService.get('../assets/config/IPconfig.json').subscribe(
         data => {
           this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
           this.id = this.getCookie("Id");

            var url=this.arrBirds.IP +":"+this.arrBirds.port+"/users1/class/"+this.id
            console.log(url)

        console.log(this.id);
        this.S=[];




        console.log("cookie "+this.getCookie("Id"));

    this.http.get(url).subscribe(
      (res:Response) =>{
      this.Class= res.json();
      //console.log(res.json());
  //console.log(this.Class)
    //  console.log(res.json())
     var data=[];
     var m=this.Class;
       for (var i in m)
         {
            //console.log(m[i].Class);
            //console.log(m[i].Section);
            data.push(m[i].Class+""+m[i].Section)
         }
         this.Class=data;

     }
   )
  }


         },
         percentage()
         {
         /*  var tt=this.hash;
         var val;

           Object.keys(tt).forEach(function(key) {
             val = tt[key];
             console.log(val)
         });*/


         var ids=this.id
         console.log("id"+ids)
         console.log("per:dfdfdsgdsgdfga"+this.hash)
         var k=document.getElementById("class").value;
         this.cccc=k.charAt(0)
         console.log(this.cccc)
         this.cccc1=k.charAt(1)
         console.log(this.hash)

         console.log("kjvkhvkv "+this.count)
         this._cookieService.put("tid",ids);
           this._cookieService.put("present",this.count);
           this._cookieService.put("absent",this.count1);
           this._cookieService.put("cls",k);
           this._cookieService.put("class",this.cccc);
           this._cookieService.put("section",this.cccc1);
            this._cookieService.put("attendance",JSON.stringify(this.hash));
         console.log("att"+this.hash)

           console.log("cls"+k)
           console.log("clasa"+this.cccc);
           console.log("section"+this.cccc1)

           /*this._cookieService.put("section",this.cccc1);*/
           alert ("are you sure to dispaly the pie chart!");

           this.router.navigate(['/teacherdashboard/percentage']);



         }



         onSub(data,data1)
         {
         console.log(data1+"data1")
           if(data.target.checked){

         this.hash[data1]="Present";
         console.log(this.hash[data1])
         this.count++;
         console.log(this.count)
             }

              else{

             this.hash[data1]="Absent";
             this.count1++;



         }

       );



}

getCookie(key:string){
    return this._cookieService.get(key);
  }
}
