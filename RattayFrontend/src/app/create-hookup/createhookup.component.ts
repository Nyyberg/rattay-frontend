import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";


@Component({
  templateUrl: './createhookup.component.html',
  styleUrls: ['./createhookup.component.css'],
})
export class CreatehookupComponent implements OnInit{

  parameters: any[]=[];
  headers: any[]=[];

  constructor(public router: Router) {
  }


  addNewParamter(){
    //add a new parameter to the list
    this.parameters.push({name: ''});
    console.log(this.parameters);

  }

  addNewHeader(){
    this.headers.push({name:''});
  }

  ngOnInit(): void {
    this.addNewParamter();
    this.addNewHeader();
  }

}
