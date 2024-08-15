import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from '../login-user';
import { LoginService } from '../login.service';

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

  constructor(private router: Router, private loginService: LoginService) {}

  onLogin():void{
    this.mensagemErro = ''
    const USER: LoginUser = { email: this.usuario, senha: this.senha }
    this.loginService.login(USER).subscribe({
      next: (retorno: any) =>{
        console.log(retorno)
      },
      error: (error) =>{
        console.log(error)
      }
    })
    
    //if (this.usuario === 'admin' && this.senha === '123'){
      //localStorage.setItem('token', this.usuario);
      //this.router.navigate(['/'])
    //} else{
      //this.mensagemErro = 'Usuário e/ou senha inválidos'
    //}
  }
}