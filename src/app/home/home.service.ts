import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { TopSongs } from './TopSongs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url:string="http://localhost:8080/topSongs";
  constructor(private http:HttpClient) { }

  getTopSongs(): Observable<TopSongs> {
    return this.http.get<TopSongs>(this.url);
  }
}
