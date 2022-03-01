import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerformanceManagementService } from 'src/app/performance-management.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-selfratingnew',
  templateUrl: './selfratingnew.component.html',
  styleUrls: ['./selfratingnew.component.css']
})
export class SelfratingnewComponent implements OnInit {

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
  Attachmentlist: any;
  photoid: any;
  ParamID: any;
  EmployeeKradash: any
  StaffType: any;
  StaffTypeID: any;
  StaffID: any;
  ResultAreaList: any;
  PerformanceLists1: any;
  showbtn: any;
  ngOnInit(): void {
    this.Score = 0;
    this.showbtn = false;
    this.HighScore();
    this.route.params.subscribe(params => {
      debugger;
      this.ParamID = params['id'];
      if (params['id'] != undefined) {
        debugger
        this.StaffType = params['StaffID'];
        this.StaffID = params['id'];
        this.StaffTypeID = this.StaffType;

        this.PerformanceManagementService.GetKRAByStaffID(this.StaffID).subscribe(data => {
          debugger
          this.ResultAreaList = data;

          this.ResultAreaList.forEach((element: { empupdate: any; }) => {
            if (element.empupdate != 1) {
              this.showbtn = false
            } else {
              this.showbtn = true
            }
          });

          console.log("Result area", this.ResultAreaList);

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
      this.Score = temp[0].emprating;
      this.SelfComments = temp[0].empcomments;

    })
  }

  files: File[] = [];
  attachmentsurl: any = []
  onSelect(event: any) {
    console.log(event);
    debugger
    this.files.push(...event.addedFiles);
    this.attachmentsurl.length = 0;
    this.PerformanceManagementService.ProjectAttachments(this.files).subscribe(res => {
      debugger
      if (res != undefined) {
        this.attachmentsurl.push(res);
        //  this.files.length = 0;

      }
      debugger;
    })

  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }


  public SubmitEmployeeAppraisal() {
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
        this.PerformanceManagementService.SubmitEmployeeAppraisal(entity).subscribe(data => {
          debugger
          Swal.fire("Submitted Appraisal Successfully");
          this.ngOnInit();
        })
      }
    })
  }

  // showAttachments(photo: any) {
  //   debugger
  //   this.PerformanceManagementService.GetKRAByStaffID(this.StaffID).subscribe(data => {
  //     debugger
  //     this.Attachmentlist = photo;
  //   })
  // }


  getattachment(details: any) {
    debugger
    this.attachment = details.photo;
    this.photoid = details.id;
    this.attachmentsurl[0] = details.selfattachment
  }



  update() {
    debugger
    var entity = {
      'ID': this.photoid,
      'Attachment': this.attachmentsurl[0]
    }
    this.PerformanceManagementService.UpdateStaffScores(entity).subscribe(data => {
      debugger
      Swal.fire("Updated Successfully");
      this.attachmentsurl = 0;
      this.files.length = 0;
      this.PerformanceManagementService.GetKRAByStaffID(this.StaffID).subscribe(data => {
        debugger
        this.ResultAreaList = data;

        console.log("Result area", this.ResultAreaList);

      })

    })

  }
  cancel() {
    location.href = "/Selfratingnew";
  }


}




