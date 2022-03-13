import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  connectedDeviceName: string = "";
  meanBpmValue: number = 160;
  isMusicPlaying: boolean = false;

  constructor() { }

  public heartRateChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40] },
  ];
  public heartRateChartLabels = ['15:10', '15:11', '15:12', '15:13', '15:15'];
  public heartRateChartOptions= {
    responsive: true,

    borderWidth: 4,
    backgroundColor: '#FFFFFF',
    borderColor: '#5F7AEA',
    color: '#299EA5',
    pointHoverBorderColor: '#5F7AEA',
    pointHoverBorderWidth: 3,
    pointHoverRadius: 7,
    pointBackgroundColor: '#FFFFFF',
    pointBorderColor: '#5F7AEA',
    pointBorderWidth: 3,
    pointRadius: 7,
  };
  public heartRateChartLegendVisible = false;
  public heartRateChartPlugins = [];

  ngOnInit(): void {
    this.connectedDeviceName = "Apple Watch Series 7";
  }

  musicPlayerButtonClicked() {
    this.isMusicPlaying = !this.isMusicPlaying;
  }
}
