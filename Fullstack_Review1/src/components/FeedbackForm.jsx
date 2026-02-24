import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

function FeedbackForm() {
  const [formData, setFormData] = useState({
    course: "",
    instructor: "",
    rating: "",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ course: "", instructor: "", rating: "", comment: "" });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto bg-green-50 p-6 rounded-xl shadow-lg border-l-4 border-green-500">
        <div className="flex items-center gap-3 text-green-600">
          <FaCheckCircle size={32} />
          <div>
            <h3 className="text-xl font-bold">Success!</h3>
            <p>Feedback submitted successfully!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Course Name"
          required
          className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setFormData({ ...formData, course: e.target.value })
          }
          value={formData.course}
        />

        <input
          type="text"
          placeholder="Instructor Name"
          required
          className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setFormData({ ...formData, instructor: e.target.value })
          }
          value={formData.instructor}
        />

        <select
          className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          onChange={(e) =>
            setFormData({ ...formData, rating: e.target.value })
          }
          value={formData.rating}
        >
          <option value="">Select Rating</option>
          <option value="5">5 - Excellent</option>
          <option value="4">4 - Good</option>
          <option value="3">3 - Average</option>
          <option value="2">2 - Poor</option>
          <option value="1">1 - Very Poor</option>
        </select>

        <textarea
          placeholder="Comments"
          className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setFormData({ ...formData, comment: e.target.value })
          }
          value={formData.comment}
          rows="4"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
