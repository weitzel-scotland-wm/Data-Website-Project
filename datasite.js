//http://www.statista.com/statistics/263257/physical-retail-sales-of-video-games-in-the-us/
//http://www.steamgifts.com/discussion/YAKms/2005-2012-pc-vs-console-gaming-population-growth-rates
//https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=number+of+users+on+steam&start=0


google.load('visualization', '1', {packages: ['corechart', 'line']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Hard Copy Revenue (US)');

    data.addRows([
        [1996, 2.6], [1997, 3.7], [1998, 4.8], [1999, 5.5], [2000, 5.6], [2001, 6], [2002, 6.9], [2003, 7], [2004, 7.3], [2005, 6.9], [2006, 7.3], [2007, 9.5], [2008, 11.7], [2009, 10.1], [2010, 10.05], [2011, 9.13], [2012, 8.48], [2013, 6.32], [2014, 5.47]
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