window.onload = async ()=>{
	const days_lived_percentage = document.getElementById('days_lived_percentage').value
	const days_left_percentage = document.getElementById('days_left_percentage').value

	google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

		var data = google.visualization.arrayToDataTable([
		  ['type', 'days'],
		  ['Lived',     parseInt(days_lived_percentage)],
		  ['Remainding', parseInt(days_left_percentage)],
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
}

