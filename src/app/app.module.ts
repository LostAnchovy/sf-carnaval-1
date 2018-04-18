import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FaqComponent } from './faq/faq.component';
import { MapComponent } from './map/map.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FoodComponent } from './food/food.component';
import { VendorsComponent } from './vendors/vendors.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { DirectionsComponent } from './directions/directions.component';
import { HomeComponent } from './home/home.component';
import { ApiService } from './api.service';
import { FaqQuestionComponent } from './faq-question/faq-question.component';
import { ParadeComponent } from './parade/parade.component';
import { ScheduleEventComponent } from './schedule-event/schedule-event.component';
import { FoodVendorComponent } from './food-vendor/food-vendor.component';
import { SponsorEachComponent } from './sponsor-each/sponsor-each.component';
import { ArtistsComponent } from './artists/artists.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FaqComponent,
    MapComponent,
    ScheduleComponent,
    FoodComponent,
    VendorsComponent, 
    SponsorsComponent, 
    DirectionsComponent,
    SponsorsComponent,
    HomeComponent,
    FaqQuestionComponent,
    ParadeComponent,
    ScheduleEventComponent,
    FoodVendorComponent,
    SponsorEachComponent,
    ArtistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
