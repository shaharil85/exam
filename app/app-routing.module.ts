import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'section01',
    loadChildren: () => import('./section01/section01.module').then( m => m.Section01PageModule)
  },
  {
    path: 'section02',
    loadChildren: () => import('./section02/section02.module').then( m => m.Section02PageModule)
  },
  {
    path: 'section03',
    loadChildren: () => import('./section03/section03.module').then( m => m.Section03PageModule)
  },
  {
    path: 'section04',
    loadChildren: () => import('./section04/section04.module').then( m => m.Section04PageModule)
  },
  {
    path: 'section05',
    loadChildren: () => import('./section05/section05.module').then( m => m.Section05PageModule)
  },
  {
    path: 'section06',
    loadChildren: () => import('./section06/section06.module').then( m => m.Section06PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
