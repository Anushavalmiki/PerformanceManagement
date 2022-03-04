import { Component, OnInit } from '@angular/core';
import { PerformanceManagementService } from '../performance-management.service';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {

  constructor(private PerformanceManagementService: PerformanceManagementService) { }
  StaffID: any;
  countList: any;
  EmployeeKradash: any;
  count: any;
  employeSubmissionDate: any;
  managerSubmittedCount: any;
  hrSubmittedCount: any;
  totalAppraisalCount: any;
  ngOnInit(): void {

    this.StaffID = sessionStorage.getItem('EmaployedID');

    this.GetAllCounts();
    this.PerformanceManagementService.GetConductappraisalStaffList().subscribe(data => {
      debugger
      this.EmployeeKradash = data.filter(x=>x.approver1 == this.StaffID);
      this.count = this.EmployeeKradash.length;
      debugger
      var list = data.filter(x => x.employeeSubmittedDate != null && x.approver1 == this.StaffID)
      this.employeSubmissionDate = list.length;

      var list1 = data.filter(x => x.managerSubmittedDate != null && x.approver1 == this.StaffID);
      this.managerSubmittedCount = list1.length;

      var list2 = data.filter(x => x.hrSubmittedDate != null && x.approver1 == this.StaffID);
      this.hrSubmittedCount = list2.length;
      debugger
      var list4 = data.filter(x => x.cioScores != null && x.approver1 == this.StaffID)
      this.totalAppraisalCount = list4.length;
    });


  }



  public GetAllCounts() {
    debugger
    if (this.StaffID == undefined) {
      debugger
      this.PerformanceManagementService.GetAllCounts(1, 1).subscribe(
        data => {
          this.countList = data[0];
        }
      )
    }
    else {
      this.PerformanceManagementService.GetAllCounts(2, this.StaffID).subscribe(
        data => {
          this.countList = data[0];
        }
      )
    }
  }


}
