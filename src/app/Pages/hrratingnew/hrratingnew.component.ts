import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerformanceManagementService } from 'src/app/performance-management.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hrratingnew',
  templateUrl: './hrratingnew.component.html',
  styleUrls: ['./hrratingnew.component.css']
})
export class HrratingnewComponent implements OnInit {

  constructor(private PerformanceManagementService: PerformanceManagementService, private router: Router, private route: ActivatedRoute, private datepipe: DatePipe) { }

  stafflist: any;
  term: any;
  p: any = 1;
  count1: any = 5;
  stafflistCopy: any;
  Departmentlist: any;
  RoleTypeList: any;
  RoleType: any;
  Department: any;
  count: any;


  ParamID: any;
  EmployeeKradash: any
  StaffType: any;
  StaffTypeID: any;
  StaffID: any;
  ResultAreaList: any;
  PerformanceLists1: any;
  ngOnInit(): void {
    this.Score = 0;
    this.HighScore();
    this.route.params.subscribe(params => {
      debugger;
      this.ParamID = params['id'];
      if (params['id'] != undefined) {
        this.StaffType = params['StaffID'];
        this.StaffID = params['id'];
        this.StaffTypeID = this.StaffType;

        this.PerformanceManagementService.GetKRAByStaffID(this.StaffID).subscribe(data => {
          debugger
          this.ResultAreaList = data;

        })
        // this.GetStaffAppraisalByID(this.ParamID);

      }
    }
    );
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
      this.Staffkra = data.filter(x => x.staffName == details.staffid);
    });

  }

  list: any;
  SelfComments: any;
  public HighScore() {
    debugger
    this.PerformanceManagementService.GetHighScores().subscribe(data => {
      debugger
      this.list = data;
    })
  }
  kpiid: any;
  Score: any;
  ResultAreaID: any;
  id: any;
  public GetKPIID(details: any) {
    this.id = details.id;
    this.kpiid = details.kpiid;
    this.ResultAreaID = details.resultAreaID;
    this.Score = 0;
    this.SelfComments = '';

  }

  public SaveDetails() {
    debugger
    var entity = {
      'SatffID': this.StaffID,
      'StaffType': this.StaffID,
      'Supervisor': this.id,
      'ResultAreaID': this.ResultAreaID,
      'PerformaceIndicatorID': this.kpiid,
      'SelfScores': this.Score,
      'SelfComments': this.SelfComments,
      'Attachment': this.attachmentsurl[0]
    }
    this.PerformanceManagementService.InsertStaffScores(entity).subscribe(data => {
      debugger
      Swal.fire("Saved Successfully");
      this.Score = 0;
      this.SelfComments = '';
      const element1 = document.getElementById('close');

      if (element1 !== null) {

        element1.click();

      }
      this.ngOnInit();

    })
  }

  public GetKPIIDetails(details: any) {
    debugger
    this.PerformanceManagementService.GetStaffScores().subscribe(data => {
      debugger
      let temp: any = data.filter((x: { SatffID: any; resultAreaID: any; performaceIndicatorID: any }) => x.SatffID = this.StaffID && x.resultAreaID == details.resultAreaID && x.performaceIndicatorID == details.kpiid);
      this.Score = temp[0].selfScores;
      this.SelfComments = temp[0].selfComments;

    })
  }

  files: File[] = [];
  attachmentsurl: any = []
  onSelect(event: any) {
    console.log(event);
    debugger
    this.files.push(...event.addedFiles);
    this.PerformanceManagementService.ProjectAttachments(this.files).subscribe(res => {
      debugger
      if (res != undefined) {
        this.attachmentsurl.push(res);
        this.files.length = 0;

      }
      debugger
    })

  }
  empcommnts: any;
  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  public GetEmpComments(detials: any) {
    this.empcommnts = detials.empcomments
  }
  managercomments: any;
  public GEtmanagercomments(detials: any) {
    this.managercomments = detials.managercomments
  }



}

