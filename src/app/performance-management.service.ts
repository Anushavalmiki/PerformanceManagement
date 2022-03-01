import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class PerformanceManagementService {

  public baseURL = "http://103.133.214.197/PerformanceManagement/";
  public host = "https://digioffice.amazeone.co/digiofficeapi";

  url: any;
  constructor(private http: HttpClient) {
    // console.log("environment", environment.hostUrl);
  }


  public InsertAppraisalCycle(data: any) {
    debugger;
    this.url = this.baseURL + 'Master/InsertAppraisalCycle';
    return this.http.post(this.url, data);
  }

  
  public SubmitManagerAppraisal(data: any) {
    debugger;
    this.url = this.baseURL + 'Master/UpdateManagerSubmitted';
    return this.http.post(this.url, data);
  }

  public SubmitHrAppraisal(data: any) {
    debugger;
    this.url = this.baseURL + 'Master/UpdateHrSubmitted';
    return this.http.post(this.url, data);
  }

  public SubmitEmployeeAppraisal(data: any) {
    debugger;
    this.url = this.baseURL + 'Master/UpdateEmployeeSubmitted';
    return this.http.post(this.url, data);
  }


  public GetFrequency() {
    return this.http.get<any[]>(
      this.baseURL + "/Master/GetFrequency"
    );
  }


  public GetAppraisalCycle() {
    return this.http.get<any[]>(
      this.baseURL + "/Master/GetAppraisalCycle"
    );
  }
  public GetDepartmentMaster() {
    return this.http.get<any[]>(
      this.baseURL + "/Master/GetDepartmentMaster"
    );
  }



  public DeleteAppraisalCycle(ID: any) {
    return this.http.get<any[]>(
      this.baseURL + "/Master/DeleteAppraisalCycle?ID=" + ID);
  }


  public UpdateAppraisalCycle(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdateAppraisalCycle";
    return this.http.post<any[]>(APIURL, json);
  }

  public GetKeyResultArea() {
    return this.http.get<any[]>(
      this.baseURL + "/Master/GetKeyResultArea"
    );
  }



  public InsertKeyResultArea(data: any) {
    debugger;
    this.url = this.baseURL + 'Master/InsertKeyResultArea';
    return this.http.post(this.url, data);
  }


  public GetKraMaster() {
    return this.http.get<any[]>(
      this.baseURL + "/Master/GetKraMaster"
    );
  }


  public UpdateKeyResultArea(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdateKeyResultArea";
    return this.http.post<any[]>(APIURL, json);
  }

  public DeleteKeyResultArea(ID: any) {
    return this.http.get<any[]>(
      this.baseURL + "/Master/DeleteKeyResultArea?ID=" + ID);
  }



  public GetKPI() {
    return this.http.get<any[]>(
      this.baseURL + "/Master/GetKPI"
    );
  }

  public GetMyDetails() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetMyDetails"
    );
  }


  public InsertKPI(data: any) {
    debugger;
    this.url = this.baseURL + 'Master/InsertKPI';
    return this.http.post(this.url, data);
  }



  public UpdateKPI(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdateKPI";
    return this.http.post<any[]>(APIURL, json);
  }


  public DeleteKPI(ID: any) {
    return this.http.get<any[]>(
      this.baseURL + "/Master/DeleteKPI?ID=" + ID);
  }

  public GetPerformanceIndicatorMaster() {
    return this.http.get<any[]>(
      this.baseURL + "/Master/GetPerformanceIndicatorMaster"
    );
  }



  public GetRoleType() {
    return this.http.get<any[]>(
      this.host + "/MasterDemo/GetRoleType?UserTypeID=" + 1
    );
  }



  public GetDepartment() {
    debugger
    let APIURL = this.host + "/Announcement/GetDepartmentMaster";
    return this.http.get<any[]>(APIURL);
  }

  ///prashnat serices for kramapping


  public GetEmployeeKraMap() {
    return this.http.get<any[]>(
      this.baseURL + "/Master/GetEmployeeKraMap"
    );
  }

  public GetConductappraisalStaffList() {
    return this.http.get<any[]>(
      this.baseURL + "/Master/GetConductappraisalStaffList"
    );
  }

  public InsertEmployeeKraMap(data: any) {
    debugger;
    this.url = this.baseURL + 'Master/InsertEmployeeKraMap';
    return this.http.post(this.url, data);
  }

  public GetKRAByStaffID(id: any) {
    debugger;
    return this.http.get<any>(this.baseURL + "/Master/GetKRAByStaffID?StaffID=" + id);
  }
  public GetHighScores() {
    return this.http.get<any[]>(
      this.baseURL + "/Master/GetHighScores"
    );
  }
  public InsertStaffScores(data: any) {
    debugger;
    this.url = this.baseURL + 'Master/InsertStaffScores';
    return this.http.post(this.url, data);
  }
  public UpdateGroupHeadStaffScores(data: any) {
    debugger;
    this.url = this.baseURL + 'Master/UpdateGroupHeadStaffScores';
    return this.http.post(this.url, data);
  }
  public GetStaffScores() {
    return this.http.get<any[]>(
      this.baseURL + "/Master/GetStaffScores"
    );
  }

  public UpdateCIOStaffScores(data: any) {
    debugger;
    this.url = this.baseURL + 'Master/UpdateCIOStaffScores';
    return this.http.post(this.url, data);
  }

  public GetStaffScoresByStaffandYear(Year: any, StaffID: any) {
    return this.http.get<any[]>(this.baseURL + '/Master/GetStaffScoresByStaffandYear?Year=' + Year + '&StaffID=' + StaffID);
  }
  public InsertStaffScoresByHR(data: any) {
    debugger;
    this.url = this.baseURL + 'Master/InsertStaffScoresByHR';
    return this.http.post(this.url, data);
  }
  public InsertStaffScoresByManager(data: any) {
    debugger;
    this.url = this.baseURL + 'Master/InsertStaffScoresByManager';
    return this.http.post(this.url, data);
  }

  public ProjectAttachments(files: any) {
    let formdata: FormData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formdata.append('file_upload', files[i], files[i].name);
    }
    this.url = this.baseURL + '/Master/ProjectAttachments';
    return this.http.post<any[]>(this.url, formdata);
  }
  public InsertNotification(data: any) {
    debugger;
    this.url = this.host + '/User/InsertNotification';
    return this.http.post(this.url, data);
  }
  public GetNotification(UserID: any) {
    return this.http.get<any[]>(
      this.host + "/User/GetNotification?UserID=" + UserID
    );
  }

}
