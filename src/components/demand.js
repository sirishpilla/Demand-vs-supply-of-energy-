import React, {Component} from 'react'
import CanvasJSReact from './canvasjs.react.js';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Demand extends Component{
    render(){
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2", // "light1", "dark1", "dark2"
            title:{
                text: "Demand of Energy for Electric Vehicles"
            },
            axisY: {
                title: "Energy in Watts",
                suffix: "W"
            },
            axisX: {
                title: "Time of Day",
                prefix: "H",
                interval: 1
            },
            data: [{
                type: "line",
                toolTipContent: " {x} Hour: {y} Watts",
                dataPoints: [
                    { x: 0, y: 64 },
                    { x: 1, y: 61 },
                    { x: 2, y: 64 },
                    { x: 3, y: 62 },
                    { x: 4, y: 64 },
                    { x: 5, y: 60 },
                    { x: 6, y: 58 },
                    { x: 7, y: 59 },
                    { x: 8, y: 53 },
                    { x: 9, y: 54 },
                    { x: 10, y: 61 },
                    { x: 11, y: 60 },
                    { x: 12, y: 55 },
                    { x: 13, y: 60 },
                    { x: 14, y: 56 },
                    { x: 15, y: 60 },
                    { x: 16, y: 59.5 },
                    { x: 17, y: 63 },
                    { x: 18, y: 58 },
                    { x: 19, y: 54 },
                    { x: 20, y: 59 },
                    { x: 21, y: 64 },
                    { x: 22, y: 59 },
                      { x: 23, y: 59 },
                      { x: 24, y: 59 },
                ]
            }]
        }
        return( 
            <div>
    			<CanvasJSChart options = {options}
    				/* onRef={ref => this.chart = ref} */
    			/>
    			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    		</div>

        );
    }
}
export default Demand;