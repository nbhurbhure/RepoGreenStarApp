import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentDatasComponent } from '../studentDatas/studentDatas.component';
import { StudentDataComponent } from '../studentDatas/studentData/studentData.component';
import { StudentDataListComponent } from '../studentDatas/studentData-list/studentData-list.component';
import { StudentsComponent } from '../students/students.component';
import { StudentComponent } from '../students/student/student.component';
import { StudentListComponent } from '../students/student-list/student-list.component';
import { OutreachsComponent } from '../outreachs/outreachs.component';
import { OutreachComponent } from '../outreachs/outreach/outreach.component';
import { OutreachListComponent } from '../outreachs/outreach-list/outreach-list.component';
import { VrolesComponent } from '../vroles/vroles.component';
import { VroleComponent } from '../vroles/vrole/vrole.component';
import { VroleListComponent } from '../vroles/vrole-list/vrole-list.component';
import { ScreensComponent } from '../screens/screens.component';
import { ScreenComponent } from '../screens/screen/screen.component';
import { ScreenListComponent } from '../screens/screen-list/screen-list.component';
import { HolidayTypesComponent } from '../holidayTypes/holidayTypes.component';
import { HolidayTypeComponent } from '../holidayTypes/holidayType/holidayType.component';
import { HolidayTypeListComponent } from '../holidayTypes/holidayType-list/holidayType-list.component';
import { ColorsComponent } from '../colors/colors.component';
import { ColorComponent } from '../colors/color/color.component';
import { ColorListComponent } from '../colors/color-list/color-list.component';
import { CitysComponent } from '../citys/citys.component';
import { CityComponent } from '../citys/city/city.component';
import { CityListComponent } from '../citys/city-list/city-list.component';
import { SchoolsComponent } from '../schools/schools.component';
import { SchoolComponent } from '../schools/school/school.component';
import { SchoolListComponent } from '../schools/school-list/school-list.component';
import { WeekInfosComponent } from '../weekInfos/weekInfos.component';
import { WeekInfoComponent } from '../weekInfos/weekInfo/weekInfo.component';
import { WeekInfoListComponent } from '../weekInfos/weekInfo-list/weekInfo-list.component';
import { TeachersComponent } from '../teachers/teachers.component';
import { TeacherComponent } from '../teachers/teacher/teacher.component';
import { TeacherListComponent } from '../teachers/teacher-list/teacher-list.component';
import { ParametersComponent } from '../parameters/parameters.component';
import { ParameterComponent } from '../parameters/parameter/parameter.component';
import { ParameterListComponent } from '../parameters/parameter-list/parameter-list.component';
import { StandardsComponent } from '../standards/standards.component';
import { StandardComponent } from '../standards/standard/standard.component';
import { StandardListComponent } from '../standards/standard-list/standard-list.component';
import { SectionsComponent } from '../sections/sections.component';
import { SectionComponent } from '../sections/section/section.component';
import { SectionListComponent } from '../sections/section-list/section-list.component';
import { TeamsComponent } from '../teams/teams.component';
import { TeamComponent } from '../teams/team/team.component';
import { TeamListComponent } from '../teams/team-list/team-list.component';
import { HolidaysComponent } from '../holidays/holidays.component';
import { HolidayComponent } from '../holidays/holiday/holiday.component';
import { HolidayListComponent } from '../holidays/holiday-list/holiday-list.component';
import { VolunteersComponent } from '../volunteers/volunteers.component';
import { VolunteerComponent } from '../volunteers/volunteer/volunteer.component';
import { VolunteerListComponent } from '../volunteers/volunteer-list/volunteer-list.component';
import { RoleScreenMappingsComponent } from '../roleScreenMappings/roleScreenMappings.component';
import { RoleScreenMappingComponent } from '../roleScreenMappings/roleScreenMapping/roleScreenMapping.component';
import { RoleScreenMappingListComponent } from '../roleScreenMappings/roleScreenMapping-list/roleScreenMapping-list.component';
import { YearInfosComponent } from '../yearInfos/yearInfos.component';
import { YearInfoComponent } from '../yearInfos/yearInfo/yearInfo.component';
import { YearInfoListComponent } from '../yearInfos/yearInfo-list/yearInfo-list.component';
import { MonthInfosComponent } from '../monthInfos/monthInfos.component';
import { MonthInfoComponent } from '../monthInfos/monthInfo/monthInfo.component';
import { MonthInfoListComponent } from '../monthInfos/monthInfo-list/monthInfo-list.component';
import { DayInfosComponent } from '../dayInfos/dayInfos.component';
import { DayInfoComponent } from '../dayInfos/dayInfo/dayInfo.component';
import { DayInfoListComponent } from '../dayInfos/dayInfo-list/dayInfo-list.component';
import { TeamStudentMappingsComponent } from '../teamStudentMappings/teamStudentMappings.component';
import { TeamStudentMappingComponent } from '../teamStudentMappings/teamStudentMapping/teamStudentMapping.component';
import { TeamStudentMappingListComponent } from '../teamStudentMappings/teamStudentMapping-list/teamStudentMapping-list.component';
import { LoginsComponent } from '../logins/logins.component';
import { LoginComponent } from '../logins/login/login.component';
import { LoginListComponent } from '../logins/login-list/login-list.component';
import { TeamWiseTrackingsComponent } from '../teamWiseTrackings/teamWiseTrackings.component';
import { TeamWiseTrackingComponent } from '../teamWiseTrackings/teamWiseTracking/teamWiseTracking.component';
import { TeamWiseTrackingListComponent } from '../teamWiseTrackings/teamWiseTracking-list/teamWiseTracking-list.component';
import { ExcelDatasComponent } from '../excelDatas/excelDatas.component';
import { ExcelDataComponent } from '../excelDatas/excelData/excelData.component';
import { ExcelDataListComponent } from '../excelDatas/excelData-list/excelData-list.component';
import { ClassWiseTrackingsComponent } from '../classWiseTrackings/classWiseTrackings.component';
import { ClassWiseTrackingComponent } from '../classWiseTrackings/classWiseTracking/classWiseTracking.component';
import { ClassWiseTrackingListComponent } from '../classWiseTrackings/classWiseTracking-list/classWiseTracking-list.component';
import { IndividualTrackingsComponent } from '../individualTrackings/individualTrackings.component';
import { IndividualTrackingComponent } from '../individualTrackings/individualTracking/individualTracking.component';
import { IndividualTrackingListComponent } from '../individualTrackings/individualTracking-list/individualTracking-list.component';
import { ComparativeChartsComponent } from '../comparativeCharts/comparativeCharts.component';
import { ComparativeChartComponent } from '../comparativeCharts/comparativeChart/comparativeChart.component';
import { ComparativeChartListComponent } from '../comparativeCharts/comparativeChart-list/comparativeChart-list.component';
import { FormlayoutComponent } from './formlayout/formlayout.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GreenStarByStudentComponent } from './green-star-by-student/green-star-by-student.component';

