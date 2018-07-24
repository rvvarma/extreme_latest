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
    sln:any
    sub:any;
    sec:any;
    section=[];
    subject=[];
    a11=[]
      hash={};
     a:any;
     s:any;
     id:any;
     filetype:any;
     c:any;
     s1:any;
     c11:any;
     sub1:any
    constructor(private http: Http,private private router: Router,private httpService: HttpClient,private _cookieService:CookieService) { }
    getCookie(key:string){
        return this._cookieService.get(key);
      }

    fetchclasses=function()
    {
      //this.arrBirds.IP +":"+this.arrBirds.port+"/users1/class"+"/"+this.id
      var url=this.arrBirds.IP +":"+this.arrBirds.port+"/users1/class/"+this.id
    console.log(url)
      this.http.get(url).subscribe (
        (res:Response) =>{
          this.class=res.json();
          var data=this.class;
          console.log(JSON.stringify(data))
          for(var i in data){
          this.cln=data[i].Class;

          console.log(this.cln)

  this.student.push(this.cln)

  }
  console.log(this.student)
  })
  }

    fetchsection=function(pro)
    {
      var hash={};
      this.section=[]
      var url=this.arrBirds.IP +":"+this.arrBirds.port+"/users1/class/"+this.id
      console.log(url)
      this.http.get(url).subscribe (
        (res:Response) =>{

          this.class=res.json();
           // var classes=this.class[0].classname;
           var data1 = this.class;
           for(var i in data1){

             this.cln = data1[i].Class;

           if(hash[this.cln])
           {
             m=hash[this.cln];
            m=m+","+data1[i].Section;
            hash[this.cln]=m;
            //this.sln=hash[pro];
            //this.section.push(this.sln)


            }


           else
           {
              hash[this.cln]=data1[i].Section;
              this.sln=hash[pro];


           }
           console.log(hash[pro]+"hash")


    //console.log(this.sln);

    }
    this.section.push(this.sln)
    var p=hash[pro].split(",");
    this.section=p;
    })




    }
    fetchsubject=function(sub)
    {
      var m1=""
          var hash={};
      this.subject=[];


      var url=this.arrBirds.IP +":"+this.arrBirds.port+"/users1/class/"+this.id
      console.log(url)
      this.http.get(url).subscribe (
        (res:Response) =>{
          this.class=res.json();
           var data2 = this.class;


           for(var i in data2)
          {
             this.cln=data2[i].Class;
            if(hash[this.cln])
            {
              m1=hash[this.cln];
             m1=m1+","+data2[i].Subject;
             hash[this.cln]=m1;



             }


            else
            {

               hash[this.cln]=data2[i].Subject;



            }

          }

          var f=document.getElementById('class').value;
         this.sub1=hash[f].split(",");
          this.subject.push(this.sub1)

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
    this.c=document.getElementById("class").value;
    this.s1=document.getElementById("section").value;
    var sub=document.getElementById("subject").value;
    var  title=document.getElementById("title").value;
    var des=document.getElementById("description").value;
    var filetype=document.getElementById("filePicker").value;
    console.log("filetype"+filetype)
   console.log(this.s);
    var b=[];
    var a=b;
    console.log(JSON.stringify(a))
    var ass={
        "teacherid":this.id,
      "subject":sub,
      "description":des,
      "title":title,
      "file":this.s;
      "filetype":this.filetype
    }
    b.push(ass);
    console.log(b)
    var m={

      "schoolid":"ex1",
      "class":this.c,
      "section":this.s1,
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
      console.log(res.json());
      this._cookieService.put("class",this.c);
      this._cookieService.put("section",this.s1);
      this.router.navigate(['/present']);

    })

      console.log("dsbAL")


    }

    ngOnInit() {
      this.id=this.getCookie("Id")
  console.log(this.id+"id")
  this.httpService.get('../assets/config/IPconfig.json').subscribe(


         data => {
           this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.

            var url=this.arrBirds.IP +":"+this.arrBirds.port+"/classesconfig"
            console.log(url+"bhkuhl")
            this.fetchclasses();

         },
         (err: HttpErrorResponse) => {
           console.log (err.message);
         }
       );
  }
}
