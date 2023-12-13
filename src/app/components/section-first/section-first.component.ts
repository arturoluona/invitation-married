import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-first',
  templateUrl: './section-first.component.html',
  styleUrls: ['./section-first.component.scss']
})

export class SectionFirstComponent implements OnInit {

  stylesDate = `
    font-size: 25px;
    text-align: center;
    color: #FFF;
    text-shadow: black 0.1em 0.1em 0.2em;
    border-radius: 12px;
    padding: 8px 15px;
    font-weight: bold;
    min-width: 20px;
    margin:0 1px;
  `

  date = new Date(2023, 11, 25, 15).getTime()
  parsedDate = 0

  constructor() {
  }

  ngOnInit(): void {
    this.parsedDate = parseInt(String(this.date).slice(0, -3))
  }

}
