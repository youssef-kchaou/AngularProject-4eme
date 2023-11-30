import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormResidenceComponentComponent } from './Core/form-residence-component/form-residence-component.component';
import { ResidencesComponent } from './Core/manage residence/residences/residences.component';
import { DeltailResidenceComponent } from './Core/deltail-residence/deltail-residence.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { ApartmentsComponent } from './Core/apartments/apartments.component';
import { ApartFormComponent } from './Core/manageApp/apart-form/apart-form.component';

const routes: Routes = [
  { path: 'home', component: ResidencesComponent },
  {path:'app/:id',component:ApartmentsComponent},
  { path: 'addResidence', component: FormResidenceComponentComponent },
  { path: 'detail/:id', component: DeltailResidenceComponent },
  { path: '404', component: NotfoundComponent },
  { path: 'addapp', component: ApartFormComponent },
  {path:'**',redirectTo:'404',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
