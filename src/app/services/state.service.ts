import { Injectable } from '@angular/core';
import { State } from '../shared/state';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';


@Injectable({
  providedIn: 'root'
})
export class StateService {

  no:number= 0;

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  getStates(): Observable<State[]>{
    return this.http.get<State[]>(baseURL)
            .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getState(id: String): Observable<State> {
    switch(id) {
      case "IN-MH": {
         this.no=0;
         break;
      }
      case "IN-TN": {
         this.no=1;
         break;
      }
      case "IN-DL": {
        this.no=2;
        break;
      }
      case "IN-GJ": {
        this.no=3;
        break;
      }
      case "IN-RJ": {
        this.no=4;
        break;
      }
      case "IN-UP": {
        this.no=5;
        break;
      }
      case "IN-MP": {
        this.no=6;
        break;
      }
      case "IN-UNK": {
        this.no=7;
        break;
      }
      case "IN-WB": {
        this.no=8;
        break;
      }
      case "IN-KA": {
        this.no=9;
        break;
      }
      case "IN-BR": {
        this.no=10;
        break;
      }
      case "IN-AP": {
        this.no=11;
        break;
      }
      case "IN-HR": {
        this.no=12;
        break;
      }
      case "IN-TG": {
        this.no=13;
        break;
      }
      case "IN-JK": {
        this.no=14;
        break;
      }
      case "IN-OR": {
        this.no=15;
        break;
      }
      case "IN-PB": {
        this.no=16;
        break;
      }
      case "IN-AS": {
        this.no=17;
        break;
      }
      case "IN-KL": {
        this.no=18;
        break;
      }
      case "IN-UT": {
        this.no=19;
        break;
      }
      case "IN-JH": {
        this.no=20;
        break;
      }
      case "IN-CT": {
        this.no=21;
        break;
      }
      case "IN-TR": {
        this.no=22;
        break;
      }
      case "IN-HP": {
        this.no=23;
        break;
      }
      case "IN-CH": {
        this.no=24;
        break;
      }
      case "IN-GA": {
        this.no=25;
        break;
      }
      case "IN-MN": {
        this.no=26;
        break;
      }
      case "IN-NL": {
        this.no=27;
        break;
      }
      case "IN-PY": {
        this.no=28;
        break;
      }
      case "IN-LK": {
        this.no=29;
        break;
      }
      case "IN-AR": {
        this.no=30;
        break;
      }
      case "IN-AN": {
        this.no=31;
        break;
      }
      case "IN-ML": {
        this.no=32;
        break;
      }
      case "IN-MZ": {
        this.no=33;
        break;
      }
      case "IN-DN": {
        this.no=34;
        break;
      }
      case "IN-SK": {
        this.no=35;
        break;
      }
      case "IN-LD": {
        this.no=36;
        break;
      }
      case "IN-DD": {
        this.no=37;
        break;
      }
      default: {
         this.no=38;
         break;
      }
   }

    return this.http.get<State>(baseURL + "/?id=" + id).pipe(map(state => state[this.no]))
            .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getStateIds(): Observable<string[] | any> {
  return this.getStates().pipe(map(states => states[this.no]))
          .pipe(catchError(error => error));
  }

}
