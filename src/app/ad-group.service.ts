import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DataRow } from './data-row';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class AdGroupService {
  private adGroupUrl = 'api/rows';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private logService: LogService
  ) { }

  getRows(): Observable<DataRow[]> {
    return this.http.get<DataRow[]>(this.adGroupUrl).pipe(
      tap(_ => this.logMessage('fetched data-rows')),
      catchError(this.handleError<DataRow[]>('get rows'))
    );
  }

  updateRow(data: DataRow): Observable<any> {
    this.logService.log('updating row');
    return this.http.put(this.adGroupUrl, data, this.httpOptions).pipe(
      tap(_ => this.logMessage(`updated row id=${data.id}`),
      catchError(this.handleError<any>('updateRow')))
    );
  }

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.logService.log(`failed to ${operation}`);
      this.logService.log(error);
      return of(result as T);
    };
  }

  private logMessage(message: string) {
    this.logService.log(`AdGroupService: ${message}`);
  }

}
