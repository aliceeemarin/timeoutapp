import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IdleService } from './idle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'timeoutapp';
  constructor(private router: Router, private idleService: IdleService) {
  }
  ngOnInit(): void {
    this.initialIdleSettings();
  }
  /*Alert, change to modal window */
  private initialIdleSettings() {
    const idleTimeoutInSeconds: number = environment.idleTimeInMinutes * 60;
    this.idleService.startWatching(idleTimeoutInSeconds).subscribe((isTimeOut: boolean) => {
      if (isTimeOut) {
        alert("Session timeout. It will redirect to login page.");
      }
    });
  }
}