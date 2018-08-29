import { Component, OnInit } from '@angular/core';
declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'tdashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'editprofile', title: 'User Profile',  icon:'ti-user', class: '' },
    { path: 'fetchteacherclass', title: 'Attendance',  icon:'ti-view-list-alt', class: '' },
    { path: 'assignment', title: 'Assignments',  icon:'ti-text', class: '' },

];
@Component({

  templateUrl: './t-shared.component.html',
  moduleId: module.id,
  selector: 'Tsidebar-cmp',
})
export class TSharedComponent implements OnInit {

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
