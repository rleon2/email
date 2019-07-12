import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { del } from 'selenium-webdriver/http';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { createInjectable } from '@angular/compiler/src/core';
import { getLocaleExtraDayPeriodRules } from '@angular/common';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

public show:boolean=true;
@Input() email;
// isRemoved : boolean = true;
@Output() test: EventEmitter<string> = new EventEmitter<string>()
  constructor() { } 

  ngOnInit() {
  }

  onClick(){
    this.show= !this.show
  }

    // We want to hide circle when we click an email component

}
