import { Component } from '@angular/core';
import { Action } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  message: string;
}

export function simpleReducer(state: string = 'Hello world', action: Action) {
  console.log(action.type, state)

  switch (action.type) {
    case 'SPANISH':
      return state = 'Hola Mundo'

    case 'FRENCH':
      return state = 'Bonjour le monde'

    default:
      return state;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-01';
  message$: Observable<string>

  constructor(public store: Store<AppState>) {
    this.message$ = this.store.select('message')
  }

  spanishMessage() {
    this.store.dispatch({ type: 'SPANISH' })
  }
  frenchMessage() {
    this.store.dispatch({ type: 'FRENCH' })
  }


}
