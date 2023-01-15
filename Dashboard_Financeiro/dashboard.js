var options = {
    chart: {
      type: 'bar',
      height: 250,
      toolbar: {
        show: false
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
    }
    
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();