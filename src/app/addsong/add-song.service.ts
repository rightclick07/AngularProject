import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddSongService {
  url:string="http://localhost:8080/artistName";
  postUrl:string="http://localhost:8080/postAddSongData";
  constructor(private http:HttpClient) { }

  getArtistName(): Observable<String> {
    return this.http.get<String>(this.url);
  }
  postFormData(formData:any): Observable<any> {
    return this.http.post(this.postUrl,formData,{responseType:'text'});
  }
}
