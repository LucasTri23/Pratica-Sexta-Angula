import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Alunos';
  notaCorteAprovacao = 70;
  notaCorteReprovacao = 30;
  alunos = [
    {
      nome: 'Ana',
      dataNascimento: '19/05/2002',
      curso: 'Tecnologia da Informação',
      semestre: 4,
      unidadeCurricular: 'Usabilidade',
      nota: 95,
    },
    {
      nome: 'Bruno',
      dataNascimento: '03/07/2003',
      curso: 'Banco de Dados',
      semestre: 2,
      unidadeCurricular: 'Algoritmos I',
      nota: 87,
    },
    {
      nome: 'Carla',
      dataNascimento: '28/11/2001',
      curso: 'Redes',
      semestre: 1,
      unidadeCurricular: 'Segurança da Informação',
      nota: 91,
    },
    {
      nome: 'Danilo',
      dataNascimento: '09/03/2000',
      curso: 'ADS',
      semestre: 3,
      unidadeCurricular: 'Ciência de Dados',
      nota: 68,
    },
    {
      nome: 'Eliane',
      dataNascimento: '12/10/2001',
      curso: 'Ciência da Computação',
      semestre: 7,
      unidadeCurricular: 'Ciência de Dados',
      nota: 69,
    },
    {
      nome: 'Ana Clara',
      dataNascimento: '29/10/2003',
      curso: 'ADS',
      semestre: 5,
      unidadeCurricular: 'Usabilidade', 
      nota: 29,
    },
    {
      nome: 'Theo',
      dataNascimento: '28/02/2002',
      curso: 'Sistemas de Informação',
      semestre: 4,
      unidadeCurricular: 'Modelagem', 
      nota: 10,
    },
  ];
}
