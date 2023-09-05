import { NgModule } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { CommissionsComponent } from "./commissions/commissions.component";
import { RouterModule, Routes } from "@angular/router";
import { WorkComponent } from "./work/work.component";
import { SupportComponent} from "./support/support.component";
import {ModalWrapperComponent} from "./modal-wrapper/modal-wrapper.component";
import {TosComponent} from "./tos/tos.component";

const routes: Routes = [
  { path: '', component: HomeComponent, title: "Pyupew ♡ Home"},
  { path: 'home', component: HomeComponent, title: "Pyupew ♡ Home"},
  { path: 'commissions', component: CommissionsComponent, title: "Pyupew ♡ Commissions", children: [
      { path: 'tos', component: ModalWrapperComponent, data: { component: TosComponent } }
    ]},
  { path: 'work', component: WorkComponent, title: "Pyupew ♡ Works"},
  { path: 'support', component: SupportComponent, title: "Pyupew ♡ Support"}
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
