import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { NgForm, NgModel } from '@angular/forms';
//import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Personal Information..';
   persons=[{"name":"hardik","age":"25","salary":"70000","position":"engineer"},
             {"name":"krunal","age":"27","salary":"80000","position":"Devloper"},
            {"name":"pratik","age":"22","salary":"50000","position":"doctor"}];


  deletePerson(i){
    this.persons.splice(i, 1);
    //console.log(i);
  }
  
  // editPerson(){

  // }

 /* name;
  age;
  salary;
  position;

  newName(event: any){
    this.name= event.target.value;
  }
  newAge(event: any){
    this.age= event.target.value;
  }
  newSalary(event: any){
    this.salary= event.target.value;
  }
  newPosition(event: any){
    this.position= event.target.value;
  }*/

  objNew :any = {};

   
add(i){
     this.persons.push(this.objNew);
     console.log(this.persons);
    
      }
  }

