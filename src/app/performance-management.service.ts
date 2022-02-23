import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class PerformanceManagementService {

  public baseURL = "http://103.133.214.197/PerformanceManagement/";

  url:any;
  constructor(private http: HttpClient) {
    console.log("environment", environment.hostUrl);
   }


   public InsertAppraisalCycle(data: any) {
    debugger;
    this.url = this.baseURL + 'Master/InsertAppraisalCycle';
    return this.http.post(this.url, data);
  }


  public GetFrequency() {
    return this.http.get<any[]>(
      this.baseURL +"/Master/GetFrequency"
    );
  }


  public GetAppraisalCycle() {
    return this.http.get<any[]>(
      this.baseURL +"/Master/GetAppraisalCycle"
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
      this.baseURL +"/Master/GetKeyResultArea"
    );
  }



  public InsertKeyResultArea(data: any) {
    debugger;
    this.url = this.baseURL + 'Master/InsertKeyResultArea';
    return this.http.post(this.url, data);
  }


  public GetKraMaster() {
    return this.http.get<any[]>(
      this.baseURL +"/Master/GetKraMaster"
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
      this.baseURL +"/Master/GetKPI"
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




}
