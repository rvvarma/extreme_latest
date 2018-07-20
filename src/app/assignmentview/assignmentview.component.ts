import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response,Headers} from '@angular/http';
import { CommonModule} from '@angular/common';
import { RouterModule, ActivatedRoute, Params} from '@angular/router';
import { RouterModule, router, Params} from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-assignmentview',
  templateUrl: './assignmentview.component.html',
  styleUrls: ['./assignmentview.component.css']
})
export class AssignmentviewComponent implements OnInit {
  private base64textString:String="";
  class=[];
  student=[];
  stu=[];
cln:any;
sec:any;
section=[];
subject=[];
    hash={};
   a:any;
   s:any;
   id:any;
   filetype:any;
  constructor(private http: Http,private private router: Router,private httpService: HttpClient) { }


  fetchclasses=function()
  {var url=this.arrBirds.IP +":"+this.arrBirds.port+"/getclass"
  console.log(url)
    this.http.get(url).subscribe (
      (res:Response) =>{
        this.class=res.json();
        var data=this.class;
        console.log(JSON.stringify(data))
        for(var i in data){
        this.cln=data[i].classes.classname;
        console.log(this.cln)

this.student.push(this.cln)

}
console.log(this.student)
})
}

  fetchsection=function(pro)
  {
    var hash={};
    var url=this.arrBirds.IP +":"+this.arrBirds.port+"/getclass"
    console.log(url)
    this.http.get(url).subscribe (
      (res:Response) =>{
        this.class=res.json();
         // var classes=this.class[0].classname;
         var data = this.class;

         for(var i in data)
         {
           this.cln = data[i].classes.classname;
         hash[this.cln]=data[i].classes.sections

        this.section=hash[pro]
}
      }
    )
  }

  fetchsubject=function(sub)
  {
    var hash={};
    var url=this.arrBirds.IP +":"+this.arrBirds.port+"/getclass"
    console.log(url)
    this.http.get(url).subscribe (
      (res:Response) =>{
        this.class=res.json();
         // var classes=this.class[0].classname;
         var data = this.class;

         for(var i in data)
         {
             this.cln = data[i].classes.classname;
              hash[this.cln] = data[i].classes.subjects;
            //  console.log(this.cln)

         }

  this.subject=hash[this.cln]
//  console.log("sknc;l"+hash[this.cln])

      }
    )
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


  onSubmit(f1)
{
var f2=JSON.stringify(f1)


console.log("sajbl  "+this.s)
var a11=this.s
  var cls=document.getElementById("class").value;
  var sec=document.getElementById("section").value;
  var sub=document.getElementById("subject").value;
  var  title=document.getElementById("title").value;
  var des=document.getElementById("description").value;
  var filetype=document.getElementById("filePicker").value;
  console.log("filetype"+filetype)
 console.log(this.s);
  var b=[];
  var ass={
    "subject":sub,
    "description":des,
    "title":title,
    "file":this.s;
    "filetype":this.filetype
  }
  b.push(ass);
  console.log(b)
  var m={
    "teacherid":"101",
    "schoolid":"ex1",
    "class":cls,
    "section":sec,
    "assignment":b


  }
  console.log(m)
  var url=this.arrBirds.IP +":"+this.arrBirds.port+"/assign/post"
    console.log(url)

  this.http.post(url,m).subscribe(
    (res:Response)=>{
    //  console.log(Subject)



      console.log(m+"nwL")
    this.a=res.json();
    console.log(res.json())
    this.router.navigate(['/teacherdashboard/present']);

  })

    console.log("dsbAL")


  }

  ngOnInit() {

this.httpService.get('../assets/config/IPconfig.json').subscribe(


       data => {
         this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.

          var url=this.arrBirds.IP +":"+this.arrBirds.port+"/classesconfig"
          console.log(url)
          this.fetchclasses();

       },
       (err: HttpErrorResponse) => {
         console.log (err.message);
       }
     );





}
}
