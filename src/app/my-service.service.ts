import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GitUser} from './git-user';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  user: GitUser[] = [];
  _URL = 'https://api.github.com/users/';
  token = '?access_token=e4866544abaa08283695036ce4166c84337cc7a5';

  constructor(private http: HttpClient) {
   }
   searchMyUser(searchTerm: string) {
    // tslint:disable-next-line:class-name
    interface data {
      login: string;
      avatar_url: string;
      following: string;
      followers: string;
      public_repos: string;
    }
    return new Promise((resolve, reject) => {
      this.user = [];
      // tslint:disable-next-line:max-line-length
      this.http.get<data>(this._URL + searchTerm + this.token).toPromise().then(
        (results) => {
          // @ts-ignore
          this.user.push(results);
          resolve();
        },
        () => {
          reject();
        }
      );
    });
  }
}
