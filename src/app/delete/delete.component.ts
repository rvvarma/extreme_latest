import { Component, OnInit ,NgModule,
  Pipe
  } from '@angular/core';
import { RequestOptions,Request,RequestMethod,Http,Response,Headers, } from '@angular/http';
import { ActivatedRoute, Router, } from '@angular/router';
//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/toPromise';

import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  day=[];
  bankName:any
    constructor(private http: Http, private router: Router, private route: ActivatedRoute,private httpService: HttpClient) { }

    ngOnInit() {
      this.httpService.get('../assets/config/IPconfig.json').subscribe(
             data => {
               this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.


                this.bankName = this.route.snapshot.params['id'];
                var url=this.arrBirds.IP +":"+this.arrBirds.port+"/classesdelete"+"/"+this.bankName
                console.log(url)
                  console.log("dsvsdvsd" +this.bankName)
                 // const url="http://10.10.5.42:5000/classesdelete"+"/"+this.bankName;
                 if (confirm("Are you sure?")) {


   return this.http.delete(url, this.bankName).toPromise()
     .then(() => {

      this.fetchData();
    })
}






    }
  }
