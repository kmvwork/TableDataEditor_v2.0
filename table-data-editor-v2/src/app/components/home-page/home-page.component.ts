import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <div class="container">
      <div class="row jumbotron text-center">
        <h1 class="display-4">Редактор Табличных Данных MAXIEDITOR!</h1>
        <p class="lead">Получите удобный способ работы с вашими данными - просто нажмите НАЧАТЬ!</p>
        <hr>
        <p>Введите ваши данные в формате JSON и работайте с ними. </p>
      </div>
      <div class="row">
        <a [routerLink]="['/entry']" class="btn btn-primary btn-lg btn-block" role="button">НАЧАТЬ</a>
      </div>
    </div>
  `
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
