import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerformanceManagementService } from 'src/app/performance-management.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  roleid: any;
  temp: any;
  list:any;
  StaffID:any

  constructor(public router: Router, private PerformanceManagementService: PerformanceManagementService) { }

  ngOnInit(): void {
    this.temp = sessionStorage.getItem('temp');
    this.roleid = sessionStorage.getItem('roleid');
    this.StaffID = sessionStorage.getItem('EmaployedID');

    this.ConductappraisalStaffList();

    

  }
  StaffAppraisalList:any
  uniquelist:any
  public ConductappraisalStaffList() {
    this.PerformanceManagementService.GetConductappraisalStaffListforpip().subscribe(
      res => {
        debugger;
        let temp: any = res
          this.StaffAppraisalList = temp.filter((x: { hrSubmittedDate: null; staffid:string})=>x.hrSubmittedDate!=null && x.staffid==this.StaffID);
          this.list=   this.StaffAppraisalList.length
          const key = 'employee';
          const key1 = 'month'
          this.uniquelist = [...new Map(this.StaffAppraisalList.map((item: { [x: string]: any; }) =>
  
            [(item[key]), item])).values()]
      }
    )
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

  ReviewRating() {
    this.active = 'ReviewRating';
    localStorage.setItem("clickname", "Review Rating")
  }

  salaryIncrement() {
    this.active = 'salaryIncrement';
    localStorage.setItem("clickname", "Salary Increment Letter")
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
    localStorage.setItem("clickname","Appraisal Report")
  }

  app(){
    // if( this.StaffAppraisalList.length!=0){}
      this.active = 'app';
      localStorage.setItem("clickname","PIP")
    
  
  }

  help(){
    this.active = 'help'
    localStorage.setItem("clickname", "HELP")
  }

  SupportTickets(){
    this.active = 'SupportTickets'
    localStorage.setItem("clickname", "support tickets")
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
