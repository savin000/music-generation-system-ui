import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.less']
})
export class MusicPlayerComponent implements OnInit {

  connectedDeviceName: string = "";

  constructor() { }

  ngOnInit(): void {
    this.connectedDeviceName = "Apple Watch Series 7"
  }

}
