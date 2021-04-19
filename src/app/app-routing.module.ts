import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'account', loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule) },
  { path: 'faaslevel', loadChildren: () => import('./pages/faastoken/faastoken.module').then(m => m.FaastokenModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
