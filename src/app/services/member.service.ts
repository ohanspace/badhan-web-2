import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable} from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MemberService {
  member$: Observable<any>;

  constructor(private af: AngularFire) {
    this.member$ = af.auth.map(a => af.database.object('/members/'+a.uid));
  }
}
