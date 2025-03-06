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
    type: 'bar',
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
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            font: {
              size: 16,
            }
          }
        },
        x: {
          ticks: {
            font: {
              size: 16,
            }
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            font: {
              size: 18,
            }
          }
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
    marketingChart.destroy();
  }
  createChart();

  // Clear the form
  form.reset();
});

// Initialize the chart on page load
createChart();

// Navbar functionality
const navbarLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('.section');

navbarLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Remove active class from all links and sections
    navbarLinks.forEach(link => link.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));

    // Add active class to the clicked link and corresponding section
    this.classList.add('active');
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.classList.add('active');
  });
});