import { Component, OnInit } from '@angular/core';
import { ExcelData } from 'src/excelDatas/shared/excelDatamodel';
import { StudentDataService } from 'src/studentDatas/shared/studentData.service';
import { WeekInfoService } from 'src/weekInfos/shared/weekInfo.service';
import { HolidayService } from 'src/holidays/shared/holiday.service';

@Component({
  selector: 'gstar-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[StudentDataService, WeekInfoService, HolidayService]
})
export class DashboardComponent implements OnInit {
  color: string="aqua";

  constructor(public studentDataService: StudentDataService, 
    public weekInfoService: WeekInfoService, public holidayService: HolidayService) { }
  StarArray:string[] = new Array(32) ;
  counter: number=0; 
  ngOnInit() {
 /*   this.studentDataService.getStudentDataList();
    this.weekInfoService.getWeekInfoList();
    this.holidayService.getHolidayList();

    for(var i = 1;i<this.StarArray.length;i++) { 
      this.StarArray[i] = "White" ;
     // console.log(arr_names[i]) 
    }
    
 
  }


  weekday: Date;
  CreateGreenStar()
  {
   this.StarArray[this.counter] = "Red";
  // this.counter=-1;
console.log(this.weekInfoService.weekInfoList);
this.studentDataService.studentDataList.forEach
(element => {
  this.weekday = new Date(element.YearName.toString() + '-' + element.MonthName.toString() + '-' + element.DayName.toString());
  console.log(element.DayName);
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


});*/
}

}


