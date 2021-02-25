import { Component, Input, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/service/loader-service/loader.service';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  isShow: boolean;
  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    // this.loaderService.isShowLoader.subscribe((res: boolean) => {
    //   this.isShow = res;
      
    // })
  }
}
