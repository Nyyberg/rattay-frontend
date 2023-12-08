import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {firstValueFrom} from "rxjs";
import {LoginDTO, User} from "../user";
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
   const result = await (this.http.post('https://localhost:5000/login/login', this.dto_, {responseType: 'text'}))
    console.log(result)
    if (result.toString() != ''){
      localStorage.setItem('token', result.toString())
      this.router.navigateByUrl('/dashboard')
      console.log('this is result: ' + result.toString())
    }else {
      alert('error')
    }
  }
}
