import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { fromEvent, map, Observable } from 'rxjs';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: [`./resume.component.scss`]
})
export class ResumeComponent implements OnInit {

  constructor( private viewport:ViewportScroller ) { }

  ngOnInit(): void {
    // this.scrollY$.subscribe(console.log )

    // console.log(window.innerHeight)
  }

  _heigthScroll: number = 0;

  get heigthScroll() {
    return this._heigthScroll
  }

  scrollY$: Observable<number> = fromEvent(
    document,'scroll'
    ).pipe(
      map( () => this.viewport.getScrollPosition()[1])
    )

}
