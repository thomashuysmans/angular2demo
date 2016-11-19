import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { RegistrationReactiveComponent } from './registration-reactive/registration-reactive.component';

@NgModule({
    imports: [
         BrowserModule,
         FormsModule,
         ReactiveFormsModule
         //RegistrationReactiveComponent
    ],
    declarations: [AppComponent, RegistrationReactiveComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}