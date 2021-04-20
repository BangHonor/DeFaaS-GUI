import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'account', loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule) },
  { path: 'faaslevel', loadChildren: () => import('./pages/faaslevel/faaslevel.module').then(m => m.FaaslevelModule) },
  { path: 'console', loadChildren: () => import('./pages/console/console.module').then(m => m.ConsoleModule) },
  { path: 'funccode', loadChildren: () => import('./pages/funccode/funccode.module').then(m => m.FunccodeModule) },
  { path: 'funcsvc', loadChildren: () => import('./pages/funcsvc/funcsvc.module').then(m => m.FuncsvcModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
