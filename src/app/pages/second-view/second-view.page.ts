import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.page.html',
  styleUrls: ['./second-view.page.scss'],
})
export class SecondViewPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logForm(form) {
    console.log(form.value)
  }

  navToFirstPage() {
    this.router.navigateByUrl("/first-view")
  }

  navToThirdPage() {
    this.router.navigateByUrl("/third-view");
  }

}
