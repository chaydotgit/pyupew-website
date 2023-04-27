import { NgModule } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { CommissionsComponent } from "./commissions/commissions.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', component: HomeComponent, title: "Pyupew ♡ Home"},
  { path: 'home', component: HomeComponent, title: "Pyupew ♡ Home"},
  { path: 'commissions', component: CommissionsComponent, title: "Pyupew ♡ Commissions"},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
