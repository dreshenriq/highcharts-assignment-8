Highcharts.chart('container', {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Life Expectancy at birth for both sexes combined (Germany)'
  },
  subtitle: {
    text: 'Source: United Nations Data Retrieval System, <a href="http://data.un.org/Data.aspx?q=germany&d=PopDiv&f=variableID%3a68%3bcrID%3a276"> Table 1</a> '
  },
  xAxis: {
    categories: [
      '2095-2100',
      '2090-2095',
      '2085-2090',
      '2080-2085',
      '2075-2080',
      '2070-2075',
      '2065-2070',
      '2060-2065',
      '2055-2060',
      '2050-2055',
      '2045-2050',
      '2040-2045',
      '2035-2040',
      '2030-2035',
      '2025-2030',
      '2020-2025',
      '2015-2020',
      '2010-2015',
      '2005-2010',
      '2000-2005',
      '1995-2000',
      '1990-1995',
      '1985-1990',
      '1980-1985',
      '1975-1980',
      '1970-1975',
      '1965-1970',
      '1960-1965',
      '1955-1960',
      '1950-1955'
    ],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Years Old',
      align: 'middle'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: ' millions'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },

  credits: {
    enabled: false
  },
  series: [{
    name: 'Life Expectancy (age)',
    data: [90.83, 90.27, 89.72, 89.18, 88.62, 88.06, 87.51, 86.96, 86.4, 85.84, 85.26, 84.68, 84.06, 83.4, 82.67, 81.88, 81.1, 80.44, 79.73, 78.62, 77.31, 75.98, 74.99, 73.65, 72.3, 71.15, 70.67, 69.97, 68.91, 67.52]

  }]

});

Highcharts.chart('container2', {
  chart: {
    type: 'area'
  },
  accessibility: {
    description: 'An area chart compares the number of female deaths per set of years in comparison to the number of male deaths per set of years. Numbers for both genders are in (thousands).'
  },
  title: {
    text: 'Number of Male and Female deaths (Germany)'
  },
  subtitle: {
    text: 'Sources: United Nations Data Retrieval System, <a href="http://data.un.org/Data.aspx?q=germany+female&d=PopDiv&f=variableID%3a63%3bcrID%3a276">' +
      'Female Data Table </a> &amp; <a href="http://data.un.org/Data.aspx?q=germany+male&d=PopDiv&f=variableID%3a62%3bcrID%3a276">' +
      'Male Data Table </a>'
  },
  xAxis: {
    categories: [
      '2095-2100',
      '2090-2095',
      '2085-2090',
      '2080-2085',
      '2075-2080',
      '2070-2075',
      '2065-2070',
      '2060-2065',
      '2055-2060',
      '2050-2055',
      '2045-2050',
      '2040-2045',
      '2035-2040',
      '2030-2035',
      '2025-2030',
      '2020-2025',
      '2015-2020',
      '2010-2015',
      '2005-2010',
      '2000-2005',
      '1995-2000',
      '1990-1995',
      '1985-1990',
      '1980-1985',
      '1975-1980',
      '1970-1975',
      '1965-1970',
      '1960-1965',
      '1955-1960',
      '1950-1955'
    ],
    crosshair: true
  },
  allowDecimals: false,
  labels: {
    formatter: function() {
      return this.value; // clean, unformatted number for year
    }

},
yAxis: {
  title: {
    text: 'Number of Deaths (thousands)'
  },
  labels: {
    formatter: function() {
      return this.value / 1000 + 'k';
    }
  }
},
tooltip: {
  pointFormat: '<b>{point.y:,.0f}</b><br/> {series.name} passed away.'
},
plotOptions: {
  area: {

    marker: {
      enabled: false,
      symbol: 'circle',
      radius: 2,
      states: {
        hover: {
          enabled: true
        }
      }
    }
  }
},
series: [{
  name: 'Females',
  data: [2043.932, 2109.019, 2193.789, 2274.889, 2324.133, 2357.439, 2448.285, 2604.442, 2741.701, 2778.701, 2707.47, 2590.411, 2512.901, 2494.56, 2492.225, 2491.398, 2333.557, 2288.24, 2204.458, 2231.039, 2317.311, 2410.444, 2473.572, 2508.716, 2512.278, 2491.856, 2370.829, 2188.498, 2043.391, 1970.562]

}, {
  name: 'Males',
  data: [
    2168.928, 2240.71, 2327.333, 2399.164, 2437.858, 2448.799, 2496.701, 2606.388, 2720.005, 2761.24, 2708.293, 2590.567, 2492.998, 2443.359, 2431.352, 2420.291, 2285.197, 2154.555, 2007.366, 1973.691, 2023.907, 2093.93, 2141.214, 2247.31, 2339.811, 2390.043, 2366.51, 2249.134, 2134.778, 1963.643
  ]

}]
});
