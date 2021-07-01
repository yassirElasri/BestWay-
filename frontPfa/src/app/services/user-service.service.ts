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
  public addUser(user:User) {
    return this.http.post<User []>("http://127.0.0.1:8080/user/add",user);
      }
      public findUser(id:number): Observable <User>{
        return this.http.get<User >("http://127.0.0.1:8080/user/find/"+id);
          }
          public updateUser(id:number,user:User) {
            return this.http.put<User []>("http://127.0.0.1:8080/user/update/"+id,user);
              }
              public deleteUser(id:number) {
                return this.http.delete<User []>("http://127.0.0.1:8080/user/delete/"+id);
                  }
                  public countClient() {
                            
                    return this.http.get ("http://127.0.0.1:8080/user/count/client");
                      
                  }
                  public findUserByEmail(email:string): Observable <User>{
                    return this.http.get<User >("http://127.0.0.1:8080/user/findByEmail/"+email);
                      }
}
