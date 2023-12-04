import {User} from "../user";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class HelperService{
  user_: User = {
    username: "",
  };

  constructor() {}

  setUser(user_: User){
    this.user_ = user_;
  }

  getUser(){
    return this.user_;
  }
}
