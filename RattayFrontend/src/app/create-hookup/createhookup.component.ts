import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";


@Component({
  templateUrl: './createhookup.component.html',
  styleUrls: ['./createhookup.component.css'],
})
export class CreatehookupComponent implements OnInit{

  parameterList: string[] = [];

  constructor(public router: Router) {
    this.parameterList = [];
  }



  addNewParamter(){
  this.parameterList.push()
  }

  ngOnInit(): void {
  }

}
