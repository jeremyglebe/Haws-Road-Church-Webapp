import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'welcome', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' },
  { path: 'add-belief', loadChildren: './pages/add-belief/add-belief.module#AddBeliefPageModule' },
  { path: 'add-map', loadChildren: './pages/add-map/add-map.module#AddMapPageModule' },
  { path: 'gallery', loadChildren: './pages/gallery/gallery.module#GalleryPageModule' },
  { path: 'add-file', loadChildren: './pages/add-file/add-file.module#AddFilePageModule' },
  { path: 'users', loadChildren: './pages/users/users.module#UsersPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'recordings', loadChildren: './pages/recordings/recordings.module#RecordingsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
