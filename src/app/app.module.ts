import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, ActivatedRoute, Params} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxSpinnerModule } from 'ngx-spinner'
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule } from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AssignTeacherClassListComponent } from './assign-teacher-class-list/assign-teacher-class-list.component';
import { EditAssignTeacherClassListComponent } from './edit-assign-teacher-class-list/edit-assign-teacher-class-list.component';

import { CookieService } from 'angular2-cookie/core'
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';
import { TeacherStudentListComponent } from './teacher-student-list/teacher-student-list.component';


import { AssignclasstostudentComponent } from './assignclasstostudent/assignclasstostudent.component';
import { FetchTeacherClassComponent } from './fetch-teacher-class/fetch-teacher-class.component';
import { PercentageviewComponent } from './percentageview/percentageview.component';
//
import { FullCalendarModule } from 'ng-fullcalendar';
import { CalenderComponent } from './calender/calender.component';
import { AttendanceviewforadminComponent } from './attendanceviewforadmin/attendanceviewforadmin.component';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { FooComponent } from './foo/foo.component';
import { Foo1Component } from './foo1/foo1.component';
import { GetStartComponent } from './get-start/get-start.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { RegisterComponent } from './register/register.component';
import { ClassComponent } from './class/class.component';
import { SchoolComponent } from './school/school.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { ParentdashboardComponent } from './parentdashboard/parentdashboard.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AssignmentviewComponent } from './assignmentview/assignmentview.component';
import { PresentviewComponent } from './presentview/presentview.component';
import { NewteacherComponent } from './newteacher/newteacher.component';
import { TeacherpasswordComponent } from './teacherpassword/teacherpassword.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminPasswordComponent } from './admin-password/admin-password.component';
import { StudentDetailsFeePaymentComponent } from './student-details-fee-payment/student-details-fee-payment.component';
import { RegistraionComponent } from './registraion/registraion.component';



//parent dashboard
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { PDashboardComponent } from './p-dashboard/p-dashboard.component';
import { TDashboardComponent } from './t-dashboard/t-dashboard.component';
import { TSharedModule } from './t-shared/t-shared.module';
import { PSharedModule } from './p-shared/p-shared.module';
import { AssignmentTabsComponent } from './assignment-tabs/assignment-tabs.component';
import {NgbTabsetConfig} from './tabset-config';
import { NgbdDropdownBasic } from './dropdown-basic';
import { ParentassignmentComponent } from './parentassignment/parentassignment.component';
import { ADashboardComponent } from './a-dashboard/a-dashboard.component';
import { OwnerComponent } from './owner/owner.component';
import { AccountComponent } from './account/account.component';
import { TeacherComponent } from './teacher/teacher.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { SchoolComponent } from './school/school.component';
import { FeeregisterComponent } from './feeregister/feeregister.component';
import { ParentaccountsComponent } from './parentaccounts/parentaccounts.component';
import { CheckComponent } from './check/check.component';




