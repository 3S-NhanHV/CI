import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadData, LoadDataByID } from 'src/app/root-store/home/home.action';
import * as listDataSelector from '../../../root-store/home/home.selector';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private store: Store<any>) { }
  returnData(): Observable<any> {
    return this.store.pipe(select(listDataSelector.getListData));
  }
  actionGetData() {
    console.log("1");
    this.store.dispatch(new LoadData());
  }
  actionGetDataById(id) {
    this.store.dispatch(new LoadDataByID(id));
  }

}
