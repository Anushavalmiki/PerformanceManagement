import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerformanceManagementService } from 'src/app/performance-management.service';

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
    ngOnInit() {
      this.GetRoleType();
      this.YearID = 2020;
      this.ratingvalue = 0;
      this.StaffTypeID = 0;
      this.StaffID = 0;
      this.GetMyDetails();
      this.manager = 0;
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
      // debugger;
      // let StaffID = event.id;
      // let StaffTypeID = event.type;
  
      // this.router.navigate(['/StaffScoreFullDetails', StaffID, StaffID]);
  
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
      this.PerformanceManagementService.GetMyDetails().subscribe(
        data => {
          this.managerList = data;
        }
      )
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
  