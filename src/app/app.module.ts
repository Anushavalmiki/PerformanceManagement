import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { CKEditorModule } from 'ckeditor4-angular';

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
    HrDashComponent
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
    
  ],
  providers: [DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
