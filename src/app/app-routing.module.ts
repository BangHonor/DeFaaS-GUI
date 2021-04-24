import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'account', loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule) },
  { path: 'faaslevel', loadChildren: () => import('./pages/faaslevel/faaslevel.module').then(m => m.FaaslevelModule) },
  { path: 'funccode', loadChildren: () => import('./pages/funccode/funccode.module').then(m => m.FunccodeModule) },
  { path: 'funcsvc', loadChildren: () => import('./pages/funcsvc/funcsvc.module').then(m => m.FuncsvcModule) },
  { path: 'user-manual', loadChildren: () => import('./pages/user-manual/user-manual.module').then(m => m.UserManualModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
