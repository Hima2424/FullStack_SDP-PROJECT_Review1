function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold mb-6">
        Student Feedback System
      </h1>
      <p className="text-lg mb-8">
        Improve learning experience through meaningful feedback
      </p>
      <a
        href="/login"
        className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition"
      >
        Get Started
      </a>
    </div>
  );
}

export default Home;
