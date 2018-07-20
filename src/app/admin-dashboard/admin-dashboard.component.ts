import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {



  constructor(private http: Http,private httpService: HttpClient)
{




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

 }


