import React from "react";
import './Chart.css'
import ChartBar from "./CharBar";

const Chart =(props)=>{
    // console.log("Chart..!",props)
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
    // console.log("totalMaximum",totalMaximum)

return(
    <div className="chart">
        {props.dataPoints.map((datapoint, index)=>{
            return(
            <ChartBar
            key={index}
            value={datapoint.value}
            maxValue={totalMaximum}
            label={datapoint.label}
            >
            </ChartBar>)
        })
            
        }
        
    </div>
)

}

export default Chart