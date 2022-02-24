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
    MyAppraisalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxDropzoneModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
