import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'angular-learn-yt8h';
  parentMessage: string = 'Message Changed';
  message!: string;
  fromChildOutput!: string;
  animals = [1, 2, 3, 3, 4, 5];

  @ViewChild(PostComponent) childComp: any;

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.childComp);
    this.message = this.childComp.childMessage;
    let number = this.animals.filter((value) => value === 3);
    // number = [...new Set(this.animals)];
    console.log(number);

    console.log(this.animals);
  }

  reciveMessage($event: any) {
    this.fromChildOutput = $event;
  }
}