@NgModule({
  declarations: [
    StudentDatasComponent,
    StudentDataComponent,
    StudentDataListComponent,
    StudentsComponent,
    StudentComponent,
    StudentListComponent,
    OutreachsComponent,
    OutreachComponent,
    OutreachListComponent,
    VrolesComponent,
    VroleComponent,
    VroleListComponent,
    ScreensComponent,
    ScreenComponent,
    ScreenListComponent,
    HolidayTypesComponent,
    HolidayTypeComponent,
    HolidayTypeListComponent,
    ColorsComponent,
    ColorComponent,
    ColorListComponent,
    CitysComponent,
    CityComponent,
    CityListComponent,
    SchoolsComponent,
    SchoolComponent,
    SchoolListComponent,
    WeekInfosComponent,
    WeekInfoComponent,
    WeekInfoListComponent,
    TeachersComponent,
    TeacherComponent,
    TeacherListComponent,
    ParametersComponent,
    ParameterComponent,
    ParameterListComponent,
    StandardsComponent,
    StandardComponent,
    StandardListComponent,
    SectionsComponent,
    SectionComponent,
    SectionListComponent,
    TeamsComponent,
    TeamComponent,
    TeamListComponent,
    HolidaysComponent,
    HolidayComponent,
    HolidayListComponent,
    VolunteersComponent,
    VolunteerComponent,
    VolunteerListComponent,
    RoleScreenMappingsComponent,
    RoleScreenMappingComponent,
    RoleScreenMappingListComponent,
    YearInfosComponent,
    YearInfoComponent,
    YearInfoListComponent,
    MonthInfosComponent,
    MonthInfoComponent,
    MonthInfoListComponent,
    DayInfosComponent,
    DayInfoComponent,
    DayInfoListComponent,
    TeamStudentMappingsComponent,
    TeamStudentMappingComponent,
    TeamStudentMappingListComponent,
    LoginsComponent,
    LoginComponent,
    LoginListComponent,
    TeamWiseTrackingsComponent,
    TeamWiseTrackingComponent,
    TeamWiseTrackingListComponent,
    ExcelDatasComponent,
    ExcelDataComponent,
    ExcelDataListComponent,
    ClassWiseTrackingsComponent,
    ClassWiseTrackingComponent,
    ClassWiseTrackingListComponent,
    IndividualTrackingsComponent,
    IndividualTrackingComponent,
    IndividualTrackingListComponent,
    ComparativeChartsComponent,
    ComparativeChartComponent,
    ComparativeChartListComponent,
AppComponent,
FormlayoutComponent,
HeaderComponent,
LayoutComponent,
SidebarComponent,
DashboardComponent,
GreenStarByStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ToastrModule.forRoot(),    
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
