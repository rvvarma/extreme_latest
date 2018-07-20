import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, ActivatedRoute, Params} from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {



  constructor(private activatedRoute: ActivatedRoute,private http: Http,private _cookieService:CookieService,private httpService: HttpClient) {
    }
    onClickSubmit(data) {
      }

//post registration details
      onSubmit=function(account)
      {
        var dat=JSON.stringify(account)
        //alert(dat)
        alert("created")
        console.log(dat)

      var url=this.arrBirds.IP+":"+this.arrBirds.port+"/users4/post"
      this.http.post(url,account).toPromise()
          .then(res => console.log(account,<any[]> res.json()))
          .then(data => { return data; });
      }

  ngOnInit(){

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

}
