import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

const MAX_WIDTH_BREAKPOINT = 720;


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
  @Output() toggleSidenav: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  public userLogged: EventEmitter<any> = new EventEmitter();
  public isLoading = false;

  private mediaMatcher: MediaQueryList = matchMedia(
    `(max-width: ${MAX_WIDTH_BREAKPOINT}px)`
  );

  constructor(private dialog: MatDialog) {}

  public logout(): void {
    this.isLoading = true;
    setTimeout(() => {
      window.location.reload();
    }, 500);
    // this.auth.logout();
    // this.userLogged.emit(this.auth.isLoggedIn);
    this.isLoading = false;
  }

  public isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
