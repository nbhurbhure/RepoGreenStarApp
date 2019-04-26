import { Component, OnInit } from '@angular/core';

import {SectionService} from './shared/section.service'
@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css'],
  providers:[SectionService]
})
export class SectionsComponent implements OnInit {

  constructor(private sectionService : SectionService) { }

  ngOnInit() {
  }

}
