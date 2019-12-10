import { Component } from '@angular/core';
import { AuthService } from './dishes/auth.server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularAdminProj';

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}
