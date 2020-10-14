import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-video',
  templateUrl: 'add-video.component.html',
  styleUrls: ['add-video.component.scss'],
})

export class AddVideoComponent implements OnInit {
  public readonly categories: string[] = ['Thriller', 'Criminal', 'Comedy', 'Horror'];
  public readonly videoAuthors: string[] = ['David Munch', 'Li Sun Chi', 'Steven Scorsese'];
  constructor() { }

  ngOnInit(): void {

  }
}
