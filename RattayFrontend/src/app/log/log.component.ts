import {Component, OnInit} from "@angular/core";
import {Httpservice} from "../../Httpservice";
import {State} from "../../state";
import {Hookup, ResponseDto} from "../../hookup";
import {firstValueFrom} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Log} from "../../logs";

@Component({
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
})

export class LogComponent implements OnInit{

  constructor(public http: HttpClient, public state: State){
  }

 /* async getAllLogs(){
      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
      const result: ResponseDto<Log[]> = await firstValueFrom(this.http.get<ResponseDto<Log[]>>(environment.baseUrl+'/Log/GetAllLogs'));
      this.state.Logs = result.responseData!;
    }
*/
  async getAllLogs() {
    // Create HttpHeaders with Authorization header
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    try {
      // Make the HTTP request with headers and get the observable
      const observable = this.http.get<ResponseDto<Log[]>>(environment.baseUrl + '/Log/GetAllLogs', { headers });

      // Use firstValueFrom to get the first value emitted by the observable
      const result: ResponseDto<Log[]> = await firstValueFrom(observable);

      // Update your state with the response data
      this.state.Logs = result.responseData!;
    } catch (error) {
      // Handle errors here
      console.error('Error fetching logs:', error);
    }
  }

  ngOnInit(): void {
  this.getAllLogs()
  }

}
