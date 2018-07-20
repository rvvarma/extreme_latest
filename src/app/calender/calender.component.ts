




import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { RouterModule, ActivatedRoute, Params} from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'my-app',
  templateUrl: './calender.component.html',
  styleUrls: [ './calender.component.css' ]
})
export class CalenderComponent implements OnInit  {





  constructor (private activatedRoute: ActivatedRoute, private httpService: HttpClient) { }
    arrBirds= [];
     P= [];
     arrBirdss= [];
     Z= []


   calendarOptions: Options;
   displayEvent: any;
   ids: any;
   idss: any;









   @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;








    ngOnInit() {


   this.activatedRoute.params.subscribe(paramsId => {
            this.ids = paramsId.id;
        });
        console.log(this.ids);



  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();


  function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
  }





     this.httpService.get('../assets/config/IPconfig.json').subscribe(
         data => {
           this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.

            console.log(this.arrBirds.IP +":"+this.arrBirds.port+"vsjdncv")
            console.log(this.arrBirds.IP +":"+this.arrBirds.port+"/filter/2/B/"+year+","+month+",1/"+year+","+month+","+daysInMonth(month,year))

      this.httpService.get(this.arrBirds.IP +":"+this.arrBirds.port+"/filter/5/B/"+year+","+month+",1/"+year+","+month+","+daysInMonth(month,year)).subscribe(
        datas => {
          this.arrBirds = datas


  for ( var i in datas){


  var datass=datas[i].date;


   var str = datass.created;
      var res = str.split("T");

  //this.P.push({start:res[0],title:"present"})





  console.log(dateObj)
  console.log(month)
  console.log(day)
  console.log(year)

  for ( var k in datas[i].data)

  {

  console.log(datas[i].data[k].stid)


  var l= this.ids

  if (datas[i].data[k].stid==l){

  this.P.push({start:res[0],title:datas[i].data[k].status})
  }




  }





  function myFunction() {
      var today = new Date();
      var month = today.getMonth();

      console.log(daysInMonth(1 + 1, today.getFullYear()))
  }


  myFunction();








  var sssss=this.P
  console.log(sssss)
    this.calendarOptions = {
       editable: true,
       eventLimit: false,
       header: {
         left: 'prev,next today',
         center: 'title',
         right: 'month,agendaWeek,agendaDay,listMonth',


       },
       events: sssss

     };







  //console.log(this.calenderOptions)

        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );


    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
  );




}
  clickButton(model: any) {


  console.log(model.data+"dsacjanclan "+JSON.stringify(model))




  var utcSeconds = model.data;

  console.log(new Date(utcSeconds).toLocaleDateString("en-US"));


  var ty=new Date(utcSeconds);
  console.log(ty.getMonth()+1)
  console.log(ty.getFullYear())
  console.log(ty.getDate())










     this.httpService.get('../assets/config/IPconfig.json').subscribe(
         data => {
           this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.

            console.log(this.arrBirds.IP +this.arrBirds.port+"vsjdncv")
            var month = ty.getMonth()+1; //months from 1-12
            var day = ty.getDate();
            var year =ty.getFullYear();



            console.log("checking "+month)

    console.log(this.arrBirds.IP +":"+this.arrBirds.port+"/filter/2/B/"+year+","+month+",1/"+year+","+month+","+daysInMonth(ty.getMonth()+1,year))

      this.httpService.get(this.arrBirds.IP +":"+this.arrBirds.port+"/filter/2/B/"+year+","+month+",1/"+year+","+month+","+daysInMonth(month,year)).subscribe(
        dts => {
          this.arrBirdss = dts



  for ( var l in dts)


  {


  var dtss=dts[l].date;


   var str = dtss.created;
   var res = str.split("T");


  this.Z.push({start:res[0],title:"present"})



  for ( var q in dts[l].Data)

  {

  console.log(dts[l].Data[q].stid)


  var l= this.idss

  if (dts[l].Data[q].stid==l){

  this.Z.push({start:res[0],title:dts[l].Data[q].status})
  }
  }


  }
  }

},
(err: HttpErrorResponse) => {
  console.log (err.message);
}
);

  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();


  function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
  }


  console.log("http://10.10.5.42:5000/filter/2/B/"+year+","+month+",1/"+year+","+month+","+daysInMonth(month,year))



      this.displayEvent = model;
      console.log("hiiiiii")




  console.log(year)
  console.log(month)
  console.log(day)
  console.log(dateObj)









    }








    eventClick(model: any) {


      model = {
        event: {
          id: model.event.id,
          end: model.event.end,
          title: model.event.title,
          allDay: model.event.allDay

          // other params
        },
        duration: {}
      }
      this.displayEvent = model;

    }
    updateEvent(model: any) {
      model = {
        event: {
          id: model.event.id,
          end: model.event.end,
          title: model.event.title




          // other params
        },
        duration: {
          _datas: model.duration._datas
        }


      }
  }



  }
