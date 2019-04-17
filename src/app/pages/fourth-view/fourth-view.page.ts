import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fourth-view',
  templateUrl: './fourth-view.page.html',
  styleUrls: ['./fourth-view.page.scss'],
})
export class FourthViewPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navToThirdPage() {
    this.router.navigateByUrl('/third-view');
  }

  navToPassagerCarte() {
    this.router.navigateByUrl('/passager-carte')
  }

  navToConducteurCarte() {
    this.router.navigateByUrl('/conducteur-carte')
  }

}
