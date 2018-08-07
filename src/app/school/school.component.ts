

import { RequestOptions,Request,RequestMethod,Http,Response,Headers,ResponseType, ResponseContentType } from '@angular/http';
import { ActivatedRoute, Router, } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';


@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class  SchoolComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: Http, private router: Router, private route: ActivatedRoute,private httpService: HttpClient) {}

  onSubmit=function(form)
  {

{
      console.log(this.form);
      if (this.form.valid) {
        console.log('form submitted');
        alert("Added Succesfully")
        this.router.navigate(['/admindashboard/admin']);

      } else {
        this.validateAllFormFields(this.form);
      }
    }


    //alert(JSON.stringify(form))
  console.log(form)
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

 var url=this.arrBirds.IP +":"+this.arrBirds.port+"/classesconfig"
    console.log(url)
    this.http.post(url,{"classes":m}).toPromise()
      .then(res => console.log(m,<any[]> res.json()))


      .then(data => { return data; });

      this.router.navigate(['/admindashboard/first']);

  }

//
//

  ngOnInit() {
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
    this.form = this.formBuilder.group({

      sections: [null, Validators.required],
      subjects: [null, Validators.required],
      classname: [null, Validators.required],
     terms: [null, Validators.required],
      fee: [null, Validators.required],
    studentlimit: [null, Validators.required],

      terms:[null, Validators.required],



    });
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }


  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  reset(){
    this.form.reset();
  }
}
