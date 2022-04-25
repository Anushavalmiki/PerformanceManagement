import { Component, OnInit } from '@angular/core';
import { PerformanceManagementService } from 'src/app/performance-management.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-salaryincrementletter-dash',
  templateUrl: './salaryincrementletter-dash.component.html',
  styleUrls: ['./salaryincrementletter-dash.component.css']
})
export class SalaryincrementletterDashComponent implements OnInit {


  constructor(private PerformanceManagementService: PerformanceManagementService) { }

  stafflist: any;
  term: any;
  p: any = 1;
  count1: any = 10;
  stafflistCopy: any;
  Departmentlist: any;
  RoleTypeList: any;
  RoleType: any;
  Department: any;
  count: any;
  search: any;
  Apprisalcyclelist: any;
  AppraisalSubmitionDate: any;
  sDate: any;
  eDate: any;
  appraisalCycleName: any
  staffID: any;

  EmployeeKradash: any
  Promotion: any;
  level: any;
  role:any;
  roleid:any;
  stafflist1:any
  ngOnInit(): void {
    this.staffID = sessionStorage.getItem('EmaployedID');
    this.roleid = sessionStorage.getItem('roleid');
    this.Promotion = 0;
    this.level = 0;
    this.appraisalCycleName = 0;
    this.Department = "";
    this.RoleType = "";
    this.PerformanceManagementService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data;
      this.stafflistCopy = this.stafflist

    });

    this.PerformanceManagementService.GetMyDetailsForReiewRating().subscribe(data => {
      debugger
      this.stafflist1 = data.filter(x=>x.salaryIncrement==1);
      this.stafflistCopy = this.stafflist

    });

    this.PerformanceManagementService.GetDepartment().subscribe(data => {
      debugger
      this.Departmentlist = data;
    });

    this.PerformanceManagementService.GetRoleType().subscribe(data => {
      debugger
      this.RoleTypeList = data;
    });

    this.PerformanceManagementService.GetConductappraisalStaffList().subscribe(data => {
      debugger
      this.EmployeeKradash = data.filter(x => x.approver1 == sessionStorage.getItem('EmaployedID') && x.selfScores != null && x.employeeSubmittedDate != null);
      this.count = this.EmployeeKradash.length;
    });

    this.PerformanceManagementService.GetAppraisalCycle().subscribe(data => {
      debugger
      this.Apprisalcyclelist = data;
    });

  }

  public getRoleType(event: any) {
    debugger
    this.RoleType = event.target.value;
  }

  public FilterRoleType() {
    debugger
    this.PerformanceManagementService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data.filter(x => x.roleType == this.RoleType);
      this.count1 = this.stafflist.length;
    });

  }

  public filterByDepartment() {
    debugger
    this.PerformanceManagementService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data.filter(x => x.department == this.Department);
      this.count = this.stafflist.length;
    });

  }
  Staffkra: any;
  public GetStaffKraDetails(details: any) {
    debugger
    this.PerformanceManagementService.GetEmployeeKraMap().subscribe(data => {
      debugger
      this.Staffkra = data.filter(x => x.staffName == details.staffid);
    });

  }

  public GetApprisalcycle(event: any) {
    debugger
    this.PerformanceManagementService.GetAppraisalCycle().subscribe(data => {
      debugger
      let temp: any = data.filter(x => x.id == event.target.value);
      this.AppraisalSubmitionDate = temp[0].employeeSubmissionDate;
      this.appraisalCycleName = temp[0].appraisalCycleName
      this.sDate = temp[0].cycleStartDate;
      this.eDate = temp[0].cycleEndDate;

    });
  }

  public GetFilteredAppraisalCycle() {
    this.PerformanceManagementService.GetConductappraisalStaffList().subscribe(data => {
      debugger
      this.EmployeeKradash = data.filter(x => x.appraisalCycleName == this.appraisalCycleName && x.approver1 == this.staffID && x.selfScores != null && x.employeeSubmittedDate != null)
      // &&
    })
  }


  RecommendedBonusAmountOrPercent:any
  RecommendedSalaryIncreaseOrPercent:any;
  Level:any;
  Type:any;
  staffid:any;

  public getstaffid(event: any) {
    debugger
    this.staffid = event.id;
  }


  public approve() {
    debugger
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want to Approve it.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Approve it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        var entity = {
          'SatffID': this.staffid,
          'RecommendedBonusAmountOrPercent': this.RecommendedBonusAmountOrPercent,
          'RecommendedSalaryIncreaseOrPercent': this.RecommendedSalaryIncreaseOrPercent,
          'Level': this.Level,
          'Type': this.Type,
        }

        this.PerformanceManagementService.UpdateStaffReviewRating(entity).subscribe(data => {
          debugger
          Swal.fire('Approved Successfully')
          location.reload();
        })
      }
    })
  }


  public approveforIncrement() {
    debugger
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want to Approve it.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Approve it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        var entity = {
          'SatffID': this.staffid,
        }

        this.PerformanceManagementService.UpdateStaffReviewRating(entity).subscribe(data => {
          debugger
          Swal.fire('Approved Successfully')
          location.reload();
        })
      }
    })
  }


  public sendmail() {
    debugger
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want to send mail.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Send it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        // var entity = {
        //   'SatffID': this.staffid,
        // }

        // this.PerformanceManagementService.UpdateStaffReviewRating(entity).subscribe(data => {
        //   debugger
        //   Swal.fire('Approved Successfully')
        //   location.reload();
        // })
        Swal.fire('Mail Sent Successfully!!')
      }
    })
  }



}


