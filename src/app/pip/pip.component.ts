import { Component, OnInit } from '@angular/core';
import { PerformanceManagementService } from 'src/app/performance-management.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pip',
  templateUrl: './pip.component.html',
  styleUrls: ['./pip.component.css']
})
export class PipComponent implements OnInit {

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
  p: any = 1;
  count1: any = 10;
  department:any;
  role:any;
  rate:any;
  comments:any;
  remove:any;
  updaterate:any;
  separation:any;
  list:any;
  Score:any;

  ngOnInit(): void {
    this.StaffID = sessionStorage.getItem('EmaployedID')
    this.roleid = sessionStorage.getItem('roleid');
    // this.GetMyDetails();
    this.ConductappraisalStaffList();
    this.HighScore();
    this.employee = 0;
    this.dumpmanagerList = 0;

  }


 


  getEmployee(even: any) {
    this.employee = even.target.value;
    this.PerformanceManagementService.GetConductappraisalStaffListforpip().subscribe(
      res => {
        debugger;
        let temp: any = res
          this.StaffAppraisalList = temp.filter((x: { id: any; })=>x.id==this.employee);;
          this.role=this.StaffAppraisalList[0].role
          this.department=this.StaffAppraisalList[0].departmentName
          this.rate=this.StaffAppraisalList[0].finalrating
          this.StaffAppraisalList = temp
        
      }
    )
  }

  // public GetMyDetails() {
  //   debugger
  //   this.PerformanceManagementService.GetMyDetails().subscribe(
  //     data => {
  //       debugger
  //       this.managerList = data.filter(x=>x.supervisor==null)    
  //       const key = 'manager';
  //       const key1 = 'month'
  //       this.uniquelist = [...new Map(this.managerList.map((item: { [x: string]: any; }) =>

  //         [(item[key]), item])).values()]

  //     }
  //   )
  // }

  public ConductappraisalStaffList() {
    this.PerformanceManagementService.GetConductappraisalStaffListforpip().subscribe(
      res => {
        debugger;
        let temp: any = res
          this.StaffAppraisalList = temp;
  
         

          const key = 'employee';
          const key1 = 'month'
          this.uniquelist = [...new Map(this.StaffAppraisalList.map((item: { [x: string]: any; }) =>
  
            [(item[key]), item])).values()]
      }
    )
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

  public HighScore() {
    debugger
    this.PerformanceManagementService.GetHighScores().subscribe(data => {
      debugger
      this.list = data;
    })
  }
}










