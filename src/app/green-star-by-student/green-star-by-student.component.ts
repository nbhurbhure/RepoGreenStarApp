import { Component, OnInit } from '@angular/core';
import { StudentDataService } from 'src/studentDatas/shared/studentData.service';
import { WeekInfoService } from 'src/weekInfos/shared/weekInfo.service';
import { HolidayService } from 'src/holidays/shared/holiday.service';
import { NgForm } from '@angular/forms';
import { appconstants } from 'src/common/appconstants';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'gstar-green-star-by-student',
  templateUrl: './green-star-by-student.component.html',
  styleUrls: ['./green-star-by-student.component.css'],
  providers:[StudentDataService, WeekInfoService, HolidayService]
})
export class GreenStarByStudentComponent implements OnInit {

  color: string="aqua";

  constructor(public studentDataService: StudentDataService, private toastr: ToastrService,
    public weekInfoService: WeekInfoService, public holidayService: HolidayService) { }
  StarArray:string[] = new Array(32) ;
  counter: number=0; 
  ngOnInit() {
    this.resetForm();  
  }

  weekday: Date;


OnYearInfoChange(event)
{
  this.studentDataService.objFilteredMonthInfoList = this.studentDataService.objMonthInfoList.filter(r=>r.FYearInfoId==event)  
  this.studentDataService.selectedStudentData.FDayInfoId = null;
}

/*OnMonthInfoChange(event)
{
 this.studentDataService.objFilteredDayInfoList = this.studentDataService.objDayInfoList.filter(r=>r.FMonthInfoId==event)    
}*/

resetForm(form?: NgForm) {
  if (form != null)
  {
    form.reset();
  }
  this.studentDataService.selectedStudentData = {
    Id: null,
    Name: '',
    StudentStatus: '',
    YearInfoName: '',
    MonthInfoName: '',
    DayInfoName: '',
    StudentName: '',
    ParameterName: '',
    FYearInfoId: null,
    FMonthInfoId: null,
    FDayInfoId: null,
    FStudentId: null,
    FParameterId: null,
    YearName: null,
    MonthName: null,
    DayName: null
  }   
  for(var i = 1;i<this.StarArray.length;i++) { 
    this.StarArray[i] = "White" ;
 }   
  this.studentDataService.getStudentDataList();
  this.weekInfoService.getWeekInfoList();
  this.holidayService.getHolidayList();
  this.studentDataService.getYearInfoList(); 
  this.studentDataService.getMonthInfoList(); 
  this.studentDataService.getDayInfoList(); 
  this.studentDataService.getStudentList(); 
  this.studentDataService.getParameterList(); 
}

onSubmit(form: NgForm) {  
  form.value.FSchoolId = appconstants.GlobalSchoolId;
      if (form.value.Id == null) {
        this.studentDataService.postStudentData(form.value)

        console.log(this.weekInfoService.weekInfoList);
        this.studentDataService.studentDataList.filter(r=>r.FMonthInfoId==form.value.FMonthInfoId && r.FParameterId==form.value.FParameterId && r.FStudentId==form.value.FStudentId).forEach
        (element => {
          this.weekday = new Date(element.YearName.toString() + '-' + element.MonthName.toString() + '-' + element.DayName.toString());
        
          this.counter = this.counter + 1;
          if(this.holidayService.holidayList.filter(r=>r.FYearInfoId== element.FYearInfoId && r.FMonthInfoId==element.FMonthInfoId && r.FDayInfoId==element.FDayInfoId).length > 0)
          {
            this.StarArray[this.counter] = "blue";
          }
          else if(this.weekInfoService.weekInfoList.filter(r=>r.WorkingDay == 0 && r.Id == this.weekday.getDay() + 1).length == 1)
          {
            this.StarArray[this.counter] = "grey";
          }
        else{
          this.StarArray[this.counter] = element.Name;
        }
        });
        


      }
      else {
      }
    }

}



