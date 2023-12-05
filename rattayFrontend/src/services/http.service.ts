import { Injectable } from '@angular/core';
import axios from 'axios';
import {jwtDecode} from "jwt-decode";
import {loginDto, User} from "../user";
import {HelperService} from "./helper.service";

export const customAxios = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    Authorization: `bearer ${localStorage.getItem('token')}`
  }
}
)


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  _username: string = "";

  constructor(private helper_: HelperService) { }

  async login(dto_: loginDto){
    const result = await customAxios.post('login', dto_);
    localStorage.setItem('token', result.data);
    let t = jwtDecode(result.data) as User;
    this.helper_.setUser(t);
    this._username = t.username;
  }
}
