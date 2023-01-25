var options = {
    chart: {
      type: 'bar',
      height: 250,
      toolbar: {
        show: false
      }},
      title:{
        text: "Total de Receitas(R$)",
        align: 'center',
        margin: 30,
        style: {
          fontSize:  '16px',
          fontFamily:  undefined,
          color:  '#263238'
        },
      },
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
    title:{
      text: "Meio de Pagamento",
      align: 'center',
      margin: 30,
      style: {
        fontSize:  '16px',
        fontFamily:  undefined,
        color:  '#263238'
      },
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

  var options3 = {
    chart: {
      type: 'bar',
      height: 250,
      toolbar: {
        show: false
      }},
      title:{
        text: "Fontes de Receitas(R$)",
        align: 'center',
        margin: 30,
        style: {
          fontSize:  '16px',
          fontFamily:  undefined,
          color:  '#263238'
        },
      }, 
    theme: {
      monochrome: {
        enabled: true,
        color: '#33B2DF',
        shadeTo: 'light',
        shadeIntensity: 0.80
      }
    },
    series: [{
      data: [13854, 10908, 5825, 1865]
    }],
    xaxis: {
    categories: ["Produtos", "Prolabore", "Serviços", "Poupança"]
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

  var options4 = {
    chart:{
      type: "donut",
      height: 260,
    },
    title:{
      text: "Receitas vs Despesas",
      align: 'center',
      margin: 30,
      style: {
        fontSize:  '16px',
        fontFamily:  undefined,
        color:  '#263238'
      },
    },
    series: [82, 18],
    labels: ['Despesa', 'Receita'],
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
var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);


chart.render();
chart2.render();
chart3.render();
chart4.render();