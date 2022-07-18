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
      this.scrollY$.subscribe( scrollY => {
        if( scrollY > 200 ){
          this._litHeader = true;
        }
        if( scrollY == 0 ){
          this._litHeader = false;
        }
      } )
  }

  private _litHeader: boolean = false;
  menuCollapsed: boolean = true;

  scrollY$: Observable<number> = fromEvent(
    document,'scroll'
    ).pipe(
      map( () => this.viewport.getScrollPosition()[1])
    )
    
  get litHeader() {
    return this._litHeader;
  }
  
  
  // scrollingDown():boolean {
  //   return window.scrollY == 0;
  // }

}
