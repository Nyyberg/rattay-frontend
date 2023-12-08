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

  dto_ = {username:'',password:''}

  constructor(public http: HttpClient) {
  }


 async submitLogin(){
    await this.http.post<string>(environment.baseUrl + 'Login/logn', this.dto_).subscribe((res: any)=>{
      if(res.result){
        alert('Login Success')
        localStorage.setItem('token', res.data.token)
      }
    })

  }
}
