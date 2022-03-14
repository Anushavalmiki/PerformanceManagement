import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { HeaderComponent } from './Pages/header/header.component';
import { SidebarComponent } from './Pages/sidebar/sidebar.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { AppraisalCycleComponent } from './Pages/appraisal-cycle/appraisal-cycle.component';
import { KeyResultAreaComponent } from './Pages/key-result-area/key-result-area.component';
import { KeyPerformanceIndicatorComponent } from './Pages/key-performance-indicator/key-performance-indicator.component';
import { MyAppraisalComponent } from './Pages/my-appraisal/my-appraisal.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AppraisalCycleformComponent } from './Pages/appraisal-cycleform/appraisal-cycleform.component';
import { KeyPerformanceIndicatorformComponent } from './Pages/key-performance-indicatorform/key-performance-indicatorform.component';
import { KeyResultAresFormComponent } from './Pages/key-result-ares-form/key-result-ares-form.component';
import { EmployeeDashboardComponent } from './Pages/employee-dashboard/employee-dashboard.component';
import { EmployeeFormComponent } from './Pages/employee-form/employee-form.component';
import { MyAppraisalFormComponent } from './Pages/my-appraisal-form/my-appraisal-form.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeeKraMappingComponent } from './Pages/employee-kra-mapping/employee-kra-mapping.component';
import { EmployeeKraMappingdashboardComponent } from './Pages/employee-kra-mappingdashboard/employee-kra-mappingdashboard.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SelfRatingPageComponent } from './Pages/self-rating-page/self-rating-page.component';
import { DatePipe } from '@angular/common';
import { ManagerratingdashComponent } from './Pages/managerratingdash/managerratingdash.component';
import { ManagerratingComponent } from './Pages/managerrating/managerrating.component';
import { HrRatingComponent } from './Pages/hr-rating/hr-rating.component';
import { HrDashComponent } from './Pages/hr-dash/hr-dash.component';
import { StaffScoreReportComponent } from './Pages/staff-score-report/staff-score-report.component';
import { StaffScoreFullDetailsComponent } from './Pages/staff-score-full-details/staff-score-full-details.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { SelfratingnewComponent } from './Pages/selfratingnew/selfratingnew.component';
import { ManagerAppraisalComponent } from './manager-appraisal/manager-appraisal.component';
import { HrratingnewComponent } from './Pages/hrratingnew/hrratingnew.component';
import { BellCurveFittingComponent } from './bell-curve-fitting/bell-curve-fitting.component';
import { AppraisalReportComponent } from './Pages/appraisal-report/appraisal-report.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { HRDashboardComponent } from './hrdashboard/hrdashboard.component';
import { EmployeeTileDashboardComponent } from './employee-tile-dashboard/employee-tile-dashboard.component';
import { LoaderComponent } from './loader/loader.component';
import { PipComponent } from './pip/pip.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AppraisalCycleComponent,
    KeyResultAreaComponent,
    KeyPerformanceIndicatorComponent,
    MyAppraisalComponent,
    DashboardComponent,
    AppraisalCycleformComponent,
    KeyPerformanceIndicatorformComponent,
    KeyResultAresFormComponent,
    EmployeeDashboardComponent,
    EmployeeFormComponent,
    MyAppraisalFormComponent,
    EmployeeKraMappingComponent,
    EmployeeKraMappingdashboardComponent,
    SelfRatingPageComponent,
    ManagerratingdashComponent,
    ManagerratingComponent,
    HrRatingComponent,
    HrDashComponent,
    StaffScoreReportComponent,
    StaffScoreFullDetailsComponent,
    SelfratingnewComponent,
    ManagerAppraisalComponent,
    HrratingnewComponent,
    BellCurveFittingComponent,
    AppraisalReportComponent,
    ManagerDashboardComponent,
    HRDashboardComponent,
    EmployeeTileDashboardComponent,
    LoaderComponent,
    PipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxDropzoneModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgMultiSelectDropDownModule,
    CKEditorModule,
    ReactiveFormsModule
    
  ],
  providers: [DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
