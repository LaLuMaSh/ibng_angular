import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserOverviewComponent } from './components/user/user-overview/user-overview.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LogoutComponent } from './components/user/logout/logout.component';
import { Feed } from './model/feed';
import { FeedComponent } from './components/feed/feed.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    component: UserOverviewComponent,
    canActivate: [AuthGuardService]
  },
  {path: 'login', component: LoginComponent},
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'user', loadChildren: () => import('./components/user/user.module')
      .then(mod => mod.UserModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'feed',
    component: FeedComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
