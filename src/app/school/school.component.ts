import { Component, OnInit,NgModule,Pipe,} from '@angular/core';
import { trigger, style, transition, animate, group }
    from '@angular/animations';
import { RequestOptions,Request,RequestMethod,Http,Response,Headers,ResponseType, ResponseContentType } from '@angular/http';
import { ActivatedRoute, Router, } from '@angular/router';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import * as $ from 'jquery';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { HttpClient } from '@angular/common/http';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { identifierName } from '@angular/compiler';


@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  constructor( private http: Http, private router: Router, private route: ActivatedRoute,private httpService: HttpClient) {  }
  onSubmit=function(formdata)
  {
    alert(JSON.stringify(formdata))
  console.log(formdata)
  var counter=0;
  var cls=(<HTMLInputElement>document.getElementById("classid")).value;
  var sec=(<HTMLInputElement>document.getElementById("textbox2")).value;
  var sub=(<HTMLInputElement>document.getElementById("textbox1")).value
  var x=parseInt((<HTMLInputElement>document.getElementById("limitid")).value);

  var  ter=(<HTMLInputElement>document.getElementById("textbox3")).value;
  var fee=(<HTMLInputElement>document.getElementById("feeid")).value;
  var values = $("input[name='subjects']")
 .map(function(){return $(this).val();}).get();
 console.log(values)

 var sections = $("input[name='textboxs']")
 .map(function(){return $(this).val();}).get();
 console.log(sections)
 sections.push(sec)



 var s = $("input[name='textbox']")
 .map(function(){return $(this).val();}).get();
 s.push(sub)
 console.log(s)

 for (var count = 0; count < 5; count++) {
  $("<input type='text' /><br>").appendTo("#textbox");
 }




 console.log(cls)
console.log(sec)
console.log(sub)
console.log(x)

console.log(ter)
console.log(fee)
if (isNaN(x) || x < 1 || x > 100) {
  alert("Student limit upto 100 only");
}
var m={
  "classname":cls,
  "sections":sections,
  "subjects":s,
  "terms":[ter],
  "studentlimit":x,

  "fee":fee


}

console.log(m)
 /* var a=(JSON.stringify(f1))
  var b=[];
  var ass={
    "subject":sub,
    "description":des,
    "title":title
  }
  b.push(ass);
  console.log(b)

  console.log(m)
*/
 var bug=formdata.classes
 console.log(bug)

   //const url=this.httpService.get('../assets/config/IPconfig.json';
    //console.log(url)
    var url=this.arrBirds.IP +":"+this.arrBirds.port+"/classesconfig"
    console.log(url)
    this.http.post(url,{"classes":m}).toPromise()
      .then(res => console.log(m,<any[]> res.json()))


      .then(data => { return data; });



  }
 ngOnInit() {
   //window.location.reload(1);
setInterval(() => this.reloadPage(), 150000);
//
   this.httpService.get('../assets/config/IPconfig.json').subscribe(
       data => {
         this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.

          var url=this.arrBirds.IP +":"this.arrBirds.port+"/classesconfig"
          console.log(url)
       },
       (err: HttpErrorResponse) => {
         console.log (err.message);
       }
     );

  }

}
