import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-displaycomponent',
  templateUrl: './displaycomponent.component.html',
  styleUrls: ['./displaycomponent.component.css']
})
export class DisplaycomponentComponent {
@Input() showInput:string="";
@Input() showOutput:string="";
}
