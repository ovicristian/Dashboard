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
  selector: 'app-coin-data',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule,RouterLink],
  templateUrl: './coin-data.component.html',
  styleUrls: ['./coin-data.component.scss']
})
export class CoinDataComponent {

  // chart 1

  chartOptions: any = {
    chart: {
      type: 'area',
      height: 90,
      width: '100%',
      sparkline: {
          enabled: true
      }
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  colors: ['#059669'],
  fill: {
    type: 'gradient',
    gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100]
    },
},
tooltip: {
  fixed: {
      enabled: false
  },
  x: {
      show: false
  },
  y: {
      title: {
          formatter: function (seriesName:any) {
              return ''
          }
      }
  },
  marker: {
      show: false
  }
}
  };

  chartData: any = [
    {
      data: [20, 45, 40, 64, 35, 25, 35],
  }
  ];


  // chart2

  chartOptions2: any = {
    chart: {
      type: 'area',
      height: 90,
      width: '100%',
      sparkline: {
          enabled: true
      }
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  colors: ['#dc2626'],
 
  fill: {
    type: 'gradient',
    gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100]
    },
},
tooltip: {
  fixed: {
      enabled: false
  },
  x: {
      show: false
  },
  y: {
      title: {
          formatter: function (seriesName:any) {
              return ''
          }
      }
  },
  marker: {
      show: false
  }
}
  };

  chartData2: any = [
    {
      data: [10, 25, 30, 54, 45, 39, 15],
  }
  ];

  // chart3
  chartOptions3: any = {
    chart: {
      type: 'area',
      height: 90,
      width: '100%',
      sparkline: {
          enabled: true
      }
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  colors: ['#059669'],
 
  fill: {
    type: 'gradient',
    gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100]
    },
},
tooltip: {
  fixed: {
      enabled: false
  },
  x: {
      show: false
  },
  y: {
      title: {
          formatter: function (seriesName:any) {
              return ''
          }
      }
  },
  marker: {
      show: false
  }
}
  };

  chartData3: any = [
    {
      data: [15, 20, 10, 45, 20, 10, 5],
  }
  ];

  // chart4

  chartOptions4: any = {
    chart: {
      type: 'area',
      height: 90,
      width: '100%',
      sparkline: {
          enabled: true
      }
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  colors: ['#dc2626'],
 
  fill: {
    type: 'gradient',
    gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100]
    },
},
tooltip: {
  fixed: {
      enabled: false
  },
  x: {
      show: false
  },
  y: {
      title: {
          formatter: function (seriesName:any) {
              return ''
          }
      }
  },
  marker: {
      show: false
  }
}
  };

  chartData4: any = [
    {
      data: [3, 5, 7, 11, 8, 5, 7],
  }
  ];

  // chart 5

  chartOptions5: any = {
    chart: {
      type: 'area',
      height: 90,
      width: '100%',
      sparkline: {
          enabled: true
      }
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  colors: ['#dc2626'],
 
  fill: {
    type: 'gradient',
    gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100]
    },
},
tooltip: {
  fixed: {
      enabled: false
  },
  x: {
      show: false
  },
  y: {
      title: {
          formatter: function (seriesName:any) {
              return ''
          }
      }
  },
  marker: {
      show: false
  }
}
  };

  chartData5: any = [
    {
      data: [20, 14, 24, 30, 16, 12, 8],
  }
  ];

  // chart6

  chartOptions6: any = {
    chart: {
      type: 'area',
      height: 90,
      width: '100%',
      sparkline: {
          enabled: true
      }
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  colors: ['#059669'],
 
  fill: {
    type: 'gradient',
    gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100]
    },
},
tooltip: {
  fixed: {
      enabled: false
  },
  x: {
      show: false
  },
  y: {
      title: {
          formatter: function (seriesName:any) {
              return ''
          }
      }
  },
  marker: {
      show: false
  }
}
  };

  chartData6: any = [
    {
      data: [4, 7, 15, 10, 8, 12, 18],
  }
  ];

}
