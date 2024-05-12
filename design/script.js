google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

	var data = google.visualization.arrayToDataTable([
	  ['type', 'days'],
	  ['Lived',     9000],
	  ['Remainding',     29000],
	]);

	var options = {
	  title: 'Days of your life until now',
	  pieHole: 0.4,
	  backgroundColor: '#809cb3',
	  colors: ['#266c6b', '#273842']
		
	};

	var chart = new google.visualization.PieChart(document.getElementById('results-graph'));

	chart.draw(data, options);
}
