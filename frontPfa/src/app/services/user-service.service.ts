import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User} from '../model/User';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  public fetchAll(role:string): Observable <User[]>{
return this.http.get<User []>("http://127.0.0.1:8080/user/findbyRole/"+role);
  }
}
