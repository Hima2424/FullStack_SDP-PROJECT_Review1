import { FaStar } from "react-icons/fa";

function RatingCard({ course, rating, instructor, comment }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-400">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-bold text-lg">{course}</h3>
          <p className="text-gray-600 text-sm">by {instructor}</p>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={18}
              className={i < rating ? "text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700">{comment}</p>
    </div>
  );
}

export default RatingCard;
