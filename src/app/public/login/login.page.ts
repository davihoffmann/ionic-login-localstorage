import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private autheticaService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.autheticaService.login();
  }

}
