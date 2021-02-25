import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadData, LoadDataByID } from 'src/app/root-store/home/home.action';
import { LoadData as LoadData2, LoadDataByID   as LoadDataByID2} from 'src/app/root-store/home2/home.action';
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
    this.store.dispatch(new LoadData());
  }
  actionGetDataById(id) {
    this.store.dispatch(new LoadDataByID(id));
  }
  actionGetData2() {
    setTimeout(() => {
      this.store.dispatch(new LoadData2());
    })
  
  }
  actionGetDataById2(id) {
    console.log("2");
    
    this.store.dispatch(new LoadDataByID2(id));
  }
}
