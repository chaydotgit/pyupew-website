import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet } from "@angular/router";
import { CommissionsComponent } from './commissions/commissions.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { WorkComponent } from './work/work.component';
import { SupportComponent } from './support/support.component';
import { ModalWrapperComponent } from './modal-wrapper/modal-wrapper.component';
import { TosComponent } from './tos/tos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CommissionsComponent,
    HomeComponent,
    FooterComponent,
    WorkComponent,
    SupportComponent,
    ModalWrapperComponent,
    TosComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterOutlet,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
