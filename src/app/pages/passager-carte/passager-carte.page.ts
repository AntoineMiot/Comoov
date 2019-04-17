import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-passager-carte',
  templateUrl: './passager-carte.page.html',
  styleUrls: ['./passager-carte.page.scss'],
})
export class PassagerCartePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logForm(form) {
    console.log(form.value)
  }

  navToConducteurCarte(){
    this.router.navigateByUrl("/conducteur-carte");
  }

}
