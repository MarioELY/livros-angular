// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule]  // Importando RouterModule para usar router-outlet
})
export class AppComponent {
  title = 'Catálogo de Livros';
}
