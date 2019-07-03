import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { del } from 'selenium-webdriver/http';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
@Input() email;
// isRemoved : boolean = true;
@Output() test: EventEmitter<string> = new EventEmitter<string>()
  constructor() { } 

  ngOnInit() {
  }
    // We want to hide circle when we click the email component
  onClick(){
    // var element = document.getElementById('fa-circle');
    // element.style.visibility= 'hidden';
    console.log('hide circle');
    
  }
}
