import { Component, OnInit } from '@angular/core';

import { ClassWiseTrackingService } from '../shared/classWiseTracking.service'
import { ClassWiseTracking } from '../shared/classWiseTracking.model';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-classWiseTracking-list',
  templateUrl: './classWiseTracking-list.component.html',
  styleUrls: ['./classWiseTracking-list.component.css']
})
export class ClassWiseTrackingListComponent implements OnInit {

  constructor(private classWiseTrackingService: ClassWiseTrackingService,private toastr : ToastrService) { }

  ngOnInit() {
    this.classWiseTrackingService.getClassWiseTrackingList();
  }

  showForEdit(objClassWiseTracking: ClassWiseTracking) {    
    this.classWiseTrackingService.selectedClassWiseTracking = Object.assign({}, objClassWiseTracking);
    if(this.classWiseTrackingService.selectedClassWiseTracking.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.classWiseTrackingService.deleteClassWiseTracking(id)
      .subscribe(x => {
        this.classWiseTrackingService.getClassWiseTrackingList();
        this.toastr.warning("Deleted Successfully","ClassWiseTracking Register");
      })
    }
  }
}
