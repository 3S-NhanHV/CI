import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isShowLoader = new BehaviorSubject(true);


  constructor() {
    this.isShowLoader.subscribe((el) => {
      console.log(el)
    })
  }

  show() {
    this.isShowLoader.next(false);
  }

  hide() {
    this.isShowLoader.next(true);
  }
}
