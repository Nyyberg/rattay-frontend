import {Component, OnInit} from "@angular/core";
import {Httpservice} from "../../Httpservice";
import {State} from "../../state";
import {Hookup, ResponseDto} from "../../hookup";
import {firstValueFrom} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Log} from "../../logs";

@Component({
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
})

export class LogComponent implements OnInit{

  constructor(public http: HttpClient, public state: State){
  }

 async getAllLogs(){
      const result: ResponseDto<Log[]> = await firstValueFrom(this.http.get<ResponseDto<Log[]>>(environment.baseUrl+'/getAllHookups'));
      this.state.Logs = result.responseData!;
    }

  ngOnInit(): void {
  this.getAllLogs()
  }

}
