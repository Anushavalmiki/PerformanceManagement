import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerformanceManagementService } from 'src/app/performance-management.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-self-rating-page',
  templateUrl: './self-rating-page.component.html',
  styleUrls: ['./self-rating-page.component.css']
})
export class SelfRatingPageComponent implements OnInit {


  constructor(private PerformanceManagementService: PerformanceManagementService, private router: Router, private route: ActivatedRoute, private datepipe: DatePipe) { }

  StaffTypelist: any;
  StaffID: any;
  StaffTypeID: any;
  Stafflist: any;
  appraisalList: any = [];
  idcount: any;

  ResultAreaList: any;
  ParamID: any;

  j = 0;
  JDate: any;
  YearOfService: any;
  public Score: any;
  PerformanceLists1: any;
  Description: any;
  performanceindicatorName: any;
  PerformaceIndicatorID: any;

  StaffType: any;
  SupervisorID: any;
  AppraisalManager: any;
  ResultAreaID: any;
  k: any;
  i: any;
  tablecount: any
  ngOnInit() {
    this.idcount = 0;
    this.Score = 0;
    this.StaffID = sessionStorage.getItem('EmaployedID');
    this.StaffTypeID = sessionStorage.getItem('Type')

    // this.PerformanceManagementService.GetStaffType(1).subscribe(data => {
    //   debugger
    //   this.StaffTypelist = data;
    // })

    // this.PerformanceManagementService.GetStaff(1).subscribe(data => {
    //   debugger
    //   let temp: any = data;
    //   this.Stafflist = temp.filter(x => x.staffTypeID == this.StaffTypeID);
    // })

    // this.PerformanceManagementService.GetKRAByStaffID(this.StaffID).subscribe(data => {
    //   debugger
    //   this.ResultAreaList = data;
    //   this.ResultAreaID = this.ResultAreaList[0].resultAreaID
    //   this.k = 0;
    //   this.PerformanceManagementService.GetResultAreaPerformanceindicator().subscribe(data => {
    //     debugger
    //     let temp: any = data
    //     this.PerformanceLists1 = temp.filter(x => x.resultAreaID == this.ResultAreaID);
    //     this.Description = this.PerformanceLists1[0].performanceindicator;
    //     this.performanceindicatorName = this.PerformanceLists1[0].performanceindicator;
    //     this.PerformaceIndicatorID = this.PerformanceLists1[0].id;
    //     this.i = 0;
    //   })
    // })
    // this.PerformanceManagementService.GetStaffType(1).subscribe(data => {
    //   debugger
    //   this.StaffTypelist = data;
    // })

    this.route.params.subscribe(params => {
      debugger;
      this.ParamID = params['id'];
      if (params['id'] != undefined) {
        this.StaffType = params['StaffID'];
        this.StaffID = params['id'];
        this.StaffTypeID = this.StaffType;
        this.YearOfService = 1;
        this.HighScore()
        // this.PerformanceManagementService.GetStaff(1).subscribe(data => {
        //   debugger
        //   let temp: any = data;
        //   this.StaffTypeID = temp.filter(x => x.id == this.StaffID)[0].staffTypeID;
        //   this.SupervisorID = temp.filter(x => x.id == this.StaffID)[0].supervisorID;
        //   this.Stafflist = temp.filter(x => x.staffTypeID == this.StaffTypeID);
        //   this.JDate = this.datepipe.transform(temp.filter(x => x.id == this.StaffID)[0].joiningDate, 'yyyy-MM-dd');
        //   this.AppraisalManager = temp.filter(x => x.id == this.StaffID)[0].supervisorName;
        // })
        this.PerformanceManagementService.GetKRAByStaffID(this.StaffID).subscribe(data => {
          debugger
          this.ResultAreaList = data;
          this.ResultAreaID = this.ResultAreaList[0].kraid
          this.k = 0;
          this.PerformanceManagementService.GetKPI().subscribe(data => {
            debugger
            let temp: any = data
            this.PerformanceLists1 = temp.filter((x: { kraID: number; }) => x.kraID == this.ResultAreaID);
            this.Description = this.PerformanceLists1[0].performanceIndicator;
            this.performanceindicatorName = this.PerformanceLists1[0].performanceIndicator;
            this.PerformaceIndicatorID = this.PerformanceLists1[0].id;
            this.i = 0;
          })
        })
        // this.GetStaffAppraisalByID(this.ParamID);

      }
    }
    );

    // this.HighScore()
  }


  n: any
  list: any
  public HighScore() {
    debugger
    this.PerformanceManagementService.GetHighScores().subscribe(data => {
      debugger
      this.list = data;
    })
  }

