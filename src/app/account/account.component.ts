import { HttpClient } from '@angular/common/http';

import { Http } from '@angular/http';
import { RouterModule,Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';


import { Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { NG_VALIDATORS,Validator,Validators,AbstractControl,ValidatorFn } from '@angular/forms';
import { User }    from './user';



@Component({
  moduleId: module.id
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new User('','',null,'','','');
  submitted = false;
  onSubmit( { this.submitted = true; })
  newHero() {
   // this.model = new User('','');
  }




  form: FormGroup;
  loginForm: ngForm;

//

    constructor(private formBuilder: FormBuilder,private router: Router,private activatedRoute: ActivatedRoute,private http: Http,private httpService: HttpClient) {
      }
      onClickSubmit(data) {
        }

  //post registration details
    /*    onSubmit=function(account)
        {

            console.log(this.form)
          /*
          var dat=JSON.stringify(account)
          //alert(dat)
          alert("created")
          console.log(dat)

        var url=this.arrBirds.IP+":"+this.arrBirds.port+"/users4/post"
        this.http.post(url,account).toPromise()
            .then(res => console.log(account,<any[]> res.json()))
            .then(data => { return data; });
            */
//        }








  ngOnInit() {
    this.form = this.formBuilder.group({
      parent: [null, Validators.required],
//      std: [null, Validators.required],
      name: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone_number: [null, Validators.required],
      parent_name: [null, Validators.required],
 parentlastname:[null, Validators.required],
address:[null, Validators.required],
dob:[null, Validators.required]

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
  }//

  onSubmit() {

    console.log(this.form.value);
    if (this.form.valid) {
      console.log('form submitted');

      var acc=this.form.value;
              var url=this.arrBirds.IP+":"+this.arrBirds.port+"/users4/post"
              this.http.post(url,acc).toPromise()
                  .then(res => console.log(acc,<any[]> res.json()))
                  .then(data => { return data; });
                  alert("Added Succesfully")
                  this.router.navigate(['/admindashboard']);

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
