import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {Httpservice} from "../../Httpservice";
import {Hookup, ResponseDto} from "../../hookup";
import {firstValueFrom} from "rxjs";
import {State} from "../../state";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent  implements OnInit {


  constructor(public http: HttpClient, public router: Router, public state: State) { }

  async getAllHookups(){
    const result: ResponseDto<Hookup[]> = await firstValueFrom(this.http.get<ResponseDto<Hookup[]>>(environment.baseUrl+'/getAllHookups'));
    this.state.hookups = result.responseData!;
  }

  routeLog(){
    this.router.navigateByUrl('/log')
  }

  routeCreate(){
    this.router.navigateByUrl('/create')
  }

  alertAlreadyHere(){
    alert('You are already here!')
  }

  ngOnInit(): void {
    this.getAllHookups();
  }

}
