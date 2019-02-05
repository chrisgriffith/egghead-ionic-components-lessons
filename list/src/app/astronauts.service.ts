import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApolloMissionsService {
  private _data: Array<any>;
  private _dataURL = 'assets/apollo.json';

  constructor(
    private http: HttpClient
  ) { }

  loadData(): Observable<any> {
    if (this._data !== undefined && this._data.length !== 0) {
      return of(this._data);
    }
    return this.http.get<any[]>(this._dataURL).pipe(
      map(data => this._data = data)
    );
  }

  getMissionData(theMissionID: number): Observable<any> {
      return of( this._data.filter( _data => _data.id === theMissionID)[0] );
  }
}
