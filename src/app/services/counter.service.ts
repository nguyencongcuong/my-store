import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppState } from '../store/models/app-state';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor(private store: Store<AppState>) {}

  getCurrentValue(): Observable<number> {
    return this.store.select(appState => appState.counter.currentValue).pipe(filter(Boolean))
  }
}
