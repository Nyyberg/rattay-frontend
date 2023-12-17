import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent  implements OnInit {

  constructor(public http: HttpClient) { }


  async fetchHookups(){
   const result = await this.http.get(environment.baseUrl+'/getHookups')
  }

  ngOnInit(): void {
  }

}
