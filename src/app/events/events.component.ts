




import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
student = [];
stu = [];
st = [];
s = [];
s1 = [];
s2 = [];
  constructor(private http: Http,private _cookieService:CookieService, private router: Router) { }
  getCookie(key:string){
      return this._cookieService.get(key);
    }

  //var Type=(<HTMLInputElement>document.getElementById("PType")).value;
    fetchData = function ()
     {

      //this.http.get("http://13.232.165.2:3000/users7/holiday/6666/2/B/Class").subscribe((res: Response)
      => {

          this.stu = res.json();
         console.log(this.stu)

  }
      )




       this.http.get("http://localhost:3000/Event").subscribe((res: Response)
       => {

           this.student = res.json();
          console.log(student)

   }
       )


              this.http.get("http://13.232.165.2:3000/users7/Exams/6666/2/B/Class").subscribe((res: Response)
              => {

                  this.st = res.json();
                 console.log(st)

          }
              )



                            this.http.get("http://13.232.165.2:3000/users7/Exams/6666/5/B/Class").subscribe((res: Response)
                            => {

                                this.s = res.json();
                               console.log(s)

                        }
                            )


                                                        this.http.get("http://13.232.165.2:3000/users7/Exams/6666/5/B/Class").subscribe((res: Response)
                                                        => {

                                                            this.s = res.json();
                                                           console.log(s)

                                                    }
                                                        )


                                                         var url=this.arrBirds.IP+":"+this.arrBirds.port+"/users7/Events/6666/2/B/Class"
                                                         console.log(url)
                                                         this.http.get("http://13.232.165.2:3000/users7/Events/6666/2/B/Class").subscribe((res: Response)
                                                          => {

                                                          this.s1 = res.json();
                                                       console.log(s1)

                                                  }
                                                    )
                                                    var url=this.arrBirds.IP+":"+this.arrBirds.port+"/users7/Events/6666/5/Class"
                                                          console.log(url)
                                                        this.http.get("http://13.232.165.2:3000/users7/Events/6666/5/B/Class").subscribe((res: Response)
                                                        => {

                                                            this.s2 = res.json();
                                                           console.log(s2)

                                                    }
                                                        )









    }


  ngOnInit() {
    var c=this.getCookie("cTYPE");
    console.log(c)
//this.fetchData();
var url=this.arrBirds.IP+":"+this.arrBirds.port+"/c"
console.log(url)
this.http.get(url).subscribe((res: Response)
 => {
    this.student = res.json();
   console.log(this.student)
         /*(err: HttpErrorResponse) => {
           console.log (err.message);
         }*/
       );
  }

}
