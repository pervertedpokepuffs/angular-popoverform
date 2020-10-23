import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DataRow } from './data-row';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdGroupService {
  private adGroupUrl = 'api/rows';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getRows(): Observable<DataRow[]> {
    return this.http.get<DataRow[]>(this.adGroupUrl).pipe(
      tap(_ => this.logMessage('fetched data-rows')),
      catchError(this.handleError<DataRow[]>('get rows'))
    );
  }

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`failed to ${operation}`);
      console.log(error);
      return of(result as T);
    };
  }

  private logMessage(message: string) {
    console.log(`AdGroupService: ${message}`);
  }

}
