import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {firstValueFrom} from "rxjs";
import {LoginDTO, User} from "../user";

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})



export class LoginComponent{

  dto_ =  {
    username: '',
    password: ''
  }

  constructor(public http: HttpClient) {
  }


   async submitLogin(){
   const result = await firstValueFrom(this.http.post(environment.baseUrl+'/login/login', this.dto_, {responseType: 'text'}))
    if (result.length > 0){
      localStorage.setItem('token', result)   
    }
    else{
      alert('Wrong username or password')
    }
  }
}
