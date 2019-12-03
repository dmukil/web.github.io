/**
 * `Plotter` to display the weather details
 *
 * Created on April 08, 2019
 * @author Ralph Florent <r.florent@jacobs-university.de>
 */
import React, { Component } from 'react';
import Plot from 'react-plotly.js';

/**
 * `Plotter` component definition
 */
export default class Plotter extends Component {

    render() {
        const data = [
            {
                x: ['2019-04-08', '2019-04-09', '2019-04-10', '2019-04-11', '2019-04-12',
                 '2019-04-13', '2019-04-14', '2019-04-15', '2019-04-16', '2019-04-17'],
                y: [12, 17, 16, 11, 3, 6, 12, 5, 6, 8],
                type: 'scatter',
                mode: 'lines+points',
                marker: { color: 'blue' },
                name: 'Temperature'
            },
            {
                x: ['2019-04-08', '2019-04-09', '2019-04-10', '2019-04-11', '2019-04-12',
                '2019-04-13', '2019-04-14', '2019-04-15', '2019-04-16', '2019-04-17'],
                y: [11, 12, 10, 11, 13, 17, 12, 11, 16, 10],
                type: 'scatter',
                mode: 'lines+points',
                name: 'Humidity'
            }
        ];

        return (
            <Plot
                data={data}
                layout={{
                    title: 'Current weather and forecasts in Bremen',
                    xaxis: { type: 'date', title: 'Date'},
                    yaxis: { title: 'Temperature (C)'},
                    responsive: true
                }}
            />
        );
    }
}