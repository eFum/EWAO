import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second-ex';
  num1: number = 0;
  num2: number = 0;
  result: number = 0;
  operation: string = '+';
  history: any[] = [];

  calculate() {
    switch (this.operation) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result = this.num1 / this.num2;
        break;
    }
    this.history.push({time: new Date(), operation: this.operation, result: this.result});
  }

  deleteHistory(index: number) {
    this.history.splice(index, 1);
  }
}
