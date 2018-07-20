import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-newteacher',
  templateUrl: './newteacher.component.html',
  styleUrls: ['./newteacher.component.css']
})
export class NewteacherComponent implements OnInit {

  constructor(private http:Http,private httpService: HttpClient) { }

//post or add new teacher to the school
  onSubmit=function(teacherdata)
  {
    var dat=JSON.stringify(teacherdata)
    //alert(dat)
    alert("created")
    console.log(dat)

var url=this.arrBirds.IP+":"+this.arrBirds.port+"/users5/add"
this.http.post(url,teacherdata).toPromise()
      .then(res => console.log(teacherdata,<any[]> res.json()))
      .then(data => { return data; });
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
