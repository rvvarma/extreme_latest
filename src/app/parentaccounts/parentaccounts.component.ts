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
  selector: 'app-parentaccounts',
  templateUrl: './parentaccounts.component.html',
  styleUrls: ['./parentaccounts.component.css']
})
export class ParentaccountsComponent implements OnInit {

  account:any;
  amount:any
  tfee:any
   acc=[];
   a1=[]
   a2=[]
   c:any
   msg:any
    constructor(private http: Http,private httpService: HttpClient) { }

    ngOnInit()
    {
      this.httpService.get('../assets/config/IPconfig.json').subscribe(
         data => {
           this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.

            var url=this.arrBirds.IP +":"+this.arrBirds.port+"/getclassdetails/1"
            console.log(url)
            this.http.get(url).subscribe((res: Response)
    =>{


     var a=res.json();
     console.log(a)
     this.tfee=a.classes.fee;
     console.log(this.tfee)

  })

      var url=this.arrBirds.IP +":"+this.arrBirds.port+"/users6/transactiondetails/EX1"
      console.log(url)
     this.http.get(url).subscribe((res: Response)

  =>{

    this.account= res.json();
    var data=this.account;
    console.log(data)



    var totfee=this.tfee;
    for(var i in data)
    {
  this.amount=data[i].Fee_Paid;
    var bal=this.tfee-this.amount;
  var  msg={

      term:data[i].Term,
      date:data[i].date,
      feepaid:data[i].Fee_Paid,
      totalfee:totfee,
      balance:bal


    }


  this.acc.push(msg)
  console.log(this.amount)

  }
  });



}

}
