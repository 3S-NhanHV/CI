import { Component, Input, OnInit } from '@angular/core';
import { StateService } from '../../core/service/state-service/state-service.service';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  isShow: boolean;
  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.isShowLoader.subscribe((res: boolean) => {
      this.isShow = res;
    })
  }
  onShowLoading() {
    this.isShow = true;
  }
  hiddenLoading() {
    this.isShow = false;
  }
}
