import {Component, OnInit} from '@angular/core';

import * as d3 from 'd3';


@Component({
    selector: 'app-ds3-example',
    templateUrl: './d3js-example.component.html',
    styleUrls: ['./d3js-example.component.scss']
})
export class D3jsExampleComponent implements OnInit {

    radius = 30;
    count = 1;

    constructor() {
    }

    ngOnInit() {
        d3.select('p').style('color', 'red');
    }

    clicked(event: any) {
        d3.select(event.target).append('circle')
            .attr('cx', event.offsetX)
            .attr('cy', event.offsetY)
            .attr('r', () => {
                return this.radius;
            })
            .attr('fill', 'white')
            .attr('stroke', 'black');

        d3.select(event.target).append('text')
            .attr('dx', event.offsetX)
            .attr('dy', event.offsetY + 5)
            .attr('fill', 'black')
            .attr('text-anchor', 'middle')
            .text(`${this.count++}`);

        d3.select(event.target).append('path')
            .attr('id', 'wavy') // Unique id of the path
            .attr('d', `M ${event.offsetX}, ${event.offsetY} Q 100,15 200,70 Q 340,140 400,30`) // SVG path
            .style('stroke', '#A00AAA')
            .attr('fill', 'none');


    }
}
