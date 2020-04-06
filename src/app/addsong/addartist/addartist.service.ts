import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddartistService {
  postUrl:string="http://localhost:8080/postAddArtistData";
  constructor(private http:HttpClient) { }

  
  postFormData(formData:any): Observable<any> {
    return this.http.post(this.postUrl,formData,{responseType:'text'});
  }
}
