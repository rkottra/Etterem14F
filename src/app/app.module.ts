import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FejlecComponent } from './fejlec/fejlec.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { EtlapComponent } from './etlap/etlap.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FejlecComponent,
    FooldalComponent,
    KapcsolatComponent,
    EtlapComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
