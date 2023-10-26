import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { providePerformance, getPerformance } from '@angular/fire/performance';
import { provideStorage, getStorage } from '@angular/fire/storage';

import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemCardListComponent } from './components/item-card-list/item-card-list.component';
import { ItemCardDetailComponent } from './components/item-card-detail/item-card-detail.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { SettingComponent } from './slides/setting/setting.component';
import { AccountComponent } from './slides/account/account.component';
import { HomePageComponent } from './slides/home-page/home-page.component';
import { AboutUsComponent } from './slides/about-us/about-us.component';
import { EmployersComponent } from './slides/employers/employers.component';
import { CanadiatesComponent } from './slides/canadiates/canadiates.component';
import { JobsComponent } from './slides/jobs/jobs.component';
import { ContactComponent } from './slides/contact/contact.component';
import { BlogComponent } from './slides/blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemCardListComponent,
    ItemCardComponent,
    NavBarComponent,
    SettingComponent,
    AccountComponent,
    HomePageComponent,
    ItemCardDetailComponent,
    AboutUsComponent,
    EmployersComponent,
    CanadiatesComponent,
    JobsComponent,
    ContactComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
