import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {Httpservice} from "../../Httpservice";
import {Hookup, ResponseDto} from "../../hookup";
import {firstValueFrom} from "rxjs";
import {State} from "../../state";
import {Log} from "../../logs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent  implements OnInit {


  constructor(public http: Httpservice, public router: Router, public state: State) { }


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
    // Call the method from HttpService to retrieve hookups
    this.http.getAllHookups().then(() => {
      // Handle any additional logic after hookups are retrieved
    }).catch(error => {
      console.error('Error retrieving hookups:', error);
    });
  }

}
