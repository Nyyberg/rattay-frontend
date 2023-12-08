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

  constructor(public http: HttpClient) {
  }

 async submitLogin(){

    const result = await this.http.post<string>(environment.baseUrl + 'Login/logn', dto_).subscribe((res: any)=>{
      localStorage.setItem('token', res.data.token)
    })

  }
}
