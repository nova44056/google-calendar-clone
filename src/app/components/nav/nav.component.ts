import { TemplatePortal } from '@angular/cdk/portal';
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

  constructor(private portalBridge: PortalBridgeService) {}

  ngOnInit(): void {
    this.portal$ = this.portalBridge.portal$;
  }
}
