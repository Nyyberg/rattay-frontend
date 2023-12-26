import {Injectable} from "@angular/core";
import {Hookup} from "./hookup";

@Injectable({
  providedIn: 'root'
})

export class State{
  hookups: Hookup[] = [];
}
