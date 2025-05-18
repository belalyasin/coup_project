import { Component } from '@angular/core';
import {SVGComponent} from '../../components/svg/svg.component';
import {LoginRigthComponent} from '../../components/componentsRigth/login-rigth/login-rigth.component';

@Component({
  selector: 'app-login',
  imports: [
    SVGComponent,
    LoginRigthComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
