import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatFormFieldModule} from "@angular/material/form-field";
import {HttpService} from "../services/http.service";
import {loginDto, User} from "../user";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  _Httpstatus: number | void;
  _username: string = "";
  _password: string = "";


  constructor(private http_: HttpService) {
    this._Httpstatus = 0;
  }

  async login(){
    let dto: loginDto = {
      username: this._username,
      password: this._password
    }
  await this.http_.login(dto).then(() => {}
  ).catch(()=>{})
  }

}

