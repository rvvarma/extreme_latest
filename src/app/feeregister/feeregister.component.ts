
import { HttpClient } from '@angular/common/http';

import { Http } from '@angular/http';
import { RouterModule, ActivatedRoute, Params} from '@angular/router';




import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';


@Component({
  selector: 'app-feeregister',
  templateUrl: './feeregister.component.html',
  styleUrls: ['./feeregister.component.css']
})
export class FeeregisterComponent implements OnInit {
  form: FormGroup;

      constructor(private formBuilder: FormBuilder,private activatedRoute: ActivatedRoute,private http: Http,private httpService: HttpClient) {
        }
        onClickSubmit(data) {
          }

    //post registration details
          onSubmit=function(account)
          {

              console.log(this.form)

            var dat=JSON.stringify(account)
            //alert(dat)
            alert("created")
            console.log(dat)

          var url=this.arrBirds.IP+":"+this.arrBirds.port+"/feepayment/post"
          this.http.post(url,account).toPromise()
              .then(res => console.log(account,<any[]> res.json()))
              .then(data => { return data; });

         }




    handleFileSelect(evt){
      console.log("e"+evt)
        var files = evt.target.files;
        var file = files[0];
        console.log(file)
        this.filetype=file.type;

console.log(this.filetype)
      if (files && file) {
          var reader = new FileReader();

          reader.onload =this._handleReaderLoaded.bind(this);

          reader.readAsBinaryString(file);
      }
    }

    _handleReaderLoaded(readerEvt) {
       var binaryString = readerEvt.target.result;
              this.base64textString= btoa(binaryString);
              this.s=this.base64textString




}



  ngOnInit() {
    this.form = this.formBuilder.group({
      Student_Id: [null, Validators.required],
      classs: [null, Validators.required],
        studentname: [null, Validators.required],
        fathername: [null, Validators.required],
          totalfee: [null, Validators.required],
          totalfeepaid: [null, Validators.required],
            pendingfee: [null, Validators.required],
            amount: [null, Validators.required],
            term: [null, Validators.required],
              date: [null, Validators.required],
               Payment_Mode: [null, Validators.required],


    });

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

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.form);
    }
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
