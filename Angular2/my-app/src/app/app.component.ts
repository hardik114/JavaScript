import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
  Hi=false;
  clr=false;
  rad=false;
  h=false;
  w=false;
  rd=false;
  yl=false;
  gn=false;
  values1 ;
  values ;
  values2;
  result;
  cal;
  
 
  hide(){
    this.Hi=true;
  }
  show(){
    this.Hi=false;
  }
  colorChange(){
    this.clr=true;
  }  
  crcl(){
    this.rad=true;
  }
  squr(){
    this.rad=false;
  }
  Dsize(){
    this.h=true;
    this.w=true;
  }
  original(){
    this.h=false;
    this.w=false;
  }
  toggle(){
    if(this.Hi==false){this.Hi=true}
    else if(this.Hi==true){this.Hi=false}
  }



// Calculator:-
  onKey1(event: any) { 
    this.values1 = Number(event.target.value);
    //console.log(this.values1);
  }
  onKey(event: any){
    this.values = Number(event.target.value);
  }
  
  xyz(x){
    if(x=="+"){this.result = this.values + this.values1;}
    else if(x=="-"){this.result = this.values - this.values1;}
    else if(x=="*"){this.result = this.values * this.values1;}
    else if(x=="/"){this.result = this.values / this.values1;}
    else if(x=="%"){this.result = this.values % this.values1;}
  }
  
  
  /*
  add(){
    console.log(this.values1);
    console.log(this.values);
    this.result = this.values + this.values1;
  }
  sub(){
    this.result = this.values - this.values1;
  }
  mul(){
    this.result = this.values * this.values1;
  }
  div(){
    this.result = this.values / this.values1;
  }
  mod(){
    this.result = this.values % this.values1;
  }*/





 // Trafic Signal
  rfun(){
   
    if(this.rd==false){this.rd=true;
                      this.yl=false;
                      this.gn=false;}
  
  }
  yfun(){
    if(this.yl==false){this.yl=true;
                      this.rd=false;
                      this.gn=false;}
   
  }
  gfun(){
    if(this.gn==false){this.gn=true;
                      this.yl=false;
                      this.rd=false;}
    
  }
 
}
