import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerformanceManagementService } from 'src/app/performance-management.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bell-curve-fitting',
  templateUrl: './bell-curve-fitting.component.html',
  styleUrls: ['./bell-curve-fitting.component.css']
})
export class BellCurveFittingComponent implements OnInit {



  constructor(private PerformanceManagementService: PerformanceManagementService, public router: Router) { }

  search: any;
  StaffTypelist: any;
  YearID: any;
  StaffID: any;
  UserID: any;
  stafflist: any;
  term: any;
  p: any = 1;
  count1: any = 10;
  roleTypeid: any;
  roleTypeList: any;
  manager: any;
  managerList: any;
  count: any;
  uniquelist: any;
  dumpmanagerList: any;
  roleid: any;
  list: any;
  Score: any;
  SelfComments: any;
  StaffAppraisalList: any;
  FilteredStaffAppraisalList: any;
  Stafflist: any
  StaffType: any;
  StaffTypeID: any;
  departmentid: any;
  departmentList: any;
  Apprisalcyclelist:any;
  AppraisalSubmitionDate:any;
  sDate:any;
  eDate:any;
  appraisalCycleName:any
  pending:any;
  ngOnInit() {
    this.pending=0;
    this.roleid = sessionStorage.getItem('roleid');
    this.GetRoleType();
    this. GetDepartment();
    this.HighScore();
    this.YearID = 2020;
    this.ratingvalue = 0;
    this.StaffTypeID = 0;
    this.StaffID = 0;
    this.Score = 0;
    this.appraisalCycleName=0;
    this.departmentid=0;
    this.GetMyDetails();
    this.manager = 0;
    this
    // this.StaffID = 0;
    this.UserID = localStorage.getItem('staffid');
    // this.PerformanceManagementService.GetStaffType(1).subscribe(data => {
    //   debugger
    //   this.StaffTypelist = data;
    // })

    this.PerformanceManagementService.GetAppraisalCycle().subscribe(data => {
      debugger
      this.Apprisalcyclelist = data;
    });

    this.ConductappraisalStaffList();
  }
  ratingvalue: any;
  public Getratingvalue(event: any) {
    debugger
    this.ratingvalue = event.target.value;

    if (this.ratingvalue == 0) {
      this.PerformanceManagementService.GetConductappraisalStaffList().subscribe(
        res => {
          debugger;
          let temp: any = res
          this.StaffAppraisalList = temp;
          this.FilteredStaffAppraisalList = this.StaffAppraisalList
          this.count = this.FilteredStaffAppraisalList.length;

        }
      )
    } else {
      this.PerformanceManagementService.GetConductappraisalStaffList().subscribe(
        res => {
          debugger;
          let temp: any = res
          this.StaffAppraisalList = temp;
          this.FilteredStaffAppraisalList = this.StaffAppraisalList.filter((x: { avgGroupHeadScores: any; avgCIOScores: any; }) => (Math.round((x.avgGroupHeadScores + x.avgCIOScores) / 2)) == this.ratingvalue)
          this.count = this.FilteredStaffAppraisalList.length;
        }
      )
    }
  }


  public ConductappraisalStaffList() {
    this.PerformanceManagementService.GetConductappraisalStaffList().subscribe(
      res => {
        debugger;
        let temp: any = res
        this.StaffAppraisalList = temp;
        this.FilteredStaffAppraisalList = this.StaffAppraisalList.filter((x: { cioScores: null; }) => x.cioScores != null)
        this.count = this.FilteredStaffAppraisalList.length;
        this.managerList = this.dumpmanagerList.filter((x: { manager: any; }) => x.manager == this.manager);
      }
    )
  }



  GetStaffTypeID(event: any) {
    this.StaffTypeID = event.target.value;
    if (this.StaffTypeID == 0) {
      this.FilteredStaffAppraisalList = this.StaffAppraisalList
    }
    else {
      // this.PerformanceManagementService.GetAllStaff().subscribe(data => {
      //   debugger
      //   let temp: any = data;
      //   this.Stafflist = temp.filter(x => x.staffTypeID == this.StaffTypeID);
      //   this.FilteredStaffAppraisalList = this.StaffAppraisalList.filter(x => x.scoreBit == 1 && x.type == this.StaffTypeID);
      // })
    }
  }


