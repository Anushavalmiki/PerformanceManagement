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

  updaterate:any;
  separation:any;
  list:any;
  Score:any;
  Type:any
  lastworkingdate:any;
  Notes:any;
  staffID:any;

  ngOnInit(): void {
    this.Type="Select Type"
    this.Score="0"
    this.StaffID = sessionStorage.getItem('EmaployedID')
    this.roleid = sessionStorage.getItem('roleid');
    // this.GetMyDetails();
    this.ConductappraisalStaffList();
    this.HighScore();
    this.employee = 0;
    this.dumpmanagerList = 0;

  }

  public ViewScores(event: any) {
    debugger;
    this.staffID = event.id;
    let StaffTypeID = event.type;

    // this.router.navigate(['/StaffScoreFullDetails', StaffID, StaffID]);

  }

  getEmployee(even: any) {
    this.employee = even.target.value;
    // this.PerformanceManagementService.GetConductappraisalStaffListforpip().subscribe(
    //   res => {
    //     debugger;
    //     let temp: any = res
    //       this.StaffAppraisalList = temp.filter((x: { id: any; })=>x.id==this.employee);;
    //       this.role=this.StaffAppraisalList[0].role
    //       this.department=this.StaffAppraisalList[0].departmentName
    //       this.rate=this.StaffAppraisalList[0].finalrating
    //       this.StaffAppraisalList = temp
        
    //   }
    // )
  }


  public ConductappraisalStaffList() {
    this.PerformanceManagementService.GetConductappraisalStaffListforpip().subscribe(
      res => {
        debugger;
        let temp: any = res
          this.StaffAppraisalList = temp.filter((x: { hrSubmittedDate: null; })=>x.hrSubmittedDate!=null);
          const key = 'employee';
          const key1 = 'month'
          this.uniquelist = [...new Map(this.StaffAppraisalList.map((item: { [x: string]: any; }) =>
  
            [(item[key]), item])).values()]
      }
    )
  }


  
  update() {
    debugger
    if(this.Score==undefined||this.Score==0){
      Swal.fire("Please enter the Rating");
    }
    else{
      var entity = {
        'StaffID': this.staffID,
        'cIOScores': this.Score
      }
      this.PerformanceManagementService.UpdateReAppraisalHRrating(entity).subscribe(data => {
        debugger
        Swal.fire("Updated Successfully");
        this.ngOnInit();
      })
    }
   
  }


 

  public HighScore() {
    debugger
    this.PerformanceManagementService.GetHighScores().subscribe(data => {
      debugger
      this.list = data.filter(x=>x.score>2);
    })
  }
 
  remove(){
    var eb = {
      'StaffID': this.staffID,
      'Notes': this.Notes,
      'lastworkingdate': this.lastworkingdate,
      'type': this.Type
    }
    this.PerformanceManagementService.InsertStaffExitFormality(eb).subscribe(data => {
      debugger
      Swal.fire("Successfully Moved to Exit Formality!!");
      this.staffID="",
      this.Notes="",
      this.lastworkingdate="",
      this.Type=""
      this.ngOnInit();
    })
  }
}










