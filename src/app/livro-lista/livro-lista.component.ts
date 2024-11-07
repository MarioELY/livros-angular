// src/app/livro-lista/livro-lista.component.ts
import { Component, OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { CommonModule } from '@angular/common';  // Importando o CommonModule
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
  imports: [CommonModule]  // Adicionando o CommonModule aqui
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir(codigo: number) {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  }

  obterNome(codEditora: number): string {
    return this.servEditora.getNomeEditora(codEditora);
  }
}
