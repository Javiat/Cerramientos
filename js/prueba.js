
$(document).ready(() =>
	
	$("button").click(() =>
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/forecast",
			type: "get", //send it through get method
			data: {
				q: $("#city").val(),
				appid: "ce9faefd3b668dc405c5d9fd324b6ddd"
			}
		}).done((data, status) => {
			const list = data.list.map(x => {
				return {
					date: x.dt_txt,
					temp: x.main.temp - 273.15
				}
			});
			var ctx = document.getElementById("myChart").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: list.map(x => x.date),
					datasets: [{
						label: 'Temp',
						data: list.map(x => x.temp),
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)'
						],
						borderColor: [
							'rgba(255,99,132,1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)'
						],
						borderWidth: 1,
						fill: false
					}]
				},
				options: {
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true
							}
						}]
					}
				}
			});

		})));