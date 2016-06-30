import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'home',
  directives: [REACTIVE_FORM_DIRECTIVES],
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  districtCtrl: FormControl = new FormControl('', Validators.required);

 //initiialize data
  district = '';
  bloodGroup = 'A+';
  //meta data
  bloodGroups: any[] = [{id: 'A+', name: 'A+'}, {id: 'A-', name: 'A-'}];

  constructor(private fb: FormBuilder, private router: Router) {  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      bloodGroup: ['A+'],
      district: this.districtCtrl
    })
  }

  onSearch(){
    console.log(this.searchForm.value);
    this.router.navigate(['/search/'+this.bloodGroup+'/'+this.district])
  }

}
