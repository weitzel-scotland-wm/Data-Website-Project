//http://www.statista.com/statistics/263257/physical-retail-sales-of-video-games-in-the-us/
//http://www.steamgifts.com/discussion/YAKms/2005-2012-pc-vs-console-gaming-population-growth-rates
//https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=number+of+users+on+steam&start=0

/*
google.load('visualization', '1', {packages: ['corechart', 'line']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X',);
    data.addColumn('number', 'Hard Copy Revenue (US)');
    data.addColumn('number', 'Steam User Base (in millions)')

    data.addRows([
        [1996, 2.6, 0], [1997, 3.7, 0], [1998, 4.8, 0], [1999, 5.5, 0], [2000, 5.6, 0], [2001, 6, 0], [2002, 6.9], [2003, 7], [2004, 7.3], [2005, 6.9], [2006, 7.3], [2007, 9.5], [2008, 11.7], [2009, 10.1], [2010, 10.05], [2011, 9.13], [2012, 8.48], [2013, 6.32], [2014, 5.47], [2015, 5.47, 125]
    ]);

    var options = {
        hAxis: {
            title: 'Year'
        },
        vAxis: {
            title: 'Video Game Hard Copy Revenue (US) in Billions'
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}
*/

google.load('visualization', '1.1', {packages: ['line', 'corechart']});
google.setOnLoadCallback(drawChart);

function drawChart() {

    var button = document.getElementById('change-chart');
    var chartDiv = document.getElementById('chart_div');

    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Date');
    data.addColumn('number', "Revenue (US) of Hard Copy Video Games (in billions)");
    data.addColumn('number', "Steam User Base (in millions)");

    data.addRows([
        [new Date(2000, 1),  5.6, 0],
        [new Date(2001, 1),   6, 0],
        [new Date(2002, 1), 6.9, 0],
        [new Date(2003, 1), 7, 0],
        [new Date(2004, 1),  7.3, 1],
        [new Date(2005, 1),  6.9, 4],
        [new Date(2006, 1), 7.3,  9],
        [new Date(2007, 1), 9.5,  15],
        [new Date(2008, 1), 11.7, 17],
        [new Date(2009, 1), 10.1, 20],
        [new Date(2010, 1), 10.05, 26],
        [new Date(2011, 1), 9.13, 33],
        [new Date(2012, 1), 8.48, 40],
        [new Date(2013, 1), 6.32, 55],
        [new Date(2014, 1), 5.47, 75],
        [new Date(2015, 1), 5.47, 125]

    ]);

    var materialOptions = {
        chart: {
            title: 'Average Temperatures and Daylight in Iceland Throughout the Year'
        },
        width: 900,
        height: 500,
        series: {
            // Gives each series an axis name that matches the Y-axis below.
            0: {axis: 'Revenue (US) of Hard Copy Video Games (in billions)'},
            1: {axis: 'Steam User Base (in millions)'}
        },
        axes: {
            // Adds labels to each axis; they don't have to match the axis names.
            y: {
                Temps: {label: 'Temps (Celsius)'},
                Daylight: {label: 'Daylight'}
            }
        }
    };

    var classicOptions = {
        title: 'Average Temperatures and Daylight in Iceland Throughout the Year',
        width: 900,
        height: 500,
        // Gives each series an axis that matches the vAxes number below.
        series: {
            0: {targetAxisIndex: 0},
            1: {targetAxisIndex: 1}
        },
        vAxes: {
            // Adds titles to each axis.
            0: {title: 'Revenue (US) of Hard Copy Video Games (in billions)'},
            1: {title: 'Steam User Base (in millions)'}
        },
        hAxis: {
            ticks: [new Date(2000, 1), new Date(2001, 1), new Date(2002, 1), new Date(2003, 1),
                new Date(2004, 1),  new Date(2005, 1), new Date(2006, 1), new Date(2007, 1),
                new Date(2008, 1), new Date(2009, 1), new Date(2010, 1), new Date(2011, 1), new Date(2012, 1), new Date(2013, 1), new Date(2014, 1), new Date(2015, 1)
            ]
        },
        vAxis: {
            viewWindow: {
                max: 30
            }
        }
    };

    function drawMaterialChart() {
        var materialChart = new google.charts.Line(chartDiv);
        materialChart.draw(data, materialOptions);
        button.innerText = 'Change to Classic';
        button.onclick = drawClassicChart;
    }

    function drawClassicChart() {
        var classicChart = new google.visualization.LineChart(chartDiv);
        classicChart.draw(data, classicOptions);
        button.innerText = 'Change to Material';
        button.onclick = drawMaterialChart;
    }

    drawMaterialChart();

}