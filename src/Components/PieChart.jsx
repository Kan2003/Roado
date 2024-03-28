import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const PieChart = () => {
  const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if(chartInstance.current){
            chartInstance.current.destroy();
        }

        const myChartRef = chartRef.current.getContext("2d");

        chartInstance.current = new Chart(myChartRef, {
            type: 'doughnut',
            data: {
                  datasets: [{
                    label: 'My First Dataset',
                    data: [60, 45, 25],
                    backgroundColor: [
                      'rgb(255, 99, 132)',
                      'rgb(54, 162, 235)',
                      'rgb(255, 205, 86)'
                    ],
                    borderWidth : 0,
                    hoverOffset: 4
                  }]
            }
        })

        return() => {
          if(chartInstance.current){
            chartInstance.current.destroy();
          }
        }
    },[])

  return (
    <div className='w-[130px] h-[130px] '>
      <canvas ref={chartRef} style={{width: "100%" , height: "100%"}}>
      </canvas>
    </div>
  )
}

export default PieChart
