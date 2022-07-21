import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
  selector: 'app-section-first',
  templateUrl: './section-first.component.html',
  styleUrls: ['./section-first.component.scss']
})
export class SectionFirstComponent implements OnInit {

  stylesDate = `
    font-size: 35px;
    text-align:center;
    color: #FFF;
    background-color: #231f2087;
    backdrop-filter: blur(4px);
    padding: 13px 20px;
    font-weight: bold;
    min-width:40px;
    margin:0 10px;
  `;

  constructor(private deviceService: DeviceDetectorService) {
    if (deviceService.isMobile()) {
      this.stylesDate = `
        font-size: 25px;
        text-align: center;
        color: #FFF;
        background-color: #231f2087;
        backdrop-filter: blur(4px);
        padding: 8px 15px;
        font-weight: bold;
        min-width: 20px;
        margin:0 1px;
      `
    }
  }

  ngOnInit(): void {

  }

}
