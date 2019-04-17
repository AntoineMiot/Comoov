 import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';


@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.page.html',
  styleUrls: ['./first-view.page.scss'],
})
export class FirstViewPage implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  logForm(form) {
    console.log(form.value)
  }

  navToSecondPage() {
    this.router.navigateByUrl("/second-view")
  }
 

}
