import {firstValueFrom, map} from "rxjs";
import {LoginDTO} from "./User";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {environment} from "./environments/environment";
import {BodyDTO, Hookup, ResponseDto} from "./hookup";
import {State} from "./state";

@Injectable({
  providedIn: 'root'
})

export class Httpservice{
  _username: string = "";
  _password: string = "";
  _id: number = 0

  constructor(public http: HttpClient, private router: Router, public state: State) {
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

  async createInitialHookup(_dto: Hookup){
  return  this.http.post<Hookup>(environment.baseUrl+'/addHookup', _dto).pipe(map((resultWithId: Hookup)=>{

  this._id = resultWithId.id
  })
  );
  }

  addBodyToHookup(_dto: BodyDTO){

  }

  addHeaderToHookup(){

  }



  getAllLogs(){

  }
}


