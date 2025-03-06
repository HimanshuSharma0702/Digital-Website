// Initialize the chart
let marketingChart;
// Get the form and chart canvas
const form = document.getElementById('dataForm');
const chartCanvas = document.getElementById('marketingChart').getContext('2d');

// Initialize data arrays
let channels = [];
let effectiveness = [];

// Create the chart
function createChart() {
  marketingChart = new Chart(chartCanvas, {
    type: 'bar', // Use bar chart for better visualization
    data: {
      labels: channels,
      datasets: [{
        label: 'Effectiveness (%)',
        data: effectiveness,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}

// Handle form submission
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get user input
  const channelInput = document.getElementById('channel').value;
  const effectivenessInput = parseFloat(document.getElementById('effectiveness').value);

  // Add data to arrays
  channels.push(channelInput);
  effectiveness.push(effectivenessInput);

  // Update the chart
  if (marketingChart) {
    marketingChart.destroy(); // Destroy the existing chart
  }
  createChart(); // Recreate the chart with updated data

  // Clear the form
  form.reset();
});

// Initialize the chart on page load
createChart();