import {Injectable} from "@angular/core";
import {Log} from "./logs";
import {Hookup} from "./hookup";

@Injectable({
  providedIn: 'root'
})

export class State{
  hookups: Hookup[] = [];
  Logs: Log[] = [];
}
