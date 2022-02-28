import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerformanceManagementService } from 'src/app/performance-management.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manager-appraisal',
  templateUrl: './manager-appraisal.component.html',
  styleUrls: ['./manager-appraisal.component.css']
})
export class ManagerAppraisalComponent implements OnInit {


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
    this.PerformanceManagementService.InsertStaffScoresByManager(entity).subscribe(data => {
      debugger
      Swal.fire("Saved Successfully");
      var entity1 = {
        'SatffID': this.StaffID,
        'StaffType': this.StaffID,
        // 'Supervisor': this.appraisalList[this.q].Supervisor,
        'ResultAreaID': this.ResultAreaID,
        'PerformaceIndicatorID': this.kpiid,
        'GroupHeadScores': this.Score,
        'GroupHeadComments': this.SelfComments,
      }
      this.PerformanceManagementService.UpdateGroupHeadStaffScores(entity1).subscribe(data => {
        debugger

      })
      this.Score = 0;
      this.SelfComments = '';
      this.files.length = 0;
      const element1 = document.getElementById('close');

      if (element1 !== null) {

        element1.click();

      }
      this.ngOnInit();

    })

  }

  public GetKPIIDetails(details: any) {
    debugger
    this.PerformanceManagementService.GetEmployeeKraMap().subscribe(data => {
      debugger
      let temp: any = data.filter(x => x.id == details.id)
      this.Score = temp[0].managerrating;
      this.SelfComments = temp[0].managercomments;

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


      }
      debugger
    })

  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  empcomments: any;
  public GEtemployeecomments(detials: any) {
    this.empcomments = detials.empcomments
  }


}

