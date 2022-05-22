import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '../inicio', icon: 'home' },
    { title: 'Registrarse', url: '../registro', icon: 'person' },
    { title: 'Inciar Sesion', url: '../sesion', icon: 'log-in' },
    { title: 'Creditos', url: '../creditos', icon: 'settings' },
  ];
  constructor() {}
}
