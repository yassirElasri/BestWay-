import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../model/Produit';
@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {

  constructor(private http: HttpClient) { }
  public fetchAll(): Observable <Produit[]>{
return this.http.get<Produit []>("http://127.0.0.1:8080/produit/findall");
  }
  public addProduit(id:number,formData:FormData):Observable<any> {
    return this.http.post("http://127.0.0.1:8080/produit/add/"+id,formData);
      }
      public deleteProduit(id:number) {
        return this.http.delete<Produit []>("http://127.0.0.1:8080/produit/delete/"+id);
          }
          public findProduit(id:number) {
            return this.http.get<Produit>("http://127.0.0.1:8080/produit/find/"+id);
              }
              public updateProduit(id:number,idCat:number,formData:FormData) {
                return this.http.put<Produit []>("http://127.0.0.1:8080/produit/update/"+id+"/"+idCat,formData);
                  }
                  public findProduitByCat(nom:string): Observable <Produit[]>{
                    return this.http.get<Produit []>("http://127.0.0.1:8080/produit/produitByCat/"+nom);
                      }
                      public findProduitByNom(nom:string): Observable <Produit[]>{
                        return this.http.get<Produit []>("http://127.0.0.1:8080/produit/produitByName/"+nom);
                          }
}
