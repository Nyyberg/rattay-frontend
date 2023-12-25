import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Httpservice} from "../../Httpservice";
import {Hookup} from "../../hookup";


@Component({
  templateUrl: './createhookup.component.html',
  styleUrls: ['./createhookup.component.css'],
})
export class CreatehookupComponent implements OnInit{
  _id: number = 0
  _url: string = "";
  _methodType: string = "";
  _isEveryDay: boolean = false;
  _isEveryWeek: boolean = false;
  _isEveryMonth: boolean = false;
  _timeOfDay: Date = new Date();

  parameters: any[]=[];
  headers: any[]=[];
  currentStep: number = 1;

  constructor(public router: Router, public http: Httpservice) {
  }


  addNewParamter(){
    //add a new parameter to the list
    this.parameters.push({name: '', value: '', type: ''});
    console.log(this.parameters);

  }

  addNewHeader(){
    this.headers.push({key:'', value:'', type: ''});
    console.log(this.headers);
  }

  nextStepInital(){
    if (this.currentStep < 3){
      this.currentStep++;
    }
  }

  nextStepBody(){
    if (this.currentStep < 3){
      this.currentStep++;
    }
  }


  async submitInitialHookup(){
    let dto: Hookup = {
      id: this._id,
      url: this._url,
      methodType: this._methodType,
      isEveryDay: this._isEveryDay,
      isEveryWeek: this._isEveryWeek,
      isEveryMonth: this._isEveryMonth,
      timeOfDay: this._timeOfDay
    }
    await this.http.createInitialHookup(dto);
    this._id = this.http._id
  }

  ngOnInit(): void {
    this.addNewParamter();
    this.addNewHeader();
  }

}
