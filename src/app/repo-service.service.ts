import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable }  from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {
  _URL = 'https://api.github.com/users/';
  token = '?access_token=e4866544abaa08283695036ce4166c84337cc7a5';
  constructor(public  http: HttpClient){
  }
  getRepo(searchTerm: string): Observable<any> {
    return this.http.get(this._URL + searchTerm + '/repos?' + this.token);
  }
}
