import {Injectable} from "@angular/core";
import {Hookup} from "./hookup";
import {Log} from "./logs";

@Injectable({
  providedIn: 'root'
})

export class State{
  hookups: Hookup[] = [];
  Logs: Log[] = [];
}
