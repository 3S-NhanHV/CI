import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StateService } from '../../core/service/state-service/state-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private stateService: StateService) { }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.stateService.isShowLoader.next(false);
    }, 2000);
  }

  ngOnInit(): void {
    this.countDown();
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
