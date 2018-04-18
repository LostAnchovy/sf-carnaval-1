import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { MapComponent } from './map/map.component';
import { ParadeComponent } from './parade/parade.component';
import { FoodComponent } from './food/food.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { VendorsComponent } from './vendors/vendors.component';
import { DirectionsComponent } from './directions/directions.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { HomeComponent } from './home/home.component';
import { ArtistsComponent } from './artists/artists.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'map', component: MapComponent},
  { path: 'parade', component: ParadeComponent},
  { path: 'food', component: FoodComponent},
  { path: 'schedule', component: ScheduleComponent},
  { path: 'vendors', component: VendorsComponent}, 
  { path: 'directions', component: DirectionsComponent}, 
  { path: 'sponsors', component: SponsorsComponent},
  { path: 'artists', component: ArtistsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  exports: [RouterModule]
})
export class AppRoutingModule { }
