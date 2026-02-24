import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const barData = {
    labels: ["Course A", "Course B", "Course C", "Course D", "Course E"],
    datasets: [
      {
        label: "Average Rating",
        data: [4.5, 3.8, 4.2, 3.9, 4.6],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ["Excellent", "Good", "Average", "Poor"],
    datasets: [
      {
        label: "Feedback Distribution",
        data: [30, 45, 20, 5],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-4xl font-bold mb-8 text-center">Feedback Analytics</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Course Ratings</h3>
          <Bar data={barData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Feedback Distribution</h3>
          <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Summary Statistics</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <p className="text-gray-600">Total Feedbacks</p>
            <p className="text-3xl font-bold text-blue-600">284</p>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <p className="text-gray-600">Average Rating</p>
            <p className="text-3xl font-bold text-green-600">4.2/5</p>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <p className="text-gray-600">Top Rated Course</p>
            <p className="text-3xl font-bold text-purple-600">Course E</p>
          </div>
          <div className="bg-orange-50 p-4 rounded">
            <p className="text-gray-600">Completion Rate</p>
            <p className="text-3xl font-bold text-orange-600">92%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
