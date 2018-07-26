import { RouterModule,Router , ActivatedRoute, Params} from '@angular/router';
import { RequestOptions,Request,RequestMethod,Http,Response,Headers, } from '@angular/http';
import { HttpClient } from '@angular/common/http';


import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

user=[];
  constructor(private route: ActivatedRoute,private router: Router,private http: Http,private httpService: HttpClient){}
//posting password
  onSubmit=function(pwd)
{//
console.log(pwd)
    if(pwd.New_Password==pwd.Confirm_Password){
    var dat=JSON.stringify(pwd)
    console.log(dat)
    var a={"School_Id":this.user.School_Id, "Id":this.user.stid,"Password":pwd.Confirm_Password, "type":"Parent",
       "Parent_type":this.user.type, "mailid":this.user.mailid}

console.log(a)
var id =this.route.snapshot.params.id;
console.log(id)
  var url=this.arrBirds.IP+":"+this.arrBirds.port+"/users4/savepassword/"+id
  console.log(url)
  this.http.post(url,a).toPromise()
      .then(res => console.log(pwd,<any[]> res.json()))
      .then(data => { return data; });
      alert("success")
      this.router.navigate(['/login']);

  }
  else{
    alert("Passwords did not match")
  }
}

  ngOnInit(){

    //get student details
  var id: string =this.route.snapshot.params.id;
console.log(id)
this.httpService.get('../assets/config/IPconfig.json').subscribe(
    data => {
      this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.


      this.http.get(this.arrBirds.IP+":"+this.arrBirds.port+"/users4/getdata/"+id).subscribe (
        (res:Response) =>{
          this.user=res.json();
          console.log(this.user)

        }  )
       console.log(this.arrBirds.IP +this.arrBirds.port+"vsjdncv")
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
  );

}

  }
