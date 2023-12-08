import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-section-second',
  templateUrl: './section-second.component.html',
  styleUrls: ['./section-second.component.scss']
})
export class SectionSecondComponent {
  @ViewChild('audioPlayer') audioPlayer: ElementRef | any;

  isClick = true;

  constructor(private renderer: Renderer2) {}

  playAudio() {
    try {
      console.log(this.audioPlayer);
      this.isClick && this.audioPlayer.nativeElement.play()
      this.isClick = false
    } catch {
      this.isClick = true
    }
  }

  ngAfterViewInit() {
    this.renderer.listen('document', 'touchstart', () => {
      this.playAudio();
    });
  }
}
