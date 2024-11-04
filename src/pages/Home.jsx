import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality or navigation
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Find Your Perfect Tutor
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect with experienced tutors for personalized learning experiences
        </p>
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search by subject, expertise, or location..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-3 text-gray-400 hidden md:block" size={24} />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Qualified Tutors</h3>
          <p className="text-gray-600">Connect with experienced and verified tutors in your area</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
          <p className="text-gray-600">Book sessions that fit your schedule and learning pace</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
          <p className="text-gray-600">Get customized attention and learning plans</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
        <div className="flex justify-center gap-4">
          <Link
            to="/student-registration"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign Up as Student
          </Link>
          <Link
            to="/tutor-registration"
            className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Become a Tutor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
