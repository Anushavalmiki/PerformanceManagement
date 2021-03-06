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
  count1: any = 25;
  stafflistCopy: any;
  Departmentlist: any;
  RoleTypeList: any;
  RoleType: any;
  Department: any;
  count: any;
  attachment: any;
  description: any;

  ParamID: any;
  EmployeeKradash: any
  StaffType: any;
  StaffTypeID: any;
  StaffID: any;
  ResultAreaList: any;
  PerformanceLists1: any;
  showbtn: any;
  Name: any;
  role: any;
  departmentName: any;
  HrSubmittedDate: any;
  hrattachment: any;
  appraislid:any;
  ngOnInit(): void {
    this.Score = 0;
    this.showbtn = false;

    this.HighScore();
    this.route.params.subscribe(params => {
      debugger;
      this.ParamID = params['id'];
      if (params['id'] != undefined) {
        // this.StaffType = params['StaffID'];
        this.appraislid = params['StaffID'];
        this.StaffID = params['id'];
        this.StaffTypeID = this.StaffType;

        this.PerformanceManagementService.GetKRAByStaffID(this.StaffID).subscribe(data => {
          debugger
          this.ResultAreaList = data.filter((x: { managerSubmittedDate: any; employeeSubmittedDate: any;appraiselID: any; }) => x.managerSubmittedDate != null && x.employeeSubmittedDate != null  && x.appraiselID == this.appraislid);

          this.Name = this.ResultAreaList[0].name
          this.role = this.ResultAreaList[0].role
          this.departmentName = this.ResultAreaList[0].departmentName
          this.HrSubmittedDate = this.ResultAreaList[0].hrSubmittedDate
          this.managerattachment = this.ResultAreaList[0].mPhoto

          console.log("resultarea",this.ResultAreaList)

          this.ResultAreaList.forEach((element: { hrupdate: any; }) => {
            if (element.hrupdate != 1) {
              this.showbtn = false
            } else {
              this.showbtn = true
            }
          });
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
    if (this.Score == undefined || this.SelfComments == undefined ||this.Score==0||this.SelfComments==null) {
      Swal.fire("Please Enter the Mandatory Fields");
    }
    else {
      debugger
      var entity = {
        'SatffID': this.StaffID,
        'StaffType': this.StaffID,
        'Supervisor': this.id,
        'ResultAreaID': this.ResultAreaID,
        'PerformaceIndicatorID': this.kpiid,
        'SelfScores': this.Score,
        'SelfComments': this.SelfComments,
        'Attachment': this.attachment
      }
      this.PerformanceManagementService.InsertStaffScoresByHR(entity).subscribe(data => {
        debugger
        Swal.fire("Saved Successfully");
        // var entity1 = {
        //   'SatffID': this.StaffID,
        //   'StaffType': this.StaffID,
        //   // 'Supervisor': this.appraisalList[this.q].Supervisor,
        //   'ResultAreaID': this.ResultAreaID,
        //   'PerformaceIndicatorID': this.kpiid,
        //   'GroupHeadScores': this.Score,
        //   'GroupHeadComments': this.SelfComments,
        // }
        // this.PerformanceManagementService.UpdateCIOStaffScores(entity1).subscribe(data => {
        //   debugger

        // })
        this.Score = 0;
        this.SelfComments = '';
        this.attachment = '';
        const element1 = document.getElementById('close');
        this.files.length = 0;
        if (element1 !== null) {

          element1.click();

        }
        this.ngOnInit();

      })
    }

  }

  managerattachment: any;
  public GetKPIIDetails(details: any) {
    debugger
    this.PerformanceManagementService.GetEmployeeKraMap().subscribe(data => {
      debugger
      let temp: any = data.filter(x => x.id == details.id)
      this.Score = temp[0].hrrrating;
      this.SelfComments = temp[0].hrcomments;
      this.hrattachment = details.hPhoto;
      this.managerattachment = details.mPhoto;
      this.attachment=details.hrattachment

    })
    this.photoid = details.id;
    this.id = details.id;
  }

  files: File[] = [];
  attachmentsurl: any = []
  onSelect(event: any) {
    console.log(event);
    this.attachmentsurl.length = 0
    debugger
    this.files.push(...event.addedFiles);
    this.PerformanceManagementService.ProjectAttachments(this.files).subscribe(res => {
      debugger
      if (res != undefined) {
        this.attachment = res;
        // this.loader = false;
        alert('Attachment uploaded')
        this.attachmentsurl.push(res);


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



  public UpdateDetails() {
    debugger
    var entity = {
      'SatffID': this.StaffID,
      'StaffType': this.StaffID,
      'Supervisor': this.id,
      'ResultAreaID': this.ResultAreaID,
      'PerformaceIndicatorID': this.kpiid,
      'SelfScores': this.Score,
      'SelfComments': this.SelfComments,
      'Attachment': this.attachment
    }
    this.PerformanceManagementService.InsertStaffScoresByHR(entity).subscribe(data => {
      debugger
      Swal.fire("Updated Successfully");
      this.attachment = "";
      const element1 = document.getElementById('close');
      this.files.length = 0;
      if (element1 !== null) {

        element1.click();

      }
      this.ngOnInit();

    })
  }



  public SubmitHrAppraisal() {
    debugger
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want to Submit it.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Submit it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        debugger
        var entity = {
          'StaffID': this.StaffID,
        }
        this.PerformanceManagementService.SubmitHrAppraisal(entity).subscribe(data => {
          debugger
          Swal.fire("Submitted Appraisal Successfully");
          this.ngOnInit();
        })
      }
    })
  }
  photoid: any;
  show: any;
  getattachment(details: any) {


    debugger
    this.attachment = details.photo;
    this.managerattachment = details.mPhoto;


  }


  update() {
    debugger
    var entity = {
      'ID': this.photoid,
      // 'Attachment': this.attachmentsurl[0]
      'Attachment': this.attachment

    }
    this.PerformanceManagementService.UpdateHrSelfAttachment(entity).subscribe(data => {
      debugger
      Swal.fire("Updated Successfully");
      this.attachment = 0;
      this.attachment = "";

      this.PerformanceManagementService.GetKRAByStaffID(this.StaffID).subscribe(data => {
        debugger
        this.ResultAreaList = data.filter((x: { managerSubmittedDate: any; employeeSubmittedDate: any;appraiselID: any; }) => x.managerSubmittedDate != null && x.employeeSubmittedDate != null  && x.appraiselID == this.appraislid);


        console.log("Result area", this.ResultAreaList);

      })

    })

  }
  cancel() {
    location.href = "/Selfratingnew";
  }



  view(desc: any) {
    this.description = desc;
  }

}
