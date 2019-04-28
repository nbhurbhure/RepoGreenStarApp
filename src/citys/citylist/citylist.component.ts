import { Component, OnInit } from '@angular/core';

import { CityService } from '../shared/city.service'
import { City } from '../shared/citymodel';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-city-list',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css']
})
export class CityListComponent implements OnInit {

  constructor(private cityService: CityService,private toastr : ToastrService) { }

  ngOnInit() {
    this.cityService.getCityList();
  }

  showForEdit(objCity: City) {    
    this.cityService.selectedCity = Object.assign({}, objCity);
    if(this.cityService.selectedCity.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.cityService.deleteCity(id)
      .subscribe(x => {
        this.cityService.getCityList();
        this.toastr.warning("Deleted Successfully","City Register");
      })
    }
  }
}
