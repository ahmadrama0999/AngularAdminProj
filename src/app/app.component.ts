import { Component } from '@angular/core';
import { AuthService } from './dishes/auth.server';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularAdminProj';

  constructor(private authService: AuthService, private translate: TranslateService) {
    translate.addLangs(['en', 'klingon']);
    translate.addLangs(['ru', 'kli']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  useLanguage(language: string) {
    this.translate.use(language);
}

  logout() {
    this.authService.logout();
  }
}
