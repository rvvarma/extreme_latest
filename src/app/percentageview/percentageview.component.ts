import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response,Headers} from '@angular/http';
import { RouterModule, ActivatedRoute, Params} from '@angular/router';
import { RouterModule, router, Params} from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {Router} from '@angular/router';




@Component({
  selector: 'app-percentageview',
  templateUrl: './percentageview.component.html',
  styleUrls: ['./percentageview.component.css'],

})

export class PercentageviewComponent implements OnInit {

  a:any;
    S=[];

    id:any;
      Class=[];
      stu=[];
       hash={};
       count=0;
       count1=0;
       att=[];

class:any;
section:any;


  constructor (private activatedRoute: ActivatedRoute,private httpService: HttpClient,private http: Http,private private _cookieService:CookieService,private router: Router) { }

//on submit function
onSubmit=function(data,data1){


var ttt={
"teacherid":this.id,
"class":this.class;
"section":this.section,
"schoolid": "sc20",
"data":this.att
}
console.log("vcb"+JSON.stringify(ttt));

var url=this.arrBirds.IP +":"+this.arrBirds.port+"/attendancepost"
console.log(url)
this.http.post(url,ttt).subscribe(
(res:Response)=>{
this.ttt=res.json();
console.log(res.json());

this.router.navigate(['/teacherdashboard']);
}
)



    // ADD CHART OPTIONS.
    pieChartOptions = {
        responsive: true
    }
}
pieChartLabels =  ['Present', 'Absent', 'Leaves'];

    // CHART COLOR.
    pieChartColor:any = [
        {
            backgroundColor: [

            'rgba(67,204,127, 0.8)',
            'rgba(255, 0, 0, 0.6)',
            'rgba(255, 102, 0, 0.9)'
            ]
        }
    ]

    pieChartData:any = [
        {
            data: []


        }
    ];



          ngOnInit () {

            this.httpService.get('../assets/config/IPconfig.json').subscribe(
       data => {
         this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.

          var url=this.arrBirds.IP +":"+this.arrBirds.port+"/classesconfig"
          console.log(url)
          console.log("cookie 1"+this.getCookie("id"));
          this.id=this.getCookie("tid");
          var a1=JSON.parse(this.getCookie("attendance"));


          var m1=[];

          Object.keys(a1).forEach(function(key) {


          var val = a1[key];
          console.log("check value "+val);

          //write hhtp post


          var someData ={


            "stid":key,

            "status":val

          };


          m1.push(someData);


          console.log("somw"+JSON.stringify(someData))

          });


            this.att=m1;

          console.log(JSON.stringify(a1))


          console.log("vhg"+this.att)


         for(var i in a1)
       {
          if(a1[i]=="Present")
         {
             this.count++;
            console.log("c:"+this.count)
         }
       else
       {
         this.count1++;
         console.log("bsahb"+this.count1)

       }
     }

          console.log("j:"+this.id)

          this.class=this.getCookie("class");
          this.section=this.getCookie("section");
          console.log(this.class+"kjmo")
          console.log(this.section)
          var f=[{ "data": [this.count,this.count1,0] }]
          this.pieChartData = f as any []




        }




       (err: HttpErrorResponse) => {
         console.log (err.message);
       }
     );
            }

            getCookie(key:string){
                return this._cookieService.get(key);
           }




  }
