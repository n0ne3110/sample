import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopsComponent } from './shops/shops.component';
import { ServicesComponent } from './services/services.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';



const routes: Routes = [
  {
    path: 'shops',
    component: ShopsComponent,
    pathMatch: 'full'
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'appointment',
    component: AppointmentsComponent,
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent,
  },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }