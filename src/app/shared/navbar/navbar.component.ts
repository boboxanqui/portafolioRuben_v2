import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { fromEvent, map, Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss'
  ]
})
export class NavbarComponent implements OnInit{

  constructor( private viewport:ViewportScroller ) { }

  ngOnInit(): void {
      this.scrollY$.subscribe( resp => {
        setTimeout( () => this._bigHeader = resp, 100 )
      } )
  }

  private _bigHeader: boolean = false;
  menuCollapsed: boolean = true;

  scrollY$: Observable<boolean> = fromEvent(
    document,'scroll'
    ).pipe(
      map( () => this.viewport.getScrollPosition()[1] != 0)
    )
    
  get bigHeader() {
    return this._bigHeader;
  }
  
  
  // scrollingDown():boolean {
  //   return window.scrollY == 0;
  // }

}
