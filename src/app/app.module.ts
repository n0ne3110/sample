import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'primeng-lts/carousel';
import { ButtonModule } from 'primeng-lts/button';
import { ShopsComponent } from './shops/shops.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { CardModule } from 'primeng-lts/card';
import { SidebarModule } from 'primeng-lts/sidebar';
import { DialogModule } from 'primeng-lts/dialog';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ShopsComponent,
    ServicesComponent,
    HomeComponent,
    AppointmentsComponent,
    PortfolioComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CarouselModule,
    CalendarModule,
    ButtonModule,
    CardModule,
    DialogModule,
    SidebarModule,
    AccordionModule,
    TableModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    MultiSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
