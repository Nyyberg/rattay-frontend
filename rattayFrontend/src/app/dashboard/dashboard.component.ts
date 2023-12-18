import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent  implements OnInit {

  constructor(public http: HttpClient, public router: Router) { }


  async fetchHookups(){
   const result = await this.http.get(environment.baseUrl+'/getHookups')
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
  }

}
