import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { Dashboard } from './dashboard/dashboard.component'

import { routing } from './app.routing';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms'

@NgModule({
    imports: [BrowserModule, routing, HttpModule, FormsModule],
    declarations: [AppComponent, Dashboard],
    bootstrap: [AppComponent]
})

export class AppModule {}