  SelfComments: any;
  resultAreaName: any;
  next() {
    debugger;
    if (this.Score == 0) {
      Swal.fire("Please Give Score");
    }
    else {
      if (this.ResultAreaList.length - 1 == this.k && this.PerformanceLists1.length - 1 == this.i) {
        //this.tablecount = 1;
        this.tablecount = 2;
        this.PerformanceManagementService.GetKPI().subscribe(data => {
          debugger
          let temp: any = data
          this.PerformanceLists1 = temp.filter((x: { kraID: number; }) => x.kraID == this.ResultAreaID);
          this.resultAreaName = this.PerformanceLists1[this.i].resultAreaName;
          this.performanceindicatorName = this.PerformanceLists1[this.i].performanceIndicator;
          this.PerformaceIndicatorID = this.PerformanceLists1[this.i].id;
          var entity2 = {
            'SatffID': this.StaffID,
            'StaffType': this.StaffTypeID,
            'Supervisor': 1,
            'ResultAreaID': this.ResultAreaID,
            'PerformaceIndicatorID': this.PerformaceIndicatorID,
            'SelfScores': this.Score,
            'SelfComments': this.SelfComments,
            'performanceindicatorName': this.performanceindicatorName,
            'resultAreaName': this.resultAreaName

          }
          this.appraisalList.push(entity2);
          this.Score = 0;
          this.ResultAreaID = 0,
            this.Description = "",
            this.SelfComments = '',
            this.i++;
        })
      }
      else if (this.i < this.PerformanceLists1.length - 1) {
        this.PerformanceManagementService.GetKPI().subscribe(data => {
          debugger
          let temp: any = data;
          this.PerformanceLists1 = temp.filter((x: { kraID: number; }) => x.kraID == this.ResultAreaID);
          this.resultAreaName = this.PerformanceLists1[this.i].resultAreaName;
          this.performanceindicatorName = this.PerformanceLists1[this.i].performanceIndicator;
          this.Description = this.PerformanceLists1[this.i + 1].performanceIndicator;
          this.PerformaceIndicatorID = this.PerformanceLists1[this.i].id;
          var entity2 = {
            'SatffID': this.StaffID,
            'StaffType': this.StaffTypeID,
            'Supervisor': 1,
            'ResultAreaID': this.ResultAreaID,
            'PerformaceIndicatorID': this.PerformaceIndicatorID,
            'SelfScores': this.Score,
            'SelfComments': this.SelfComments,
            'performanceindicatorName': this.performanceindicatorName,
            'resultAreaName': this.resultAreaName
          }
          this.appraisalList.push(entity2);
          this.Score = 0;
          this.SelfComments = '';
          this.i++;

        })
      }
      else if (this.i == this.PerformanceLists1.length - 1) {
        this.PerformanceManagementService.GetKPI().subscribe(data => {
          debugger
          let temp: any = data;
          this.PerformanceLists1 = temp.filter((x: { kraID: number; }) => x.kraID == this.ResultAreaID);
          this.resultAreaName = this.PerformanceLists1[this.i].resultAreaName;
          this.performanceindicatorName = this.PerformanceLists1[this.i].performanceIndicator;
          this.PerformaceIndicatorID = this.PerformanceLists1[this.i].id;
          var entity2 = {
            'SatffID': this.StaffID,
            'StaffType': this.StaffTypeID,
            'Supervisor': 1,
            'ResultAreaID': this.ResultAreaID,
            'PerformaceIndicatorID': this.PerformaceIndicatorID,
            'SelfScores': this.Score,
            'SelfComments': this.SelfComments,
            'performanceindicatorName': this.performanceindicatorName,
            'resultAreaName': this.resultAreaName
          }
          this.appraisalList.push(entity2);
          this.Score = 0;
          this.SelfComments = '';
          this.i = 0;
        })
        this.k++;
        this.PerformanceManagementService.GetKRAByStaffID(this.StaffID).subscribe(data => {
          debugger
          this.ResultAreaList = data;
          this.ResultAreaID = this.ResultAreaList[this.k].resultAreaID
          this.PerformanceManagementService.GetKPI().subscribe(data => {
            debugger
            let temp: any = data
            this.PerformanceLists1 = temp.filter((x: { kraID: number; }) => x.kraID == this.ResultAreaID);
            this.performanceindicatorName = this.PerformanceLists1[this.i].performanceIndicator;
            this.PerformaceIndicatorID = this.PerformanceLists1[this.i].id;
            this.Description = this.PerformanceLists1[this.i].performanceIndicator;
          })
        })
      }
    }
  }
  prev() {
    debugger
    this.i--;
    let j = this.i;
    this.appraisalList.splice(j, 1);
    this.Description = this.PerformanceLists1[j].performanceIndicator;
    this.Score = 0;
    // this.PerformanceManagementService.GetResultAreaPerformanceindicator().subscribe(data => {
    //   debugger
    //   let temp: any = data
    //   this.PerformanceLists1 = temp.filter(x => x.resultAreaID == this.ResultAreaID);
    //   this.performanceindicatorName = this.PerformanceLists1[j].performanceindicator;
    //   this.PerformaceIndicatorID = this.PerformanceLists1[j].id;
    //   var entity2 = {
    //     'SatffID': this.StaffID,
    //     'StaffType': this.StaffType,
    //     'Supervisor': this.SupervisorID,
    //     'ResultAreaID': this.ResultAreaID,
    //     'PerformaceIndicatorID': this.PerformaceIndicatorID,
    //     'Score': this.Score
    //   }
    //   this.appraisalList.push(entity2);
    //   this.Score = 0;
    //   this.i--;
    // })
  }
  TableNextPrevHide = 0;
  public Preview() {
    this.tablecount = 1;
    this.TableNextPrevHide = 1;
  }
  GetScore(event: any) {
    this.Score = event.target.value;
  }
  q: any
  public insertdetails1() {
    debugger
    for (this.q = 0; this.q < this.appraisalList.length; this.q++) {
      var entity = {
        'SatffID': this.appraisalList[this.q].SatffID,
        'StaffType': this.appraisalList[this.q].StaffType,
        'Supervisor': this.appraisalList[this.q].Supervisor,
        'ResultAreaID': this.appraisalList[this.q].ResultAreaID,
        'PerformaceIndicatorID': this.appraisalList[this.q].PerformaceIndicatorID,
        'SelfScores': this.appraisalList[this.q].SelfScores,
        'SelfComments': this.appraisalList[this.q].SelfComments
      }
      this.PerformanceManagementService.InsertStaffScores(entity).subscribe(data => {
        debugger
        if (data != undefined && this.q == this.appraisalList.length) {
          Swal.fire("Appraisal Saved Successfully");
          this.router.navigate(['SelfRatingDash']);

        }
      })
    }
  }
  public delete(id: any) {

  }
}
