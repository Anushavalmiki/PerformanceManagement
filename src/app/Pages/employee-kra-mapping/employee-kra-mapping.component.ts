import { Component, OnInit } from '@angular/core';
import { PerformanceManagementService } from 'src/app/performance-management.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-employee-kra-mapping',
  templateUrl: './employee-kra-mapping.component.html',
  styleUrls: ['./employee-kra-mapping.component.css']
})
export class EmployeeKraMappingComponent implements OnInit {

  constructor(private PerformanceManagementService: PerformanceManagementService, private ActivatedRoute: ActivatedRoute) { }

  Departmentlist: any;
  RoleTypeList: any;
  RoleID: any;
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  dropdownList1: any = [];
  selectedItems1: any = [];
  selectedItems2: any = [];
  dropdownSettings1: any = {};
  Apprisalcyclelist: any;
  ngOnInit(): void {


    this.PerformanceManagementService.GetDepartmentMaster().subscribe(data => {
      debugger
      this.Departmentlist = data;
    });
    this.PerformanceManagementService.GetAppraisalCycle().subscribe(data => {
      debugger
      this.Apprisalcyclelist = data;
    });
    this.PerformanceManagementService.GetRoleType().subscribe(data => {
      debugger
      this.RoleTypeList = data;
    });
    this.PerformanceManagementService.GetMyDetails().subscribe(data => {
      debugger
      this.dropdownList = data;
    });
    this.PerformanceManagementService.GetKeyResultArea().subscribe(data => {
      debugger
      this.dropdownList1 = data;
    });

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,

    };
    this.dropdownSettings1 = {
      singleSelection: false,
      idField: 'id',
      textField: 'kraName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true
    };
  }
  EmployeeId: any;
  onItemSelect(item: any) {
    debugger
    console.log(item);
    this.EmployeeId = item.id;

    this.PerformanceManagementService.GetMyDetails().subscribe(data => {
      debugger
      let temp: any = data.filter(x => x.id == this.EmployeeId);
      this.Approver1 = temp[0].supervisor;
      this.Approver2 = 10422;
    });

  }
  onItemSelect1(item: any) {
    debugger;
    this.selectedItems2.push(item)
  }
  onItemDeSelect1(item: any) {
    debugger;
    var index = this.selectedItems2.findIndex((x: { id: any; }) => x.id == item.id)
    this.selectedItems2.splice(index, 1);

  }
  Apprisalcycle: any;

  public GetApprisalcycle(event: any) {
    debugger
    this.PerformanceManagementService.GetAppraisalCycle().subscribe(data => {
      debugger
      let temp: any = data.filter(x => x.id == event.target.value);
      this.AppraisalSubmitionDate = temp[0].employeeSubmissionDate;
      this.sDate = temp[0].cycleStartDate;
      this.eDate = temp[0].cycleEndDate;

    });
  }
  public Cancel() {
    debugger
  }
  Approver1: any;
  Approver2: any;
  AppraisalSubmitionDate: any;
  sDate: any;
  eDate: any;
  public InsertDetails() {
    debugger
    for (let i = 0; i < this.selectedItems2.length; i++) {

      if (this.selectedItems1.length == 0) {
        Swal.fire('Please Select Kra For Staff')
      }
      else {
        var Entity = {
          'StaffTypeID': 1,
          'StaffName': this.EmployeeId,
          'Approver1': this.Approver1,
          'Approver2': this.Approver2,
          // 'Approver3': this.Approver3,
          'AppraisalSubmitionDate': this.AppraisalSubmitionDate,
          'CycleStartDate': this.sDate,
          'CycleEndDate': this.eDate,
          'kraid': this.selectedItems2[i].id
        }
        this.PerformanceManagementService.InsertEmployeeKraMap(Entity).subscribe(
          data => {

            if (data != undefined) {
              Swal.fire('Kra Added Successfully.');
            }
            location.href = "#/EmployeeKraMappingdashboard";
          }, error => {
          }
        )
      }
    }

  }

}
