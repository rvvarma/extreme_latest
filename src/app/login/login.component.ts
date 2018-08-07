import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { RouterModule,Router , ActivatedRoute, Params} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _cookieService:CookieService,private router: Router,private httpService: HttpClient,private http: Http) { }
  onClickSubmit(dat) {


    var url=this.arrBirds.IP+":" +this.arrBirds.port+"/users5/login"
    console.log(url)
    this.http.post(url,dat).toPromise()
        .then(res =>{
          var data=res.json()
          console.log(data)
          if(!data)
          alert("invalid credentials")
          else{
          var t=data.Id
          //this._cookieService.put("Id",t)
          this._cookieService.put("Id", t);

          this.Id = this.getCookie("Id");

          console.log(this.Id)
          this.School_Id = this.getCookie("School_Id");
          if(data.type=="Parent")
          {
             this.router.navigate(['/parentdashboard/parentdash']);
          }
          else if(data.type=="Teacher")
          {
            console.log("teacher")

             this.router.navigate(['/teacherdashboard/tdashboard']);
          }
          else if(data.type=="Admin")
          {
            console.log("admin")

             this.router.navigate(['/admindashboard/admindash']);
          }
        }

}
      )


  }


  ngOnInit() {
    this.httpService.get('../assets/config/IPconfig.json').subscribe(
        data => {
          this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.

           console.log(this.arrBirds.IP +this.arrBirds.port+"vsjdncv")
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );

  }
  getCookie(key: string){
      return this._cookieService.get(key);
    }
}
