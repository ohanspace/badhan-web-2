import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './core/auth';



@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  constructor(private auth: AuthService, private router: Router){
  }

  signInWithGoogle(): void{
   this.auth.signInWithGoogle()
      .then(() => this.postLogin());
  }

  signInWithFacebook(): void{
    this.auth.signInWithFacebook()
      .then(() => this.postLogin());
  }

  postLogin(): void{
    console.log('post signin');
    this.router.navigate(['/']);
    
  }

  signOut(): void {
    this.auth.signOut();
    window.location.replace('/');
  }
}
