import { AfterViewInit, Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { HomeService } from 'src/app/core/service/home-service/home-service.service';
import { HomeService  as HomeService2 } from '../../core/service/home-service2/home-service.service';
import { LoaderService } from 'src/app/core/service/loader-service/loader.service';
import { StateService } from '../../core/service/state-service/state-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private stateService: StateService,private homeService2: HomeService2, private homeService: HomeService, private loaderService: LoaderService) { }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.countDown();
    // this.homeService.returnData().subscribe((res) => {
    // });

    this.homeService.actionGetData();
    // this.homeService.actionGetDataById(1);
    // setTimeout(() => {
    //   this.homeService2.actionGetData2();
      this.homeService2.actionGetDataById2(1);
    // },2000)
    // setTimeout (() => {
    //    this.loaderService.show();
    //    this.loaderService.show();
    //    this.loaderService.show();
    //    this.loaderService.show();
    //    setTimeout (() => {
    //     this.loaderService.hide();
    //    },1000);
    //    setTimeout (() => {
    //     this.loaderService.hide();
    //    },20000);
    //    setTimeout (() => {
    //     this.loaderService.hide();
    //    },30000);
    //   this.loaderService.hide();
    // },5000)
     
  }
  showData(){
    this.loaderService.isShowLoader.next(true)
  }
  hiddenData(){
    this.loaderService.isShowLoader.next(false)
  }
  countDown() {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let startProject = "Feb 25, 2021 00:00:00",
      countDown = new Date(startProject).getTime(),
      x = setInterval(() => {

        let now = new Date().getTime(),
          distance = countDown - now;
        document.getElementById("days").innerText = String(Math.floor(distance / (day))),
          document.getElementById("hours").innerText = String(Math.floor((distance % (day)) / (hour))),
          document.getElementById("minutes").innerText = String(Math.floor((distance % (hour)) / (minute))),
          document.getElementById("seconds").innerText = String(Math.floor((distance % (minute)) / second));

        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
            countdown = document.getElementById("countdown"),
            content = document.getElementById("content");

          headline.innerText = "It's my birthday!";
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
  };

}
