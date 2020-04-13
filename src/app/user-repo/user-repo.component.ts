import { Component, OnInit } from '@angular/core';
import { RepoServiceService } from '../repo-service.service'
import { RepoModel } from '../repo-model'

@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.css']
})
export class UserRepoComponent implements OnInit {
myRepo :RepoModel[];

  constructor(public reposerv: RepoServiceService) {
   }

   getRepo(searchTerm: string) {
    this.reposerv.getRepo(searchTerm).subscribe(data => {
      this.myRepo = data;
      console.log(this.myRepo);
    });
  }

  ngOnInit(): void {
    this.getRepo('margretmwangi')
  }

}
