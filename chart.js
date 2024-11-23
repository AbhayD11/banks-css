function drawBalanceDoughnutChart(chartId, percentages, colors) {
    const chartData = {
      labels: [],
      datasets: [{
        data: percentages,
        backgroundColor: colors,
      }]
    };
  
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      cutout: '60%' 
    };
  
    const canvas = document.getElementById(chartId);
    if (canvas) {
      new Chart(canvas.getContext('2d'), { type: 'doughnut', data: chartData, options });
    }
  }
  
