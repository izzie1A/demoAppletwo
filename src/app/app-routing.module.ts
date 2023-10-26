import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemCardListComponent } from './components/item-card-list/item-card-list.component';
import { ItemCardDetailComponent } from './components/item-card-detail/item-card-detail.component';

import { SettingComponent } from './slides/setting/setting.component';
import { AccountComponent } from './slides/account/account.component';
import { HomePageComponent } from './slides/home-page/home-page.component';

const routes: Routes = [
  // { path: '', component: ItemCardListComponent },
  {
    path: 'itemList', component: ItemCardListComponent,
    children: [
      {
        path: ':name', // child route path
        component: ItemCardDetailComponent, // child route component that the router renders
      },
    ],
  },
  { path: 'setting', component: SettingComponent },
  { path: 'account', component: AccountComponent },
  { path: 'home', component: HomePageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
