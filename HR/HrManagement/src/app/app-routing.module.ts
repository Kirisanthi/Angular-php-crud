import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate} from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { LoginComponent } from './pages/login/login.component';
import { ViewComponent } from './pages/view/view.component';
import { AuthService as AuthGuard } from '../app/services/auth.service';
import { LoginauthService as LoginAuthGuard } from '../app/services/loginauth.service';
const routes: Routes = [
  // { path : '', component: LoginComponent, pathMatch: 'full', canActivate: [LoginAuthGuard]},
  // { path : 'view', component: ViewComponent, canActivate: [AuthGuard]},
  // { path : 'add', component: AddComponent, canActivate: [AuthGuard]},
  // { path : 'edit/:id', component: EditComponent, canActivate: [AuthGuard]},
  // { path : 'login', component: LoginComponent},

  { path : '', component: LoginComponent},
  { path : 'view', component: ViewComponent},
  { path : 'add', component: AddComponent},
  { path : 'edit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
