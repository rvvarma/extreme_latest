import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}


export const ROUTES: RouteInfo[] = [
    { path: 'parentdash', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'getstart', title: 'User Profile',  icon:'ti-user', class: '' },

    { path: 'teacherlist', title: 'Assign Teacher ',  icon:'ti-user', class: '' },
{ path: 'admin', title: 'Assign Studnets',  icon:'ti-user', class: '' },

    { path: 'first', title: 'School Config',  icon:'ti-text', class: '' },
    { path: 'attendanceforadmin', title: 'Attendance',  icon:'ti-view-list-alt', class: '' },
    { path: 'classdetails', title: 'Class Details',  icon:'ti-pencil-alt2', class: '' },
    { path: 'accountregistration', title: 'Student Registraions',  icon:'ti-user', class: '' },
    { path: 'teacherregistration', title: ' Teacher Registraions',  icon:'ti-user', class: '' },
{ path: 'feeregistration', title: 'Accounts',  icon:'ti-bell', class: '' },

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
