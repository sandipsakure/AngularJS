import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public editorValue: String = '';
  enable = false;
  title = 'angular-tour-of-heroes';
  text = 'green';

  action() {
    this.enable  = !this.enable;
    console.log(this.enable);
  }
}
