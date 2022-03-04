import { Component, OnInit } from '@angular/core';
import { PerformanceManagementService } from '../performance-management.service';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {

  constructor(private PerformanceManagementService:PerformanceManagementService) { }
  StaffID:any;
  countList:any;
  EmployeeKradash:any;
  count:any;

  ngOnInit(): void {
    this.GetAllCounts();
    this.StaffID=sessionStorage.getItem('EmaployedID');
  

    this.PerformanceManagementService.GetConductappraisalStaffList().subscribe(data => {
      debugger
      this.EmployeeKradash = data;
      this.count = this.EmployeeKradash.length;
    });
  }


  public GetAllCounts(){
    debugger
    if(this.StaffID==undefined)
    {
     this.PerformanceManagementService.GetAllCounts(1,1).subscribe(
       data=>{
         this.countList=data[0];
       }
     )
    }
    else{
     this.PerformanceManagementService.GetAllCounts(2,this.StaffID).subscribe(
       data=>{
         this.countList=data[0];
       }
     )
    }
  }

  

  }
