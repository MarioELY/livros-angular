// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

const routes: Routes = [
  { path: 'lista', component: LivroListaComponent },
  { path: 'dados', component: LivroDadosComponent },
  { path: '', redirectTo: '/lista', pathMatch: 'full' }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    ControleEditoraService,
    ControleLivrosService
  ]
};
