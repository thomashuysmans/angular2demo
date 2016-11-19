import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsAsyncPipe } from './contacts-async.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsAsyncPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
     { provide: LOCALE_ID, useValue: "nl-BE" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
