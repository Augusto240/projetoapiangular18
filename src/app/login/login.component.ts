import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    usuario = ''
    senha = ''
    mensagemErro = ''

  constructor(private router: Router) {}

  onLogin():void{
    this.mensagemErro = ''
    if (this.usuario === 'admin' && this.senha === '123'){
      localStorage.setItem('token', this.usuario);
      this.router
    }
  }

}

