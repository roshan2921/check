import { Component } from '@angular/core';
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  getAgeInDogYears(): number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(){}

  person: Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    getAgeInDogYears() {
      return this.age * 7;
    }
  };

  hello(){
    this.person.firstName="Roshan";
    console.log(this.person.firstName)
  }

  title = 'translations';
}
