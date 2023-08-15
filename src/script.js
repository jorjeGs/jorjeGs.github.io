
function showPieChart(labels, datas) {
    var pieCanvas = document.getElementById("PieChart").getContext('2d');

    var data = {
        labels: labels,
        datasets: [
            {
                data: datas,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                ]
            }]
    };

    var pieChart = new Chart(pieCanvas, {
        type: 'pie',
        data: data,
        options: {
        }
    });
}

function showBarChart(labels, datas) {
    var ctx = document.getElementById('BarChart').getContext('2d');

    var myBarChart = new Chart(ctx, {
        type: 'bar', // Tipo de gráfico de barras
        data: {
            labels: labels,
            datasets: [{
                label: "Data",
                data: datas,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                ],
                borderColor: 'rgba(75, 192, 192, 1)', // 
            }]
        },
        options: {
            // Opciones del gráfico (título, leyenda, etc.)
        }
    });
}
