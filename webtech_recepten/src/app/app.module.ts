import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RecepttoevoegenComponent } from './recepttoevoegen/recepttoevoegen.component';
import { ReceptService } from './service/recept.service';
import { ReceptlistComponent } from './receptlist/receptlist.component';

@NgModule({
  declarations: [
    AppComponent,
    RecepttoevoegenComponent,
    ReceptlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ReceptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
