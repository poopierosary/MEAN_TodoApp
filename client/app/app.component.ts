import { Component } from '@angular/core';
import { TodoService } from './services/todo.services';

@Component ({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './views/app.component.html',
  providers: [ TodoService ]
})

export class AppComponent { }