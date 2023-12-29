import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Httpservice} from "../../Httpservice";
import {Hookup, BodyDTO, HeaderDTO} from "../../hookup";
import {forkJoin} from "rxjs";


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
  initialHookupID!: number;

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
    if (this.currentStep === 1){
    let dto: Hookup = {
      id: this._id,
      url: this._url,
      methodType: this._methodType,
      isEveryDay: this._isEveryDay,
      isEveryWeek: this._isEveryWeek,
      isEveryMonth: this._isEveryMonth,
      timeOfDay: this._timeOfDay
    }
    await this.http.initialHookup(dto).subscribe((response) => {
      this.initialHookupID = response.id
      this.currentStep++;
      console.log(this.initialHookupID)
    })
    }
  }

  addbody(){
    const addBodyObservables = this.parameters.map((item) => {
      const _dto: BodyDTO = {
        hookupBeId: this.initialHookupID,
        bodyType: item.type,
        parameterName: item.name,
        custom: item.type === 'custom' ? item.value : null,
        sqlQuery: item.type === 'sqlQuery' ? item.value : null,
        hookupAsParameter: 1,
      };
      return this.http.addBodyToHookup(_dto)
    });
    forkJoin(addBodyObservables).subscribe(() => {
      this.currentStep++
    })
    console.log(this.initialHookupID)
  }

  addHeader(){
    const addHeaderObservables = this.headers.map((item) => {
      const _dto: HeaderDTO = {
        hookupBeId: this.initialHookupID,
        headerKey: item.key,
        headerValue: item.value,
        headerType: item.type,
        hookupAsParameter: 1
      };
      return this.http.addHeaderToHookup(_dto)
    });
    forkJoin(addHeaderObservables).subscribe(() => {
      this.router.navigateByUrl('/dashboard')
    })
  }


  ngOnInit(): void {
    this.addNewParamter();
    this.addNewHeader();
  }

}
