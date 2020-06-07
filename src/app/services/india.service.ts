import { Injectable } from '@angular/core';
import { India } from '../shared/india';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL1 } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class IndiaService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  getIndiaData(): Observable<India>{
    return this.http.get<India>(baseURL1)
            .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
