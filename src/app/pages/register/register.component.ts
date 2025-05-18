import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {routes} from '../../app.routes';
import {IconComponent} from '../../components/icon/icon.component';
import {SVGComponent} from '../../components/svg/svg.component';

@Component({
  selector: 'app-register',
  imports: [
    RouterLink,
    IconComponent,
    RouterLinkActive,
    SVGComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  protected readonly routes = routes;
}
