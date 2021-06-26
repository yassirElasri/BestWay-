import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../model/Categorie';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceCategorieService {

 
  constructor(private http: HttpClient) { }
  public fetchAll(): Observable <Categorie[]>{
return this.http.get<Categorie []>("http://127.0.0.1:8080/categorie/findall");
  }
  public addUser(categorie:Categorie) {
    return this.http.post<Categorie []>("http://127.0.0.1:8080/categorie/add",categorie);
      }
      public deleteUser(id:number) {
        return this.http.delete<Categorie []>("http://127.0.0.1:8080/categorie/delete/"+id);
          }
          public findUser(id:number) {
            return this.http.get<Categorie>("http://127.0.0.1:8080/categorie/find/"+id);
              }
              public updateUser(id:number,categorie:Categorie) {
                return this.http.put<Categorie []>("http://127.0.0.1:8080/categorie/update/"+id,categorie);
                  }
}
