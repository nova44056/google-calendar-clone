import { TemplatePortal } from '@angular/cdk/portal';
import { Location } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { PortalBridgeService } from 'src/app/portal-bridge.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  portal$: Observable<TemplatePortal>;

  constructor(
    private portalBridge: PortalBridgeService,
    protected location: Location
  ) {}

  protected navigateToToday(): void {
    this.location.replaceState(
      '/calendar/month/' +
        new Date().getFullYear() +
        '/' +
        (new Date().getMonth() + 1) +
        '/' +
        new Date().getDate()
    );
  }

  ngOnInit(): void {
    this.portal$ = this.portalBridge.portal$;
  }
}