  public GetStaffID(event: any) {
    debugger;
    this.StaffID = event.target.value;
    if (this.StaffID == 0) {
      this.FilteredStaffAppraisalList = this.StaffAppraisalList;
    }
    else {
      this.FilteredStaffAppraisalList = this.StaffAppraisalList.filter((x: { scoreBit: number; type: any; id: any; }) => x.scoreBit == 1 && x.type == this.StaffTypeID && x.id == this.StaffID);
    }
  }

  public FilterByYear(event: any) {
    this.YearID = event.target.value;
  }


  update() {
    debugger
    var entity = {
      'staffID': this.StaffID,
      'bellcurveScore': this.Score
    }
    this.PerformanceManagementService.UpdateBellCurveFitting(entity).subscribe(data => {
      debugger
      Swal.fire("Updated Successfully");
      this.ngOnInit();
    })



  }


  public ViewScores(event: any) {
    debugger;
    this.StaffID = event.id;
    let StaffTypeID = event.type;

    // this.router.navigate(['/StaffScoreFullDetails', StaffID, StaffID]);

  }


  getManager(even: any) {
    this.manager = even.target.value;
  }

  public GetMyDetails() {
    debugger
    this.PerformanceManagementService.GetMyDetails().subscribe(
      data => {
        debugger
        this.managerList = data.filter(x => x.supervisor == null)
        const key = 'manager';
        const key1 = 'month'
        this.uniquelist = [...new Map(this.managerList.map((item: { [x: string]: any; }) =>

          [(item[key]), item])).values()]

      }
    )
  }


  getRoleID(even: any) {
    this.roleTypeid = even.target.value;
  }

  public GetRoleType() {
    this.PerformanceManagementService.GetRoleType().subscribe(
      data => {
        this.roleTypeList = data;
        console.log("type", this.roleTypeList);
        this.roleTypeid = 0;
      }
    )
  }


  public GetFilteredRoleType() {
    this.PerformanceManagementService.GetConductappraisalStaffList().subscribe(data => {
      debugger
      this.FilteredStaffAppraisalList = data.filter(x => x.type == this.roleTypeid)
    })
  }


  getdepartmentID(even: any) {
    this.departmentid = even.target.value;
  }

  public GetDepartment() {
    this.PerformanceManagementService.GetDepartmentMaster().subscribe(
      data => {
        this.departmentList = data;
        console.log("departmentName", this.departmentList);
        // this.roleTypeid = 0;
      }
    )
  }

  public GetFilteredDepartment() {
    this.PerformanceManagementService.GetConductappraisalStaffList().subscribe(data => {
      debugger
      this.FilteredStaffAppraisalList = data.filter(x => x.department == this.departmentid)
    })
  }



  // exporttoexcel() {
  //   debugger;
  //   const Export_to_excel_options = {
  //     fieldSeparator: ',',
  //     quoteStrings: '"',
  //     decimalSeparator: '.',
  //     showLabels: true,
  //     showTitle: true,
  //     title: 'Staff Score Report ',
  //     useTextFile: false,
  //     useBom: true,
  //     useKeysAsHeaders: true,
  //     filename: 'Staff Score Report'
  //   };
  //   const csvExporter = new ExportToCsv(Export_to_excel_options);
  //   csvExporter.generateCsv(this.StaffAppraisalList);
  // }


  public HighScore() {
    debugger
    this.PerformanceManagementService.GetHighScores().subscribe(data => {
      debugger
      this.list = data;
    })
  }


  public GetFilteredManager() {
    this.PerformanceManagementService.GetConductappraisalStaffList().subscribe(data => {
      debugger
      this.FilteredStaffAppraisalList = data.filter(x => x.managername == this.manager)
    })
  }

  public GetApprisalcycle(event: any) {
    debugger
    this.PerformanceManagementService.GetAppraisalCycle().subscribe(data => {
      debugger
      let temp: any = data.filter(x => x.id == event.target.value);
      this.AppraisalSubmitionDate = temp[0].employeeSubmissionDate;
      this.appraisalCycleName=temp[0].appraisalCycleName
      this.sDate = temp[0].cycleStartDate;
      this.eDate = temp[0].cycleEndDate;

    });
  }

  public GetFilteredAppraisalCycle() {
    this.PerformanceManagementService.GetConductappraisalStaffList().subscribe(data => {
      debugger
      this.FilteredStaffAppraisalList = data.filter(x => x.appraisalCycleName == this.appraisalCycleName)
    })
  }

}

