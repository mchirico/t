import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js';


@Component({
    selector: 'app-chart-example',
    templateUrl: './chart-example.component.html',
    styleUrls: ['./chart-example.component.scss']
})
export class ChartExampleComponent implements OnInit {

    chart = [];

    constructor() {
    }

    ngOnInit() {

        const weatherDates = ['Monday', 'Tuesday', 'Wednesday'
        ];

        const temp_max = [55, 23, 12];
        const temp_min = [32, 12, 3];

        this.chart = new Chart('canvas', {
            type: 'line',
            data: {
                labels: weatherDates,
                datasets: [
                    {
                        data: temp_max,
                        borderColor: '#3cba9f',
                        fill: false
                    },
                    {
                        data: temp_min,
                        borderColor: '#ffcc00',
                        fill: false
                    },
                ]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        display: true
                    }]
                }
            }
        });
    }

}
