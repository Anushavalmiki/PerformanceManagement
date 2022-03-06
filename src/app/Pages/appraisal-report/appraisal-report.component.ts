import { Component, OnInit } from '@angular/core';
import { PerformanceManagementService } from 'src/app/performance-management.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-appraisal-report',
  templateUrl: './appraisal-report.component.html',
  styleUrls: ['./appraisal-report.component.css']
})
export class AppraisalReportComponent implements OnInit {

  constructor(private PerformanceManagementService: PerformanceManagementService) { }
  count: any;
  roleTypeList: any;
  roleTypeid: any;
  manager: any;
  managerList: any;
  StaffAppraisalList: any;
  FilteredStaffAppraisalList: any;
  search: any;
  dumpmanagerList: any;
  uniquelist: any;
  StaffID: any;
  roleid: any;
  employee: any;
  rolelist:any;
  rolelistCopy:any;
  ngOnInit(): void {
    this.StaffID = sessionStorage.getItem('EmaployedID')
    this.roleid = sessionStorage.getItem('roleid');
    this.GetRoleType();
    this.GetMyDetails();
    this.ConductappraisalStaffList();
    this.manager = 0;
    this.dumpmanagerList = 0;

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
        this.managerList = data.filter(x=>x.supervisor==10422)     // 10422 HR is taken as manager for all managers 
        const key = 'manager';
        const key1 = 'month'
        this.uniquelist = [...new Map(this.managerList.map((item: { [x: string]: any; }) =>

          [(item[key]), item])).values()]

      }
    )
  }

  public ConductappraisalStaffList() {
    this.PerformanceManagementService.GetConductappraisalStaffList().subscribe(
      res => {
        debugger;
        let temp: any = res
        if(this.roleid==3)
        {
          this.StaffAppraisalList = temp; 
        

        }
        else if(this.roleid==4)
        {
          this.StaffAppraisalList = temp;
          this.dumpmanagerList= this.StaffAppraisalList
           this.StaffAppraisalList = this.dumpmanagerList.filter((x: { cioScores: null;approver1:any }) => x.cioScores != null && x.approver1==this.StaffID)
        }
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

  public GetFilteredRoleType(){
    this.PerformanceManagementService.GetConductappraisalStaffList().subscribe(data => {
      debugger
      this.StaffAppraisalList = data.filter(x=>x.type==this.roleTypeid )
    })
  }


  public GetFilteredManager(){
    this.PerformanceManagementService.GetConductappraisalStaffList().subscribe(data => {
      debugger
      this.StaffAppraisalList = data.filter(x=>x.managername==this.manager )
    })
  }




}





function x(x: any, manager: any): any {
  throw new Error('Function not implemented.');
}

