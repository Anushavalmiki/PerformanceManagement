import { Component, OnInit } from '@angular/core';
import { PerformanceManagementService } from 'src/app/performance-management.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-appraisal-report',
  templateUrl: './appraisal-report.component.html',
  styleUrls: ['./appraisal-report.component.css']
})
export class AppraisalReportComponent implements OnInit {

  constructor(private PerformanceManagementService:PerformanceManagementService ) { }
   count:any;
   roleTypeList:any;
   roleTypeid:any;
   manager:any;
   managerList:any;
   StaffAppraisalList:any;
   FilteredStaffAppraisalList:any;
   search:any;

  ngOnInit(): void {
    this.GetRoleType();
    this.GetMyDetails();
    this.ConductappraisalStaffList();
    this.managerList=0;
      
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

  
    fileName = 'Adjustment Report.xlsx';
exportexcel(): void {
  /* table id is passed over here */
  let element = document.getElementById('download');
  const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
  /* generate workbook and add the worksheet */
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  /* save to file */
  XLSX.writeFile(wb, this.fileName);
}
  




}
