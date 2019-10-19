// code for a basic bar chart
// see https://www.highcharts.com/demo/bar-basic

Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges', 'Blueberries']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Susan and Scott\'s house'
      }
    },
    series: [{
      name: 'Saint',
      data: [1, 0, 4, 2, 6]
    }, {
      name: 'Jamie',
      data: [5, 7, 3, 0, 6]
    }]
  });
