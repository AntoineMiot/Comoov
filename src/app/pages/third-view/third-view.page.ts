import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third-view',
  templateUrl: './third-view.page.html',
  styleUrls: ['./third-view.page.scss'],
})
export class ThirdViewPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logForm(form) {
    console.log(form.value)
  }

  navToSecondPage() {
    this.router.navigateByUrl('/second-view');
  }

  navToFourthPage() {
    this.router.navigateByUrl('/fourth-view');
  }

}
