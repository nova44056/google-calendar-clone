import { Component, Input, OnInit, Output } from '@angular/core';
import { PortalBridgeService } from 'src/app/portal-bridge.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  portalBridgeService: PortalBridgeService;

  constructor() {
    this.portalBridgeService = new PortalBridgeService();
  }

  ngOnInit(): void {}
}
