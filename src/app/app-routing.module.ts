import { NgModule } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { CommissionsComponent } from "./commissions/commissions.component";
import { RouterModule, Routes } from "@angular/router";
import { WorkComponent } from "./work/work.component";

const routes: Routes = [
  { path: '', component: HomeComponent, title: "Pyupew ♡ Home"},
  { path: 'home', component: HomeComponent, title: "Pyupew ♡ Home"},
  { path: 'commissions', component: CommissionsComponent, title: "Pyupew ♡ Commissions"},
  { path: 'work', component: WorkComponent, title: "Pyupew ♡ Works"}
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
