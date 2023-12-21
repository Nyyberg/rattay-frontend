import {firstValueFrom} from "rxjs";
import {environment} from "../environments/environment";
import {LoginDTO} from "./User";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class Httpservice{
  _username: string = "";
  _password: string = "";

  constructor(public http: HttpClient, private router: Router) {
  }

  async Login(_dto: LoginDTO){
    const result = await firstValueFrom(this.http.post(environment.baseUrl+'/login/login', _dto, {responseType: 'text'}))
    if (result.length > 0){
      localStorage.setItem('token', result)
      //add route to dashboard
      await this.router.navigateByUrl("/dashboard")
    }
    else{
      //display error message on login page
      alert('Your credentials may be wrong')
    }
  }

  createHookup(){

  }
}


