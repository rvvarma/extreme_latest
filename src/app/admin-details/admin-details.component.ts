import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {
//
  constructor(private http:Http,private httpService: HttpClient) { }

  //post or add new teacher to the school
    onSubmit=function(admindata)
    {
      var dat=JSON.stringify(admindata)
      //alert(dat)
      alert("created")
      console.log(dat)

  var url=this.arrBirds.IP+":"+this.arrBirds.port+"/users3/newadmin"
  this.http.post(url,admindata).toPromise()
        .then(res => console.log(admindata,<any[]> res.json()))
        .then(data => { return data; });
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

}
