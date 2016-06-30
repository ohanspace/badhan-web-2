import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { MemberService } from '../../services/member.service';
import { FirebaseObjectObservable } from 'angularfire2';
import { Subscription } from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'profile',
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [MemberService],
  templateUrl: 'profile.component.html',
})
export class ProfileComponent implements OnInit {
  private memberSub: Subscription;
  private memberPristine: FirebaseObjectObservable<any>;
  
  form: FormGroup;
  nameCtrl = new FormControl('', Validators.required);

  //form meta data
  bloodGroups: any[] = [{id: 'A+', name: 'A+'}, {id: 'A-', name: 'A-'}];
  districts: any[] = [{id: 'chittagong', name:'Chittagong'}, {id:'dhaka', name: 'Dhaka'}];
  

  constructor(private fb: FormBuilder, private memberService: MemberService) {   }

  private buildForm(): void{
    this.form = this.fb.group({
      name: this.nameCtrl,
    })
  }

  ngOnInit() {
    this.memberSub = this.memberService.member$.subscribe(m => {
      this.memberPristine = m;
    });
   
    this.buildForm();
  }
  ngOnDestroy(){
    this.memberSub.unsubscribe();
  }

  save(){
    console.log(this.form.value);
    this.memberPristine.update(this.form.value);
    
  }

  onOrganogramSelect(organogram){
    (this.form.controls['belongToOrganogram'] as FormControl).updateValue(organogram.uniqueId);
  }

}
