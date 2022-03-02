import { Component, OnInit } from '@angular/core';
import { PerformanceManagementService } from 'src/app/performance-management.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-kra-mappingdashboard',
  templateUrl: './employee-kra-mappingdashboard.component.html',
  styleUrls: ['./employee-kra-mappingdashboard.component.css']
})
export class EmployeeKraMappingdashboardComponent implements OnInit {

  constructor(private PerformanceManagementService: PerformanceManagementService) { }

  kpiid: any;
  ID: any;
  stafflist: any;
  term: any;
  p: any = 1;
  count1: any = 10;
  stafflistCopy: any;
  Departmentlist: any;
  RoleTypeList: any;
  RoleType: any;
  Department: any;
  count: any;
  kratypelist: any;
  kraid: any;
  indicatorlist: any;
  dummindicatorlist: any;


  EmployeeKradash: any

  ngOnInit(): void {
    this.GetKPI();


    this.GetKeyResultArea();

    this.Department = "";
    this.RoleType = "";
    this.PerformanceManagementService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data;
      this.stafflistCopy = this.stafflist

    });

    this.PerformanceManagementService.GetDepartment().subscribe(data => {
      debugger
      this.Departmentlist = data;
    });

    this.PerformanceManagementService.GetConductappraisalStaffList().subscribe(data => {
      debugger
      this.EmployeeKradash = data;
      this.count = this.EmployeeKradash.length;
    });
  }

  getkpi(event: any) {
    this.indicatorlist = event.target.value;
  }



  public GetKPI() {
    debugger
    this.PerformanceManagementService.GetKPI().subscribe(
      data => {
        this.indicatorlist = data;
        this.dummindicatorlist = data;
        this.count = this.indicatorlist.length;
        console.log("kpilist", this.indicatorlist);
      }
    )
  }




  public getRoleType(event: any) {
    debugger
    this.RoleType = event.target.value;
  }

  public FilterRoleType() {
    debugger
    this.PerformanceManagementService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data.filter(x => x.roleType == this.RoleType);
      this.count = this.stafflist.length;
    });

  }

  public filterByDepartment() {
    debugger
    this.PerformanceManagementService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data.filter(x => x.department == this.Department);
      this.count = this.stafflist.length;
    });

  }
  Staffkra: any;
  public GetStaffKraDetails(details: any) {
    debugger
    this.PerformanceManagementService.GetEmployeeKraMap().subscribe(data => {
      debugger
      this.Staffkra = data.filter(x => x.kpiName != null && x.staffName == details.staffid);
      // .filter(x => x.staffName == details.staffid && x.kpiName != null);
    });

  }

  public GetKeyResultArea() {
    this.PerformanceManagementService.GetKeyResultArea().subscribe(
      data => {
        this.kratypelist = data;
        console.log("kratype", this.kratypelist);
      }
    )
  }


  getkraid(even: any) {
    debugger
    this.kraid = even.target.value;
    debugger
    if (even.target.value != 0) {
      this.indicatorlist = this.dummindicatorlist.filter((x: { kraName: any; }) => x.kraName == this.kraid);
      this.count = this.indicatorlist.length;
    }
    else {
      this.GetKPI();
    }
  }

  edit(details: any) {
    debugger
    this.kraid = details.kraid;
    this.kpiid = details.kpiid;
    this.ID = details.id;
    this.GetKPI();
    this.GetKeyResultArea();
  }


  update() {
    debugger
    var entity = {
      "ID": this.ID,
      "kraid": this.kraid,
      "kpiid": this.kpiid
    }
    this.PerformanceManagementService.Updatekranew(entity).subscribe(
      data => {
      }
    )
    Swal.fire("Updated Successfully");
  }
}







