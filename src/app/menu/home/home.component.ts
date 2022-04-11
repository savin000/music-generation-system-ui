import {Component, OnInit} from '@angular/core';
import {TrackerDataService} from "../../services/tracker-data.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

    connectedDeviceName: string = "";
    meanBpmValue: number = 0;
    isMusicPlaying: boolean = false;
    audio = new Audio();

    constructor(private trackerDataService: TrackerDataService) {
    }

    public heartRateChartData: any = [];
    public heartRateChartLabels: any[] = [];
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

    ngOnInit(): void {
        const average = (list: number[]) => list.reduce((a: number, b: number) => a + b, 0) / list.length;

        this.connectedDeviceName = "Apple Watch Series 7";
        this.audio.src = "../../../assets/sample4.wav"
        this.audio.load();

        this.trackerDataService.getSimulatedTrackerData().subscribe(trackerData => {
            let heartRate: number[] = []

            trackerData.data.forEach(record => {
                let date: Date = new Date();
                date.setHours(record.hour);
                date.setMinutes(record.minutes);
                let options: Intl.DateTimeFormatOptions = {
                    hour: '2-digit',
                    minute:'2-digit',
                    hour12: false,
                };
                let timestamp = date.toLocaleTimeString(navigator.language, options);
                this.heartRateChartLabels.push(timestamp);

                heartRate.push(record.bpm)
            })

            this.heartRateChartData = [
                { data: heartRate },
            ];

            this.meanBpmValue = Math.round(average(heartRate));
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
