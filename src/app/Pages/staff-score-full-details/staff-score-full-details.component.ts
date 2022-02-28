import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerformanceManagementService } from 'src/app/performance-management.service';

@Component({
  selector: 'app-staff-score-full-details',
  templateUrl: './staff-score-full-details.component.html',
  styleUrls: ['./staff-score-full-details.component.css']
})
export class StaffScoreFullDetailsComponent implements OnInit {

  constructor(private PerformanceManagementService: PerformanceManagementService, private route: ActivatedRoute) { }

  StaffTypeID: any;
  StaffID: any;
  avgScore: any;
  groupHeadAvgScores: any;
  divisionAvgScores: any;
  cioAvgScores: any;
  Manager: any;
  GroupHead: any;
  DivisionHead: any;
  CIOHead: any;
  StaffDetailsBYConductAppraisals: any;
  ngOnInit() {
    this.route.params.subscribe(params => {
      debugger;
      this.StaffTypeID = params['StaffTypeID'];
      if (params['StaffTypeID'] != undefined) {
        this.StaffID = params['StaffID'];
        this.PerformanceManagementService.GetConductappraisalStaffList().subscribe(
          res => {
            debugger;
            let temp: any = res
            this.StaffDetailsBYConductAppraisals = temp.filter((x: { id: any; }) => x.id == this.StaffID);
            this.EmployeeName = this.StaffDetailsBYConductAppraisals[0].name;
            this.StartDate = this.StaffDetailsBYConductAppraisals[0].cycleStartDate;
            this.EndDate = this.StaffDetailsBYConductAppraisals[0].cycleEndDate;
            this.SupervisorName = this.StaffDetailsBYConductAppraisals[0].superviosrName;
            this.Appraisaldate = this.StaffDetailsBYConductAppraisals[0].appraisalSubmitionDate
          }
        )
        this.PerformanceManagementService.GetStaffScoresByStaffandYear(2021, this.StaffID).subscribe(data => {
          debugger;
          let temp: any = data
          this.StaffScoresLists = temp;
          this.StaffType = temp[0].staffType;
          //  this.Appraisaldate = data[0].appraisalDate;
          //  this.StartDate = data[0].fromDate;
          //  this.EndDate = data[0].toDate;
          this.overallScore = temp[0].overallScore;
          this.avgScore = temp[0].avgScore;
          this.groupHeadAvgScores = temp[0].groupHeadAvgScores;
          this.divisionAvgScores = temp[0].divisionAvgScores;
          this.cioAvgScores = temp[0].cioAvgScores;
          //this.SupervisorName = data[0].userName


          for (let i = 0; i < this.StaffScoresLists.length; i++) {
            if (this.StaffScoresLists[i].score == null) {
              this.Manager = false;
            }
            else {
              this.Manager = true;
            }

            if (this.StaffScoresLists[i].groupHeadScores == null) {
              this.GroupHead = false;
            }
            else {
              this.GroupHead = true;
            }
            if (this.StaffScoresLists[i].divisionScores == null) {
              this.DivisionHead = false;
            }
            else {
              this.DivisionHead = true;
            }
            if (this.StaffScoresLists[i].cscores == null) {
              this.CIOHead = false;
            }
            else {
              this.CIOHead = true;
            }

          }
        })
      }
    }
    );
  }


  Stafflist1: any;
  EmployeeID: any;
  EmployeeName: any;
  StaffScoresLists: any;
  Appraisaldate: any;
  StartDate: any;
  EndDate: any;
  SupervisorName: any;
  overallScore: any;
  StaffType: any;
  // GetStaff(event) {
  //   debugger
  //   this.StaffID = event.target.value;
  //   this.PerformanceManagementService.GetStaff(1).subscribe(data => {
  //     debugger
  //     let temp: any = data;
  //     this.Stafflist1 = temp.filter(x => x.id == this.StaffID);
  //     this.EmployeeID = this.Stafflist1[0].id;
  //     this.EmployeeName = this.Stafflist1[0].name;
  //   })
  //   this.PerformanceManagementService.GetStaffScoresByStaffandYear(2020, this.StaffID).subscribe(data => {
  //     debugger;
  //     this.StaffScoresLists = data;
  //     this.StaffType = data[0].staffType;
  //     this.Appraisaldate = data[0].appraisalDate;
  //     this.StartDate = data[0].fromDate;
  //     this.EndDate = data[0].toDate;
  //     this.overallScore = data[0].overallScore;
  //     this.SupervisorName = data[0].userName
  //   })
  // }


  StaffAppraisalList: any;
  public ConductappraisalStaffList() {
    this.PerformanceManagementService.GetConductappraisalStaffList().subscribe(
      res => {
        debugger;
        let temp: any = res
        this.StaffAppraisalList = temp
      }
    )
  }

}