var schoolroots: Routes = [
  {
    path: 'admindashboard',
          component: AdminDashboardComponent,
          children: [
      {
         path: 'first',
         component:HomeComponent,

      },

      {  path:'feeregistration',component:    FeeregisterComponent

      },


      {  path:'teacherregistration',component:    TeacherComponent

      },
      {  path:'accountregistration',component:    AccountComponent

      },


      {
        path:'account' ,component: AccountComponent
      },
      {
      path: 'school',
      component:SchoolComponent
      },
          {
      path: 'classdetails',
      component:RootComponent
      },
      {
         path: 'registrations',
         component:RegistraionComponent
      },

      {
        path:'newteacher'
        ,component:     NewteacherComponent

      },
      {
        path:'attendanceforadmin'
        ,component:     AttendanceviewforadminComponent

      },
      {  path:'class',component:    ClassComponent

      },
      {
        path:'teacherlist'
        ,component: AssignTeacherClassListComponent
},
      {
        path:'teacherlist/edit/:id'
        ,component: EditAssignTeacherClassListComponent
      },
      {
           path: 'admin',component:  AssignclasstostudentComponent

                 },
                 {  path:'addteacher',component:AddteacherComponent
                 },
                 {
           path:'feedetails', component:StudentDetailsFeePaymentComponent
         },
         {
                 path:'admindash', component:ADashboardComponent
               },
               {
                 path:'edit/:id',component:EditComponent
                   },
  ]
},
{
path: 'teacherdashboard',
      component: TeacherdashboardComponent,
      children: [
        {
                path:'tdashboard', component:TDashboardComponent
              },
              {  path:'assignmenttabs',component:    AssignmentTabsComponent

              },
        {
          path:'assignment', component:AssignmentviewComponent
        },
        {
          path:'present', component:PresentviewComponent
        },
        {

            path: 'fetchteacherclass',component: FetchTeacherClassComponent
         },

                               {
                                 path:'percentage', component:PercentageviewComponent
                               },

      ]
      {
      path: 'parentdashboard',
            component: ParentdashboardComponent,
            children: [
              {
                      path:'parentdash', component:PDashboardComponent
                    },
                    {
                        path:'calender/:id',component: CalenderComponent
                    },

                    {
                      path:'assignment', component:ParentassignmentComponent
                    },
                    {
                      path:'present', component:PresentviewComponent
                    },
                    {  path:'attendanceforadmin',component:AttendanceviewforadminComponent
                  },
                  {
                      path:'parentassignment',component: ParentassignmentComponent
                  },
                  {
                      path:'parentaccount',component: ParentaccountsComponent
                  },


            ]
}]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    AssignTeacherClassListComponent,
    EditAssignTeacherClassListComponent,
    TeacherdashboardComponent,
    TeacherStudentListComponent,
    AssignclasstostudentComponent,
    FetchTeacherClassComponent,
    PercentageviewComponent,
    CalenderComponent,
    AttendanceviewforadminComponent,
    AddteacherComponent,
    FooComponent,
    Foo1Component,

    GetStartComponent,
    OwnerDetailsComponent,
    RegisterComponent,
    ClassComponent,
    SchoolComponent,
    EditComponent,
    DeleteComponent,
    RootComponent,
    HomeComponent,
    ParentdashboardComponent,
    CreateAccountComponent,
    ChangePasswordComponent,
    AssignmentviewComponent,
    PresentviewComponent,
    NewteacherComponent,
    TeacherpasswordComponent,

    AdminDetailsComponent,
    StudentDetailsFeePaymentComponent,
    RegistraionComponent,
    PDashboardComponent,
    TDashboardComponent,
    AssignmentTabsComponent,
    ParentassignmentComponent,
    ADashboardComponent,
    OwnerComponent,
    AccountComponent,
    TeacherComponent,
    FieldErrorDisplayComponent,
     AdminPasswordComponent,

    FeeregisterComponent,

    ParentaccountsComponent,

    CheckComponent


    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule,
    HttpModule,
    FullCalendarModule,
    ChartsModule,
    HttpClientModule,
    NgxSpinnerModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    TSharedModule,
    PSharedModule,



    RouterModule.forChild(schoolroots) ,

    RouterModule.forRoot([
      {
         path: 'login'
        ,component: LoginComponent
      },
      {
         path: 'admindashboard'
        ,component: AdminDashboardComponent
      }
      ,{
        path:'admin/teacherlist'
        ,component: AssignTeacherClassListComponent
      },
      {
        path:'checkemail'
        ,component: CheckComponent
      },
      {
        path:'admin/teacherlist/edit/:id'
        ,component: EditAssignTeacherClassListComponent
      }
      ,
      {
        path:'teacherdashboard'
        ,component: TeacherdashboardComponent
      }
      ,

      {
           path: 'admin',component:  AssignclasstostudentComponent

                 },
                 {
                      path: 'registration',component:  OwnerDetailsComponent

                            },
      {
        path:'teacherdashboard/studentlist' ,component: TeacherStudentListComponent
      },

      {
          path:'calender/:id',component: CalenderComponent
      },
      {
          path:'parentassignment',component: ParentassignmentComponent
      },



      {
          path:'parentaccount',component: ParentaccountsComponent
      },

 {  path:'attendanceforadmin',component:AttendanceviewforadminComponent
},
{  path:'getstart',component:GetStartComponent
},

{  path:'class',component:    ClassComponent

},


        { path: 'eventsss/:ids',component: CalenderComponent

      },




{  path:'ownerdetails',component:    OwnerDetailsComponent

},


{  path:'ownerregistration',component:    OwnerComponent

},


{  path:'schoolregistration',component:    SchoolComponent

},



{  path:'teacherregistration',component:    TeacherComponent

},


{  path:'accountregistration',component:    AccountComponent

},


{  path:'feeregistration',component:    FeeregisterComponent

},
{  path:'signup',component:    RegisterComponent

},
{  path:'addteacher',component:AddteacherComponent
},
{
      path:'first',component:HomeComponent
        },
    {
  path:'school',component:SchoolComponent
},

        {
          path:'edit/:id',component:EditComponent
            },
            {
              path:'delete/:id',component:DeleteComponent
            },
            {
              path:'classdetails',component:RootComponent
            },
            {
              path:'parentdashboard',component:ParentdashboardComponent
                },
                {
                        path:'parentdash', component:PDashboardComponent
                      },
                      {
                              path:'createaccount', component:CreateAccountComponent
                            },
                      {
                        path:'changepassword/:id', component:ChangePasswordComponent
                      },


                      {

                          path: 'fetchteacherclass',component: FetchTeacherClassComponent
                       },

                      {
                        path:'percentage', component:PercentageviewComponent
                      },
                      {
                        path:'assignment', component:AssignmentviewComponent
                      },
                      {
                        path:'present', component:PresentviewComponent
                      },
                      {
          path:'teacherpassword/:id', component:TeacherpasswordComponent
        },
        {
  path:'feedetails', component:StudentDetailsFeePaymentComponent
},

{
          path:'newteacher', component:NewteacherComponent
        },

        {
          path:'admindetails', component:AdminDetailsComponent
        },
        {
          path:'adminpassword/:id', component:AdminPasswordComponent
        }

        ,
        {  path:'assignmenttabs',component:    AssignmentTabsComponent

        },
        {
                path:'tdashboard', component:TDashboardComponent
              },
              {
                      path:'admindash', component:ADashboardComponent
                    },
        {
          path:'registrations', component:RegistraionComponent
        }


    ])
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
