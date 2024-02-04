import { Component } from '@angular/core';

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.css']
})
export class HeadercomponentComponent {

  darkmode=false;

  constructor(){
    this.color1();
  }
  color1(){
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme:light)').matches){
        this.darkmode=true;
        document.documentElement.setAttribute('light-theme', this.darkmode? 'light':'dark');
      }
      else if(window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches){
        this.darkmode=true;
        document.documentElement.setAttribute('dark-theme', this.darkmode? 'dark':'light');
      }
  }
  themetoggle(){
    this.darkmode=!this.darkmode
    document.documentElement.setAttribute('dark-theme',this.darkmode?'dark':'light');
  }
}
