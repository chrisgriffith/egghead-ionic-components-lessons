import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AstronautsService {
  private _data: Array<{ 'country': string, 'name': string, 'lastName': string, 'gender': string, 'missions': string, 'flag': string }>;
  private _dataURL = 'assets/astronauts.json';

  constructor(
    private http: HttpClient
  ) { }

  loadData(): Observable<any> {
    if (this._data !== undefined && this._data.length !== 0) {
      return of(this._data);
    }
    return this.http.get<any[]>(this._dataURL).pipe(
      map(data => {
        data.forEach(astronaut => {
          astronaut.flag = 'assets/flags/' + this.getFlagAsset(astronaut.country);
        });
        return data;
      }),
      map(data => this._data = data)
    );
  }

  getFlagAsset(theCountry: String): String {
    let flag: String = 'us.svg';

    switch (theCountry) {
      case 'Afghanistan': flag = 'af.svg';
        break;
      case 'Australia': flag = 'au.svg';
        break;
      case 'Austria': flag = 'at.svg';
        break;
      case 'Belgium': flag = 'be.svg';
        break;
      case 'Brazil': flag = 'br.svg';
        break;
      case 'Bulgaria': flag = 'bg.svg';
        break;
      case 'Canada': flag = 'ca.svg';
        break;
      case 'China': flag = 'cn.svg';
        break;
      case 'Costa Rica': flag = 'cr.svg';
        break;
      case 'Cuba': flag = 'cu.svg';
        break;
      case 'Czechoslovakia': flag = 'cz.svg';
        break;
      case 'Denmark': flag = 'dk.svg';
        break;
      case 'East Germany': flag = 'de.svg';
        break;
      case 'France': flag = 'fr.svg';
        break;
      case 'Germany': flag = 'de.svg';
        break;
      case 'Hungary': flag = 'hu.svg';
        break;
      case 'Iceland': flag = 'is.svg';
        break;
      case 'India': flag = 'in.svg';
        break;
      case 'Israel': flag = 'il.svg';
        break;
      case 'Italy': flag = 'it.svg';
        break;
      case 'Japan': flag = 'jp.svg';
        break;
      case 'Kazakhstan': flag = 'kz.svg';
        break;
      case 'Malaysia': flag = 'my.svg';
        break;
      case 'Mexico': flag = 'mx.svg';
        break;
      case 'Mongolia': flag = 'mn.svg';
        break;
      case 'Netherlands': flag = 'nl.svg';
        break;
      case 'Peru': flag = 'pe.svg';
        break;
      case 'Poland': flag = 'af.svg';
        break;
      case 'Russia': flag = 'ru.svg';
        break;
      case 'Saudi Arabia': flag = 'sa.svg';
        break;
      case 'Slovakia': flag = 'sk.svg';
        break;
      case 'Socialist Republic of Romania': flag = 'ro.svg';
        break;
      case 'South Korea': flag = 'kr.svg';
        break;
      case 'Soviet Union': flag = 'ru.svg';
        break;
      case 'Soviet Union/Kazakhstan': flag = 'kz.svg';
        break;
      case 'Soviet Union/Russia': flag = 'ru.svg';
        break;
      case 'Spain': flag = 'es.svg';
        break;
      case 'Switzerland': flag = 'ch.svg';
        break;
      case 'Syria': flag = 'sy.svg';
        break;
      case 'Ukraine': flag = 'ua.svg';
        break;
      case 'United Kingdom': flag = 'gb.svg';
        break;
      case 'United States': flag = 'us.svg';
        break;
      case 'Vietnam': flag = 'vn.svg';
        break;
    }
    return flag;
  }
}
