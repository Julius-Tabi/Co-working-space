import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'owner-landing',
    loadChildren: () => import('./pages/owner-landing/owner-landing.module').then( m => m.OwnerLandingPageModule)
  },
  {
    path: 'add-space',
    loadChildren: () => import('./pages/add-space/add-space.module').then( m => m.AddSpacePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'profile-add',
    loadChildren: () => import('./pages/profile-add/profile-add.module').then( m => m.ProfileAddPageModule)
  },
  {
    path: 'user-group',
    loadChildren: () => import('./pages/user-group/user-group.module').then( m => m.UserGroupPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
