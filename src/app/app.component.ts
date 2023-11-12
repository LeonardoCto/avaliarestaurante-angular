import { Component, Directive } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'avaliarestaurante-angular';

  constructor(private router : Router){}

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }

}
