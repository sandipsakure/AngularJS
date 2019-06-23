import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  // Behavior Subject

  // a is an initial value. if there is a subscription
  // after this, it would get "a" value immediately
  bSubject = new BehaviorSubject('a');

  constructor() {
    this.getValue();
  }

  getValue() {
    this.bSubject.next('d'); // Subscription got d
  }

}
