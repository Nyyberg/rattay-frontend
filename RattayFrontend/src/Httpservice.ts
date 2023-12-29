import {firstValueFrom, map, Observable} from "rxjs";
import {LoginDTO} from "./User";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {environment} from "./environments/environment";
import {BodyDTO, HeaderDTO, Hookup} from "./hookup";
import {State} from "./state";
import {Log} from "./logs";


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
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
  return  this.http.post<Hookup>(environment.baseUrl+'/addHookup', _dto, {headers}).pipe(map((resultWithId: Hookup)=>{

  this._id = resultWithId.id
    console.log(resultWithId.id)
    return resultWithId;
  })
  );
  }

  initialHookup(_dto: Hookup): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post(environment.baseUrl+'/addHookup', _dto, {headers})
  }


  addBodyToHookup(_dto: BodyDTO): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post(environment.baseUrl+'/addBody', _dto, {headers})
  }

  addHeaderToHookup(_dto: HeaderDTO): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post(environment.baseUrl+'/addHeader', _dto, {headers})
  }

  async getAllHookups(): Promise<void> {
    // Retrieve the token from the State service
    const token = localStorage.getItem('token');

    // Check if token is present
    if (!token) {
      console.error('No token found in localStorage. Authentication required.');
      return;
    }

    // Create HttpHeaders with Authorization header
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    try {
      // Make the HTTP request with headers and get the observable
      const observable = this.http.get<Hookup[]>(environment.baseUrl + '/getAllHookups', { headers });

      // Use firstValueFrom to get the first value emitted by the observable
      const result: Hookup[] = await firstValueFrom(observable);

      // Update the state with the response data
      this.state.hookups = result
    } catch (error) {
      // Handle errors here
      console.error('Error fetching hookups:', error);
    }
  }

  async getAllLogs(): Promise<void> {
    // Retrieve the token from the State service
    const token = localStorage.getItem('token');

    // Check if token is present
    if (!token) {
      console.error('No token found in localStorage. Authentication required.');
      return;
    }

    // Create HttpHeaders with Authorization header
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    try {
      // Make the HTTP request with headers and get the observable
      const observable = this.http.get<Log[]>(environment.baseUrl + '/Log/GetAllLogs', { headers });

      // Use firstValueFrom to get the first value emitted by the observable
      const result: Log[] = await firstValueFrom(observable);
      console.log(result)
      // Update the state with the response data
      this.state.Logs = result
    } catch (error) {
      // Handle errors here
      console.error('Error fetching hookups:', error);
    }
  }
}


