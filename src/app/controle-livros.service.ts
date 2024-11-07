// src/app/controle-livros.service.ts
import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Livro 1', resumo: 'Resumo do livro 1', autores: ['Autor 1'] },
    { codigo: 2, codEditora: 2, titulo: 'Livro 2', resumo: 'Resumo do livro 2', autores: ['Autor 2', 'Autor 3'] },
    { codigo: 3, codEditora: 3, titulo: 'Livro 3', resumo: 'Resumo do livro 3', autores: ['Autor 4'] }
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = this.livros.length > 0 ? Math.max(...this.livros.map(l => l.codigo)) + 1 : 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index >= 0) this.livros.splice(index, 1);
  }
}
