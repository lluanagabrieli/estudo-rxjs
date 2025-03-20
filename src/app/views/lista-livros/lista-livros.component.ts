import { Component, inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Livro } from 'src/app/models/interfaces';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {
  livroService = inject(LivroService);

  listaLivros: Livro[];
  campoBusca: string = '';
  subscription: Subscription;
  livro: Livro;

  buscarLivros() {
    this.subscription = this.livroService.buscar(this.campoBusca).subscribe({
      next: items => {
        this.listaLivros = this.livrosResultadoParaLivros(items);
        console.log(this.listaLivros)
      },
      error: err => console.log(err),
    });
  }

  livrosResultadoParaLivros(items): Livro[] {
    const livros: Livro[] = [];

    items.forEach(item => {
      livros.push(
        this.livro = {
          title: item.volumeInfo?.title,
          authors: item.volumeInfo?.authors,
          publisher: item.volumeInfo?.publisher,
          publishedDate: item.volumeInfo?.publishedDate,
          description: item.volumeInfo?.description,
          previewLink: item.volumeInfo?.previewLink,
          thumbnail: item.volumeInfo?.imageLinks?.thumbnail
        }
      )
    })

    return livros
  }


  // Assim que o componente é destruído, não haverá mais respostas do observable, a menos que esse componente esteja sendo consumido novamente, garantindo que não existam recursos ou processos desnecessários ativos depois que o componente não for mais necessário
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}



