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


   submitLogin(){
   const result = firstValueFrom(this.http.post('https://localhost:5000/login/login', this.dto_, {responseType: 'text'}))
    console.log(result)
    if (result){
      localStorage.setItem('token', result.toString())   
    }
  }
}
