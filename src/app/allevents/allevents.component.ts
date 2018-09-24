


import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-allevents',
  templateUrl: './allevents.component.html',
  styleUrls: ['./allevents.component.css']
})
export class AlleventsComponent implements OnInit {
   student = [];
   stu = [];
   st = [];

constructor(private http: Http) { }

  fetchData = function ()
  {

   this.http.get("http://13.232.165.2:3000/users7/Holiday/6666/All").subscribe((res: Response)
   => {

       this.student = res.json();
      console.log(student)

  }
   )


   this.http.get("http://13.232.165.2:3000/users7/Exams/6666/All").subscribe((res: Response)
   => {

       this.stu = res.json();
      console.log(stu)

  }
   )

   this.http.get("http://13.232.165.2:3000/users7/Events/6666/All").subscribe((res: Response)
   => {

       this.st = res.json();
      console.log(st)

  }
   )


 }


  ngOnInit() {

this.fetchData();
  }

}
