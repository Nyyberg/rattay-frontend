import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {firstValueFrom} from "rxjs";

import {Router} from "@angular/router";
import {Httpservice} from "../../Httpservice";
import {LoginDTO} from "../../User";



@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})



export class LoginComponent{
  _username: string = ""
  _password: string = ""

  constructor(public http: Httpservice, private router: Router) {
  }



   async submitLogin(){
    let dto: LoginDTO = {
      username: this._username,
      password: this._password
     }
    await this.http.Login(dto)
  }
}
