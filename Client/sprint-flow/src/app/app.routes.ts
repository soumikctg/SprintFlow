import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';
import {ProjectsComponent} from './projects/projects.component';
import {UsersComponent} from './users/users.component';
import {BoardComponent} from './board/board.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'again',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path : 'users',
        component: UsersComponent
      },
      {
        path: 'board',
        component: BoardComponent
      }
      ]
  }
];
