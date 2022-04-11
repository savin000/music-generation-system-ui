import {Component, OnInit} from '@angular/core';
import {TrackerDataService} from "../../services/tracker-data.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

    connectedDeviceName: string = "";
    meanBpmValue: number = 160;
    isMusicPlaying: boolean = false;
    audio = new Audio();

    constructor(private trackerDataService: TrackerDataService) {
    }

    public heartRateChartData = [
        {data: [65, 59, 80, 81, 56, 55, 40]},
    ];
    public heartRateChartLabels = ['15:10', '15:11', '15:12', '15:13', '15:15'];
    public heartRateChartOptions = {
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
        this.audio.src = "../../../assets/sample4.wav"
        this.audio.load();

        this.trackerDataService.getSimulatedTrackerData().subscribe(trackerData => {
            let heartRate: number[] = []
            trackerData.data.forEach(record => {
                this.heartRateChartLabels.push(record.hour + ':' + record.minutes)
                heartRate.push(record.bpm)
            })

        });


    }

    musicPlayerButtonClicked() {
        if (!this.isMusicPlaying) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
        this.isMusicPlaying = !this.isMusicPlaying;
    }
}
