import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Params} from '@angular/router';
import { RequestOptions,Request,RequestMethod,Http,Response,Headers, } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-student-details-fee-payment',
  templateUrl: './student-details-fee-payment.component.html',
  styleUrls: ['./student-details-fee-payment.component.css']
//  template: 'The global role is {{globals.role}}',
})
export class StudentDetailsFeePaymentComponent implements OnInit {
student=[]
stu=[]
details=[]
d=[];
e=[];
det=[]
det2=[]
payment=[]
pp=[]
ppp=[]
P=[]
final:any
s:any;
t:any
total:any

  constructor(private route: ActivatedRoute,private http: Http, private httpClient:HttpClient) { }

  submit=function(s1)
  {
    var total;
    console.log("hi")
   var id = (<HTMLInputElement>document.getElementById("stid")).value;
   //console.log(id)
/*fetch basic student details*/
var url="http://10.10.5.42:5000/findbyid"+"/"+id
this.http.get(url,id).subscribe (
  (res:Response) =>{console.log(url)
this.student= res.json();
console.log(this.stu=this.student[0])
}  )

/*fetch total fee details*/
 var url="http://10.10.5.54:3010/findbystudentid"+"/"+id
  this.http.get(url,id).subscribe (
    (res:Response) =>{console.log(url)
  this.details= res.json();
  console.log(this.e=this.details[0].Total_Fee)
  console.log(this.d=this.details[0])
   total=this.details[0].Total_Fee
console.log(this.e)
}  )

/*Fetch fee paid and pending fee details*/
var url="http://10.10.5.54:3012/transactiondetails"+"/"+id
this.http.get(url,id).subscribe (
  (res:Response) =>{console.log(url)
this.payment= res.json();
  console.log(this.d=this.payment[0])
var data=this.payment;
console.log(data)


     for (var i in data)
       {
          console.log(data[i].Amount)

          this.P.push(data[i].Amount)}
          var sum = this.P.reduce((acc, cur) => acc + cur, 0);
          //console.log(sum)
/*calculating pending fee */

       this.t=total;
       var cal=this.t-sum
       //console.log(cal)
this.pp.push(sum)
//console.log(this.pp)
this.ppp.push(cal)
//console.log(this.ppp)
}
 )
}

/*new fee payment*/
onSubmit=function(data)
{
  var dat=JSON.stringify(data)
alert("saved")
var id = (<HTMLInputElement>document.getElementById("stid")).value;
var Amount = (<HTMLInputElement>document.getElementById("Amount")).value;
var PaymentMode = (<HTMLInputElement>document.getElementById("Payment_Mode")).value;
var Term = (<HTMLInputElement>document.getElementById("Term")).value;
var date = (<HTMLInputElement>document.getElementById("date")).value;

 var a ={Student_Id:id,Amount:Amount,Payment_Mode:PaymentMode,Term:Term,date:date}
 console.log("daata "+JSON.stringify(a))

var url="http://10.10.5.54:3012/transaction"+"/"+id

this.http.post(url,a).toPromise()
    .then(res => console.log(data,<any[]> res.json()))
    .then(data => { return data; });
}

  ngOnInit() {


  }

}
