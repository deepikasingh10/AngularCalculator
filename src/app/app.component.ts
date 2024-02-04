import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  // darkmode=false;

  // constructor(){
  //   this.color1();
  // }
  // color1(){
  //   if(window.matchMedia && window.matchMedia('(prefers-color-scheme:light)').matches){
  //       this.darkmode=true;
  //       document.documentElement.setAttribute('light-theme', this.darkmode? 'light':'dark');
  //     }
  //     else if(window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches){
  //       this.darkmode=true;
  //       document.documentElement.setAttribute('dark-theme', this.darkmode? 'dark':'light');
  //     }
  // }
  // themetoggle(){
  //   this.darkmode=!this.darkmode
  //   document.documentElement.setAttribute('dark-theme',this.darkmode?'dark':'light');
  // }
  // const button = document.querySelector(".theme-toggle");
  // const buttonToggle = document.querySelector(".theme-toggle span");

  // // Changing background color when user clicks on btnSwitch 
  // button.onclick = function () {
  //     buttonToggle.classList.toggle("active-btn");
  //     document.body.classList.toggle("active-dark")
  // }
}

