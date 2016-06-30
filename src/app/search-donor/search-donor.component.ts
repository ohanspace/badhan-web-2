import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
//import { Subject } from 'rxjs/Subject';

@Component({
  moduleId: module.id,
  selector: 'search-donor',
  templateUrl: 'search-donor.component.html',
  styleUrls: ['search-donor.component.css']
})
export class SearchDonorComponent implements OnInit {
  bloodGroup: string;
  district: string;

  //bloodGroupSubject: Subject<any> = new Subject();

  paramsSub: any;
  donors: FirebaseListObservable<any[]>;
  //meta data
  bloodGroups: any[] = [{id: 'A+', name: 'A+'}, {id: 'A-', name: 'A-'}];

  constructor(private activatedRoute: ActivatedRoute, private af: AngularFire) {
    this.paramsSub = this.activatedRoute.params.subscribe(params => {
            this.bloodGroup = params['bloodGroup'];
            this.district = params['district']; 
                  
      });
  }

  ngOnInit() {
      console.log('oninit');
      this.donors = this.af.database.list('/members',{
          query: {
            orderByChild: 'bloodGroup',
            equalTo: this.bloodGroup
          }
      })
  }
  // onBloodGroupChange(val){
  //   console.log(val);
  //   this.bloodGroupSubject.next(val);
  // }

}
