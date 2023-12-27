import {Component, OnInit} from "@angular/core";
import {Httpservice} from "../../Httpservice";
import {State} from "../../state";
import {Hookup} from "../../hookup";
import {firstValueFrom} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Log} from "../../logs";

@Component({
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
})

export class LogComponent implements OnInit{

  constructor(public http: Httpservice, public state: State){
  }


  ngOnInit(): void {
    // Call the method from HttpService to retrieve hookups
    this.http.getAllLogs().then(() => {
      // Handle any additional logic after hookups are retrieved
    }).catch(error => {
      console.error('Error retrieving Logs:', error);
    });
  }
}
