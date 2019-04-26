import { Component, OnInit } from '@angular/core';

import { ColorService } from '../shared/color.service'
import { Color } from '../shared/color.model';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  constructor(private colorService: ColorService,private toastr : ToastrService) { }

  ngOnInit() {
    this.colorService.getColorList();
  }

  showForEdit(objColor: Color) {    
    this.colorService.selectedColor = Object.assign({}, objColor);
    if(this.colorService.selectedColor.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.colorService.deleteColor(id)
      .subscribe(x => {
        this.colorService.getColorList();
        this.toastr.warning("Deleted Successfully","Color Register");
      })
    }
  }
}
