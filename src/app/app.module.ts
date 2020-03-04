import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewspageComponent } from './newspage/newspage.component';

import { Routes, RouterModule} from '@angular/router';

const appRoutes = [
  {path: 'home', component: HomepageComponent},
  {path: '', component: HomepageComponent},
  {path: 'news', component: NewspageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NewspageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
