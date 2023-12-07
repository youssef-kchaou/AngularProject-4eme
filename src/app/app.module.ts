import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidencesComponent } from './Core/manage residence/residences/residences.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormResidenceComponentComponent } from './Core/form-residence-component/form-residence-component.component';
import { ApartmentComponentComponent } from './Core/apartment-component/apartment-component.component';
import { DeltailResidenceComponent } from './Core/deltail-residence/deltail-residence.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { ApartmentsComponent } from './Core/apartments/apartments.component';
import { ApartFormComponent } from './Core/manageApp/apart-form/apart-form.component';
import { ErrorsComponent } from './shared/errors/errors.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    NavbarComponent,
    FormResidenceComponentComponent,
    ApartmentComponentComponent,
    DeltailResidenceComponent,
    NotfoundComponent,
    ApartmentsComponent,
    ApartFormComponent,
    ErrorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
