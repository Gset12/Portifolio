var options = {
    chart: {
      type: 'bar',
      height: 250,
      toolbar: {
        show: false
      }}, 
    theme: {
      monochrome: {
        enabled: true,
        color: '#33B2DF',
        shadeTo: 'light',
        shadeIntensity: 0.80
      }
    },
    series: [{
      name: 'sales',
      data: [4221,4038,3888,4063,4028,4133,3960,4121]
    }],
    xaxis: {
      categories: ["jan", "fev","mar","abr","mai","jun","jul", "ago"]
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: 'top',
        },
      }
    }, 
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["black"]
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        }
      },
      yaxis: {
        lines: {
          show: false,
        }
      },
    },
    yaxis:{
      show: false
    }
  }
  
  var options2 = {
    chart:{
      type: "donut",
      height: 260,
    },
    series: [45, 55],
    labels: ['Débito', 'Crédito'],
    theme: {
      mode: 'light',
      palette: "palette3"
    
    },
      legend: {
        show: true,
        position: "bottom"
      },
  }
  
var chart = new ApexCharts(document.querySelector("#chart"), options);
var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);

chart.render();
chart2.render();