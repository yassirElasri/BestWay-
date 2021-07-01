import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Achat } from '../model/Achat';
@Injectable({
  providedIn: 'root'
})
export class AchatServiceService {

  constructor(private http: HttpClient) { }
  public fetchAll(): Observable <Achat[]>{
    return this.http.get<Achat []>("http://127.0.0.1:8080/achat/findall");
      }
      public addAchat(formData:FormData):Observable<any> {
        return this.http.post("http://127.0.0.1:8080/achat/add/",formData);
          }
          public countCommandes(){
            return this.http.get ("http://127.0.0.1:8080/achat/count");
          }
}
