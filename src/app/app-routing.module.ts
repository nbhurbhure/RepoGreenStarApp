import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDatasComponent } from 'src/studentDatas/studentDatas.component';
import { StudentsComponent } from 'src/students/students.component';
import { OutreachsComponent } from 'src/outreachs/outreachs.component';
import { VrolesComponent } from 'src/vroles/vroles.component';
import { ScreensComponent } from 'src/screens/screens.component';
import { HolidayTypesComponent } from 'src/holidayTypes/holidayTypes.component';
import { ColorsComponent } from 'src/colors/colors.component';
import { CitysComponent } from 'src/citys/citys.component';
import { SchoolsComponent } from 'src/schools/schools.component';
import { WeekInfosComponent } from 'src/weekInfos/weekInfos.component';
import { TeachersComponent } from 'src/teachers/teachers.component';
import { ParametersComponent } from 'src/parameters/parameters.component';
import { StandardsComponent } from 'src/standards/standards.component';
import { SectionsComponent } from 'src/sections/sections.component';
import { TeamsComponent } from 'src/teams/teams.component';
import { HolidaysComponent } from 'src/holidays/holidays.component';
import { VolunteersComponent } from 'src/volunteers/volunteers.component';
import { RoleScreenMappingsComponent } from 'src/roleScreenMappings/roleScreenMappings.component';
import { YearInfosComponent } from 'src/yearInfos/yearInfos.component';
import { MonthInfosComponent } from 'src/monthInfos/monthInfos.component';
import { DayInfosComponent } from 'src/dayInfos/dayInfos.component';
import { TeamStudentMappingsComponent } from 'src/teamStudentMappings/teamStudentMappings.component';
import { LoginsComponent } from 'src/logins/logins.component';
import { TeamWiseTrackingsComponent } from 'src/teamWiseTrackings/teamWiseTrackings.component';
import { ExcelDatasComponent } from 'src/excelDatas/excelDatas.component';
import { ClassWiseTrackingsComponent } from 'src/classWiseTrackings/classWiseTrackings.component';
import { IndividualTrackingsComponent } from 'src/individualTrackings/individualTrackings.component';
import { ComparativeChartsComponent } from 'src/comparativeCharts/comparativeCharts.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [ 
  { path: '', pathMatch: 'full', redirectTo: 'logins'},
  { path: 'studentDatas', component: StudentDatasComponent }, 
  { path: 'students', component: StudentsComponent }, 
  { path: 'outreachs', component: OutreachsComponent }, 
  { path: 'vroles', component: VrolesComponent }, 
  { path: 'screens', component: ScreensComponent }, 
  { path: 'holidayTypes', component: HolidayTypesComponent }, 
  { path: 'colors', component: ColorsComponent }, 
  { path: 'citys', component: CitysComponent }, 
  { path: 'schools', component: SchoolsComponent }, 
  { path: 'weekInfos', component: WeekInfosComponent }, 
  { path: 'teachers', component: TeachersComponent }, 
  { path: 'parameters', component: ParametersComponent }, 
  { path: 'standards', component: StandardsComponent }, 
  { path: 'sections', component: SectionsComponent }, 
  { path: 'teams', component: TeamsComponent }, 
  { path: 'holidays', component: HolidaysComponent }, 
  { path: 'volunteers', component: VolunteersComponent }, 
  { path: 'roleScreenMappings', component: RoleScreenMappingsComponent }, 
  { path: 'yearInfos', component: YearInfosComponent }, 
  { path: 'monthInfos', component: MonthInfosComponent }, 
  { path: 'dayInfos', component: DayInfosComponent }, 
  { path: 'teamStudentMappings', component: TeamStudentMappingsComponent }, 
  { path: 'logins', component: LoginsComponent }, 
  { path: 'teamWiseTrackings', component: TeamWiseTrackingsComponent }, 
  { path: 'excelDatas', component: ExcelDatasComponent }, 
  { path: 'classWiseTrackings', component: ClassWiseTrackingsComponent }, 
  { path: 'individualTrackings', component: IndividualTrackingsComponent }, 
  { path: 'comparativeCharts', component: ComparativeChartsComponent }, 
  { path: 'dashboard', component: DashboardComponent }, 
] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


