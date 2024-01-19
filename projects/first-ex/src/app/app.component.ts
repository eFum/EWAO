import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-ex';
  name = '';
  fontSize = '16';
  textAlign = 'center';
  fonts = ['Arial', 'Verdana', 'Helvetica', 'Tahoma', 'Trebuchet MS'];
  font = this.fonts[0];

  updateName(value: string) {
    this.name = value.toUpperCase();
  }

  updateFontSize(value: string) {
    this.fontSize = value;
  }

  updateFont(value: string) {
    this.font = value;
  }

  updateTextAlign(value: string) {
    this.textAlign = value;
  }
}
