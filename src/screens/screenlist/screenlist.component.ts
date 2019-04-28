import { Component, OnInit } from '@angular/core';

import { ScreenService } from '../shared/screen.service'
import { Screen } from '../shared/screenmodel';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-screen-list',
  templateUrl: './screenlist.component.html',
  styleUrls: ['./screenlist.component.css']
})
export class ScreenListComponent implements OnInit {

  constructor(private screenService: ScreenService,private toastr : ToastrService) { }

  ngOnInit() {
    this.screenService.getScreenList();
  }

  showForEdit(objScreen: Screen) {    
    this.screenService.selectedScreen = Object.assign({}, objScreen);
    if(this.screenService.selectedScreen.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.screenService.deleteScreen(id)
      .subscribe(x => {
        this.screenService.getScreenList();
        this.toastr.warning("Deleted Successfully","Screen Register");
      })
    }
  }
}
