import { Component, OnInit } from '@angular/core';

import { SectionService } from '../shared/section.service'
import { Section } from '../shared/section.model';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private sectionService: SectionService,private toastr : ToastrService) { }

  ngOnInit() {
    this.sectionService.getSectionList();
  }

  showForEdit(objSection: Section) {    
    this.sectionService.selectedSection = Object.assign({}, objSection);
    if(this.sectionService.selectedSection.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.sectionService.deleteSection(id)
      .subscribe(x => {
        this.sectionService.getSectionList();
        this.toastr.warning("Deleted Successfully","Section Register");
      })
    }
  }
}
