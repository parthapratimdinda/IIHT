import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  banner:string;
  logo:string;
  imgWidth:number;
  c1:boolean;c2:boolean;c3:boolean;
  constructor(){
  this.banner='Welcome to angular';
  this.logo='assets/rose.jpg';
  this.imgWidth=50;
  this.c1=this.c2=this.c3=false;
}

doOnClick(){
  alert("event binded");
}

}
