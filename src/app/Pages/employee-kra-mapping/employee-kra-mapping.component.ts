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

  dropdownList2: any = [];
  selectedItems3: any = [];

  dropdownSettings2: any = {};
  Apprisalcyclelist: any;
  ngOnInit(): void {
    this.RoleID = "0";
    this.Apprisalcycle = "0"


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

    this.dropdownSettings2 = {
      singleSelection: false,
      idField: 'id',
      textField: 'kpiName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true
    };
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,

    };
    this.dropdownSettings1 = {
      singleSelection: true,
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
  onItemSelect2(item1: any) {
    debugger
   // this.selectedItems3.push(item1);
    console.log("selecteditems", this.selectedItems3)


  }
  onItemSelect1(item: any) {
    debugger;
    this.selectedItems2.push(item);
    this.PerformanceManagementService.GetKPI().subscribe(data => {
      debugger
      this.dropdownList2 = data.filter(x => x.kraID == item.id);


    });
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
  tablecount: any;
  public InsertDetails() {
    debugger
    for (let i = 0; i < this.keyresultArray.length; i++) {

      if (this.keyresultArray.length == 0) {
        Swal.fire('Please Select Goals For Staff')
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
          'KraID': this.keyresultArray[i].kraid,
          'kpiid': this.keyresultArray[i].kpiid
        }
        this.PerformanceManagementService.InsertEmployeeKraMap(Entity).subscribe(
          data => {

            if (data != undefined) {

            }

          }, error => {
          }
        )
      }
    }
    this.InsertNotification();
    Swal.fire('Goal Setting Done Successfully.');
    location.href = "#/EmployeeKraMappingdashboard";

  }


  public InsertNotification() {
    debugger

    var entity = {
      'Date': new Date(),
      'Event': 'Apprisal Request',
      'FromUser': 'Admin',
      'ToUser': sessionStorage.getItem('EmaployedID'),
      'Message': 'Your Manager Assigned a New Goal Setting to you!!',
      'Photo': 'Null',
      'Building': 'Dynamics 1',
      'UserID': this.EmployeeId,
      'NotificationTypeID': 17,
      'VendorID': 0


    }
    this.PerformanceManagementService.InsertNotification(entity).subscribe(data => {
      if (data != 0) {


      }

    })
  }
  public keyresultArray: any = [];
  public SaveDetails() {
    debugger
    this.tablecount = 1;
    for (let i = 0; i < this.selectedItems3.length; i++) {
      var json = {
        "kraid": this.selectedItems2[0].id,
        "kpiid": this.selectedItems3[i].id,
        "kraname": this.selectedItems2[0].kraName,
        "kpiname": this.selectedItems3[i].kpiName,
      };
      debugger
      this.keyresultArray.push(json)
    }
    this.selectedItems1 = [];
    this.selectedItems2 = [];
    this.selectedItems3 = [];
  }

}
