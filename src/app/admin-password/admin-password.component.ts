import { RouterModule, Router,ActivatedRoute, Params} from '@angular/router';
import { RequestOptions,Request,RequestMethod,Http,Response,Headers, } from '@angular/http';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-password',
  templateUrl: './admin-password.component.html',
  styleUrls: ['./admin-password.component.css']
})
export class AdminPasswordComponent implements OnInit {
  u=[];
  constructor(private route: ActivatedRoute,private router: Router,private http: Http,private httpService: HttpClient) { }

  //posting password
    onSubmit=function(pwd)
  {
console.log("hii")
      if(pwd.New_Password==pwd.Confirm_Password){
      var dat=JSON.stringify(pwd)
      console.log(dat)
      var a={"School_Id":this.u[0].School_Id,"Id":this.u[0].Employee_Id,"Password":pwd.Confirm_Password,
         "type":"Admin","Email_id":this.u[0].Email_id}

  console.log(a)
  var id: string =this.route.snapshot.params.id;
  console.log(id)
    var url=this.arrBirds.IP+":"+this.arrBirds.port+"/users3/adminpassword/"+id
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

  ngOnInit() {

    //get admin details
  var id: string =this.route.snapshot.params.id;
    console.log(id)



      this.httpService.get('../assets/config/IPconfig.json').subscribe(
          data => {
            this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.

            this.http.get(this.arrBirds.IP+":"+this.arrBirds.port+"/users3/admin/"+id).subscribe (
              (res:Response) =>{
                this.u=res.json();
                console.log(this.u)

              }  )
             console.log(this.arrBirds.IP +this.arrBirds.port+"vsjdncv")
          },
          (err: HttpErrorResponse) => {
            console.log (err.message);
          }
        );


  }

}
