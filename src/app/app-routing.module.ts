import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'welcome', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
