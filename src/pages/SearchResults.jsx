import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Book, Search, Filter } from 'lucide-react';

const SearchResults = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    subject: '',
    priceRange: '',
    experience: '',
    rating: '',
    availability: []
  });

  // Sample data - would come from API
  const tutors = [
    {
      id: 1,
      name: "Dr. Sharma",
      subjects: ["Mathematics", "Physics"],
      experience: 8,
      rating: 4.8,
      reviews: 120,
      location: "Mumbai",
      rate: "₹500/hour",
      availability: ["Evening", "Weekend"]
    },
    // Add more tutor data here
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Search Bar */}
      <div className="mb-8">
        <form onSubmit={handleSearch} className="max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search tutors by name, subject, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <button
              type="submit"
              className="absolute right-2 top-2 px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="h-5 w-5 text-gray-500" />
              <h2 className="text-lg font-bold">Filters</h2>
            </div>

            <div className="space-y-6">
              {/* Subject Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={filters.subject}
                  onChange={handleFilterChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                >
                  <option value="">All Subjects</option>
                  <option value="mathematics">Mathematics</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <select
                  name="priceRange"
                  value={filters.priceRange}
                  onChange={handleFilterChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                >
                  <option value="">Any Price</option>
                  <option value="0-300">₹0 - ₹300/hr</option>
                  <option value="301-500">₹301 - ₹500/hr</option>
                  <option value="501+">₹501+/hr</option>
                </select>
              </div>

              {/* Experience Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience
                </label>
                <select
                  name="experience"
                  value={filters.experience}
                  onChange={handleFilterChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                >
                  <option value="">Any Experience</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>

              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating
                </label>
                <select
                  name="rating"
                  value={filters.rating}
                  onChange={handleFilterChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                >
                  <option value="">Any Rating</option>
                  <option value="4+">4+ Stars</option>
                  <option value="3+">3+ Stars</option>
                </select>
              </div>

              {/* Availability Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Availability
                </label>
                <div className="space-y-2">
                  {['Morning', 'Afternoon', 'Evening', 'Weekend'].map((time) => (
                    <label key={time} className="flex items-center">
                      <input
                        type="checkbox"
                        value={time}
                        checked={filters.availability.includes(time)}
                        onChange={(e) => {
                          const value = e.target.value;
                          setFilters(prev => ({
                            ...prev,
                            availability: e.target.checked
                              ? [...prev.availability, value]
                              : prev.availability.filter(t => t !== value)
                          }));
                        }}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2">{time}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="md:col-span-3">
          <div className="space-y-6">
            {tutors.map((tutor) => (
              <Link
                key={tutor.id}
                to={`/tutor/${tutor.id}`}
                className="block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0"></div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">{tutor.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                          <span>{tutor.rating} ({tutor.reviews} reviews)</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600">{tutor.rate}</div>
                        <div className="text-sm text-gray-500">per hour</div>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Book className="h-5 w-5 text-gray-500" />
                        <span>{tutor.subjects.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-gray-500" />
                        <span>{tutor.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;