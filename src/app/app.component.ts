import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invitation-married';

  isResponsive = false

  constructor(private deviceService: DeviceDetectorService) {
    this.isResponsive = this.deviceService.isMobile() || this.deviceService.isTablet()
  }
}
