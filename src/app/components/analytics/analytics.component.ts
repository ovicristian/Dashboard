import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgApexchartsModule } from 'ng-apexcharts';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;

};

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule,NgApexchartsModule,RouterLink],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {

  chartOptions: any = {
    chart: {
      type: 'bar',
            height: 350,
            toolbar: {
                show: false,
                autoSelected: 'zoom'
            },
    },
  grid: {
      strokeDashArray: 5,

  },
  plotOptions: {
      bar: {
          borderRadius: 5,
          horizontal: false,
          columnWidth: '40%',
          endingShape: 'rounded',
          
          // colors: ['#4f46e5', '#10b981'],
      },
  },
  dataLabels: {
      enabled: false
  },
  stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
  },
  colors: ['#4f46e5', '#10b981'],
  xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  yaxis: {
      title: {
          text: 'Profit / Expenses (USD)',

          style: {
              colors: ['#8492a6'],
              fontSize: '16px',
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 600,
          },
      },
  },
  fill: {
      opacity: 1,
  },
  tooltip: {
      y: {
          formatter: function (val:any) {
              return "$" + val
          }
      }
  }
  };

  chartData: any = [
    {
      name: 'Profit',
      data: [500, 653, 548, 482, 553, 570, 560, 610, 580, 854, 945, 1150],
  }, {
      name: 'Expenses',
      data: [246, 379, 521, 453, 243, 264, 333, 246, 468, 222, 456, 789]
  }
  ];

}
