import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page"

@Component({
  selector: "my-app",
  template: `<page-router-outlet></page-router-outlet>
  `
})
export class AppComponent implements OnInit {
  
  constructor(
    private page: Page
  ){}

  ngOnInit(){
    this.page.actionBarHidden = true;
  }

}
