import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// tslint:disable-next-line:import-spacing
import {UserDataComponent} from './user-data/user-data.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {UserRepoComponent} from './user-repo/user-repo.component';

const routes: Routes = [

  {path: 'user-list', component: UserDataComponent},
  {path: 'repo-list', component: UserRepoComponent},
  {path: '', redirectTo: '/user-list', pathMatch: 'full'},
  {path: '**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
