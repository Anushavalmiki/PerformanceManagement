import { Component, OnInit } from '@angular/core';
import { PerformanceManagementService } from 'src/app/performance-management.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  constructor(private PerformanceManagementService:PerformanceManagementService ) { }
 
  stafflist: any;
  term: any;
  p: any = 1;
  count1: any = 10;
  stafflistCopy: any;
  Departmentlist: any;
  RoleTypeList: any;
  RoleType: any;
  Department: any;
  count:any;
  search:any;
  dumpstafflist:any;
  roleid: any;

  StaffID:any;


  ngOnInit(): void {
    this.roleid = sessionStorage.getItem('roleid');
    this.StaffID = sessionStorage.getItem('EmaployedID');
    this.Department = "";
    this.RoleType="";
    this.PerformanceManagementService.GetMyDetails().subscribe(data => {
      debugger
      this.dumpstafflist=data;
      this.stafflist = data;
      this.stafflistCopy = this.stafflist;
     
      if(this.roleid!=3)
      {
        this.stafflist=this.dumpstafflist.filter((x: {department: any; supervisor:any})=>x.department==4&&x.supervisor==this.StaffID);
        console.log("stafflist",this.stafflist)
      
      }
      else{
        this.stafflist=this.dumpstafflist;
        console.log("stafflist",this.stafflist)
      
      }

   
      this.count = this.stafflist.length;
   
    });

    // this.filterByDepartment();

    this.PerformanceManagementService.GetDepartment().subscribe(data => {
      debugger
      this.Departmentlist = data;
    });

    this.PerformanceManagementService.GetRoleType().subscribe(data => {
      debugger
      this.RoleTypeList = data;
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
      // this.stafflist = data.filter(x=>x.roleType==this.RoleType);
   
      this.stafflist=this.dumpstafflist.filter((x: {department: any; })=>x.department==4);
      console.log("stafflist",this.stafflist)
      this.count = this.stafflist.length;
    });
 
  }

  // public filterByDepartment(){
  //   debugger
  //   this.PerformanceManagementService.GetMyDetails().subscribe(data => {
  //     debugger
  //     this.stafflist = data.filter(x=>x.department==this.Department);
  //     this.count = this.stafflist.length;
  //   });
 
  // }





  }


