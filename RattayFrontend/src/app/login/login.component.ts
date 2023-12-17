import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {firstValueFrom} from "rxjs";
import {LoginDTO, User} from "../../user";
import {Router} from "@angular/router";

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})



export class LoginComponent{

  dto_ =  {
    username: '',
    password: ''
  }

  constructor(public http: HttpClient, private router: Router) {
  }



   async submitLogin(){
   const result = await firstValueFrom(this.http.post(environment.baseUrl+'/login/login', this.dto_, {responseType: 'text'}))
    if (result.length > 0){
      localStorage.setItem('token', result)
      //add route to dashboard

    }
    else{
      //display error message on login page

    }
  }
}
