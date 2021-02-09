import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';

const MAX_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @ViewChild('sidenav') public sidenav: MatSidenav;
  @Output() public userLogged: EventEmitter<any> = new EventEmitter<any>();
  public links: { name: string; url: string; icon?: string }[] = [
    {
      name: 'Facturi',
      url: 'add-joke',
      icon: 'child_care',
    },
    {
      name: 'Rapoarte',
      url: 'list-jokes',
      icon: 'format_list_bulleted',
    },
    {
      name: 'Chitante',
      url: 'calendar',
      icon: 'event_note',
    },
  ];

  private mediaMatcher: MediaQueryList = matchMedia(
    `(max-width: ${MAX_WIDTH_BREAKPOINT}px)`
  );

  constructor(private router: Router, private route: ActivatedRoute) {}

  public isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

  // public onNavigateTo(url: string): void {
  //   this.router.navigate(['/dashboard', url], { relativeTo: this.route });
  //   console.log('url', url);
  //   // this.sidenav.close();
  // }
}
