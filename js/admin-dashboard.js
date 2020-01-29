$(function () {

  'use strict'
  var salesChartCanvas = $('#salesChart').get(0).getContext('2d')
  var salesChartData = {
    labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label               : 'Customers',
        backgroundColor     : 'rgba(255, 87, 51, 80)',
        borderColor         : 'rgba(255, 87, 51, 80)',
        pointRadius         : false,
        pointColor          : 'rgba(199, 0, 57, 80)',
        pointStrokeColor    : '#c1c7d1',
        pointHighlightFill  : '#fff',
        pointHighlightStroke: 'rgba(255, 87, 51, 20)',
        data                : [6, 29, 40, 51, 56, 55, 40, 65, 59, 80, 81, 96]
      },
    ]
  }

  var salesChartOptions = {
    maintainAspectRatio : false,
    responsive : true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines : {
          display : false,
        }
      }],
      yAxes: [{
        gridLines : {
          display : false,
        }
      }]
    }
  }

  var salesChart = new Chart(salesChartCanvas, { 
      type: 'line', 
      data: salesChartData, 
      options: salesChartOptions
    }
  )

    var pieChartCanvas = $('#pieChart').get(0).getContext('2d')
    var pieData        = {
      labels: [
          'Chrome',
          'Firefox',
          'Edge',
          'Safari', 
          'Opera', 
          'Others',
      ],
      datasets: [
        {
          data: [48.7,22,5.9,4.7,3.9,11.3],
          backgroundColor : ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
        }
      ]
    }
    var pieOptions     = {
      legend: {
        display: false
      }
    }
    var pieChart = new Chart(pieChartCanvas, {
      type: 'doughnut',
      data: pieData,
      options: pieOptions      
    })

  $('#world-map-markers').mapael({
      map: {
        name : "usa_states",
        zoom: {
          enabled: true,
          maxLevel: 10
        },
      },
    }
  );
})
