import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  roleid: any;
  temp: any;

  constructor() { }

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
  Performance() {
    this.active = 'AppraisalCycle';
    localStorage.setItem("clickname", "Performance Management")
  }

  kra() {
    localStorage.setItem("clickname", "KRA")
  }


  Kpi() {
    localStorage.setItem("clickname", "KPI")
  }

  Employee() {
    localStorage.setItem("clickname", "Employee Dashboard")
  }
  Employeekramapping() {
    localStorage.setItem("clickname", "Employee KRA Mapping")
  }

  Myappraisal() {
    localStorage.setItem("clickname", "My Appraisal Dashboard")
  }

  Appraisal() {
    localStorage.setItem("clickname", "AppraisalCycle")
  }

  TeamAppraisal() {
    localStorage.setItem("clickname", "Team Appraisal")
  }

  BellCurve(){
    localStorage.setItem("clickname", "Bell Curve Fitting")
  }
}
