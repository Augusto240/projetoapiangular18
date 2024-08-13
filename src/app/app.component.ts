import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importar apenas RouterOutlet
import { Router } from '@angular/router'; // Certifique-se de que Router está importado corretamente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Apenas RouterOutlet aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrigido de styleUrl para styleUrls
})
export class AppComponent {
  title = 'projetoapiangular';

  constructor(private router: Router) {}

  logoff(event: MouseEvent): void {
    event.preventDefault();
    localStorage.clear();
  }
}
