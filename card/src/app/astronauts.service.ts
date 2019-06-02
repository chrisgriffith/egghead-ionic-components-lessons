import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApolloMissionsService {
  private data: Array<any>;
  private dataURL = 'assets/apollo.json';

  constructor(
    private http: HttpClient
  ) { }

  loadData(): Observable<any> {
    if (this.data !== undefined && this.data.length !== 0) {
      return of(this.data);
    }
    return this.http.get<any[]>(this.dataURL).pipe(
      map(data => this.data = data)
    );
  }

  getMissionData(theMissionID: number): Observable<any> {
      return of( this.data.filter( data => data.id === theMissionID)[0] );
  }
}
