import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mb-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Contact submited')
  }

}
