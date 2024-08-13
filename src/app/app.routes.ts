import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { EditarComponent } from './editar/editar.component';
import { ListagemComponent } from './listagem/listagem.component';
import { LoginComponent } from './login/login.component';
import { NovoComponent } from './novo/novo.component';

export const routes: Routes = [
    { path: 'listagem', component: ListagemComponent, canActivate: [authGuard] },
    { path: 'novo', component: NovoComponent },
    { path: 'editar', component: EditarComponent },
    { 
        path: 'login',
        loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) 
    },
    { path: '', pathMatch: 'full', redirectTo: 'listagem' } // Corrigido o redirecionamento
];
