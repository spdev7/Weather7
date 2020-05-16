import React, { Component } from "react";
import Chart from "react-apexcharts";

class MainCardGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        yaxis:{
          show:false,
        }
        },
      },
      series: [
        {
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
      markers: {
        size: 0,
        colors: undefined,
        strokeColors: "#fff",
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: undefined,
          sizeOffset: 3,
        },
      },
    };
  }

  render() {
    return (
      <div class="main-card-graph">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width="500"
        />
      </div>
    );
  }
}

export default MainCardGraph;
