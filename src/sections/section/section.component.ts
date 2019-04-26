import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { SectionService } from '../shared/section.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
    
  constructor(private sectionService: SectionService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.sectionService.selectedSection = {
      Id: null,
      Name: '',
      StandardName: '',
      FStandardId: null,
    }      
    this.sectionService.getStandardList(); 
  }


  onSubmit(form: NgForm) {  
form.value.FSchoolId = appconstants.GlobalSchoolId;
    if (form.value.Id == null) {
      this.sectionService.postSection(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.sectionService.getSectionList();
          this.toastr.success('New Record Added Succcessfully', 'Section Register');
        })
    }
    else {
      this.sectionService.putSection(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.sectionService.getSectionList();
        this.toastr.info('Record Updated Successfully!', 'Section Register');
      });
    }
  }

}

