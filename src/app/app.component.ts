import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';
  count = 0;

  increase() {
    this.count++;
  }

  decrease() {
    if (this.count > 0) {
      this.count--;
    }
  }
}
