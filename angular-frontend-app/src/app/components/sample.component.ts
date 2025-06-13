import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  title: string = 'Sample Component';
  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}