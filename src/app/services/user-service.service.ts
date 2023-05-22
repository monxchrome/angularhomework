import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) {
  }

  getAll():Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(urls.users.full);
  }

  getById(id:number):Observable<IUser>{
    return this.httpClient.get<IUser>(urls.users.byId(id))
  }
}
