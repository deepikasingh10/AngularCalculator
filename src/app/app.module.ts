import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtoncomponentComponent } from './buttoncomponent/buttoncomponent.component';
import { DisplaycomponentComponent } from './displaycomponent/displaycomponent.component';
import { FormsModule } from '@angular/forms';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { ClearbuttonComponent } from './clearbutton/clearbutton.component';
import { MbuttonComponent } from './mbutton/mbutton.component';
import { PercentilebuttonComponent } from './percentilebutton/percentilebutton.component';
import { DividebuttonComponent } from './dividebutton/dividebutton.component';
import { MultiplybuttonComponent } from './multiplybutton/multiplybutton.component';
import { AddbuttonComponent } from './addbutton/addbutton.component';
import { SubtractbuttonComponent } from './subtractbutton/subtractbutton.component';
import { DecimalbuttonComponent } from './decimalbutton/decimalbutton.component';
import { Button1Component } from './button1/button1.component';
import { Button2Component } from './button2/button2.component';
import { Button3Component } from './button3/button3.component';
import { Button4Component } from './button4/button4.component';
import { Button5Component } from './button5/button5.component';
import { Button6Component } from './button6/button6.component';
import { Button7Component } from './button7/button7.component';
import { Button8Component } from './button8/button8.component';
import { Button9Component } from './button9/button9.component';
import { Button0Component } from './button0/button0.component';
import { BackspacebuttonComponent } from './backspacebutton/backspacebutton.component';
import { EqualbuttonComponent } from './equalbutton/equalbutton.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtoncomponentComponent,
    DisplaycomponentComponent,
    HeadercomponentComponent,
    ClearbuttonComponent,
    MbuttonComponent,
    PercentilebuttonComponent,
    DividebuttonComponent,
    MultiplybuttonComponent,
    AddbuttonComponent,
    SubtractbuttonComponent,
    DecimalbuttonComponent,
    Button1Component,
    Button2Component,
    Button3Component,
    Button4Component,
    Button5Component,
    Button6Component,
    Button7Component,
    Button8Component,
    Button9Component,
    Button0Component,
    BackspacebuttonComponent,
    EqualbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
