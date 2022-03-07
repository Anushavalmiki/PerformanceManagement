import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerformanceManagementService } from 'src/app/performance-management.service';

@Component({
  selector: 'app-staff-score-report',
  templateUrl: './staff-score-report.component.html',
  styleUrls: ['./staff-score-report.component.css']
})
export class StaffScoreReportComponent implements OnInit {

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
  uniquelist:any;
  dumpmanagerList:any;

  
  ngOnInit() {
    this.GetRoleType();
    this.YearID = 2020;
    this.ratingvalue = 0;
    this.StaffTypeID = 0;
    this.StaffID = 0;
    this.GetMyDetails();
    this.manager = 0;
    this.dumpmanagerList=0;
    // this.StaffID = 0;
    this.UserID = localStorage.getItem('staffid');
    // this.PerformanceManagementService.GetStaffType(1).subscribe(data => {
    //   debugger
    //   this.StaffTypelist = data;
    // })

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
          this.FilteredStaffAppraisalList = this.StaffAppraisalList.filter((x: { avgGroupHeadScores: any; avgCIOScores: any; }) => ((x.avgGroupHeadScores + x.avgCIOScores) / 2) == this.ratingvalue)
          this.count = this.FilteredStaffAppraisalList.length;
          
           

        }
      )
    }
  }

  StaffAppraisalList: any;
  FilteredStaffAppraisalList: any;
  public ConductappraisalStaffList() {
    this.PerformanceManagementService.GetConductappraisalStaffList().subscribe(
      res => {
        debugger;
        let temp: any = res
        this.StaffAppraisalList = temp;
        this.FilteredStaffAppraisalList = this.StaffAppraisalList.filter((x: { cioScores: null; }) => x.cioScores != null)
        this.count = this.FilteredStaffAppraisalList.length;
        this.managerList = this.dumpmanagerList.filter((x: { manager: any; })=>x.manager==this.manager);
      }
    )
  }


  Stafflist: any
  StaffType: any;
  StaffTypeID: any;
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





  public ViewScores(event: any) {
    debugger;
    let StaffID = event.id;
    let StaffTypeID = event.type;

    this.router.navigate(['/StaffScoreFullDetails', StaffID, StaffID]);

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
    
  getManager(even: any) {
    this.manager = even.target.value;
  }

  public GetMyDetails() {
    debugger
    this.PerformanceManagementService.GetMyDetails().subscribe(
      data => {
        debugger
        this.managerList = data.filter(x=>x.supervisor==null)     // 10422 HR is taken as manager for all managers 
         const key = 'manager';
         const key1 = 'month'
         this.uniquelist = [...new Map(this.managerList.map((item: { [x: string]: any; }) =>
 
           [(item[key]), item])).values()]
      
      }
    )
  }

  public GetFilteredManager(){
    this.PerformanceManagementService.GetConductappraisalStaffList().subscribe(data => {
      debugger
      this.StaffAppraisalList = data.filter(x=>x.managername==this.manager )
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


}
