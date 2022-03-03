import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  roleid: any;
  temp: any;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.temp = sessionStorage.getItem('temp');
    this.roleid = sessionStorage.getItem('roleid');
  }

  public highlight(evt: any) {
    debugger
    var i, tablinks;
    //  localStorage.setItem("clickname",name)
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
  }

  active: any;
  CreateGoal() {
    this.active = 'CreateGoal';
    localStorage.setItem("clickname", "Create Goal")
  }

  Performance() {
    this.active = 'SetAppraisal';
    localStorage.setItem("clickname", "Performance Management")
  }

  kra() {
    this.active = 'course';
    localStorage.setItem("clickname", "KRA")
  }


  Kpi() {
    this.active = 'kpi';
    localStorage.setItem("clickname", "KPI")
  }

  Employee() {
    this.active = 'EmployeeDashboard';
    localStorage.setItem("clickname", "Employee Dashboard")
  }
  Employeekramapping() {
    this.active = 'Settings';
    localStorage.setItem("clickname", "Employee KRA Mapping")
  }

  Myappraisal() {
    this.active = 'MyAppraisalDashboard';

    localStorage.setItem("clickname", "My Appraisal Dashboard")
  }

  Appraisal() {
    this.active = 'AppraisalCycle';
    localStorage.setItem("clickname", "AppraisalCycle")
  }

  TeamAppraisal() {
    this.active = 'TeamAppraisal';
    localStorage.setItem("clickname", "Team Appraisal")
  }

  StaffScore() {
    this.active = 'StaffScore';
    localStorage.setItem("clickname", "Team Appraisal")
  }



  BellCurve(){
    this.active = 'Bell';
    localStorage.setItem("clickname", "Bell Curve Fitting")
  }

  AppraisalReport(){
    this.active = 'AppraisalReport';
    localStorage.setItem("clickname","Appraisal Repor")
  }

  dashboard() {
    this.active = 'dashboard';
    localStorage.setItem("clickname", "dashboard")
    if(this.roleid==2)
    {
      this.router.navigate(['/EmployeeTileDashboard']);
    }
    else if(this.roleid==3){
      this.router.navigate(['/HRDashboard']);
    }
    else {
      this.router.navigate(['/ManagerDashboard']);
    }
   
  }
}
