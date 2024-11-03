// src/pages/TutorProfile.js
import { Star, MapPin, Clock, Book, Award, Calendar } from 'lucide-react';

const TutorProfile = () => {
  // This would typically come from an API
  const tutor = {
    name: "Dr. Sharma",
    subjects: ["Mathematics", "Physics"],
    experience: 8,
    rating: 4.8,
    reviews: 120,
    location: "Mumbai, Maharashtra",
    education: "Ph.D. in Mathematics",
    rate: "₹500/hour",
    availability: ["Mon-Fri: 4PM-8PM", "Sat: 10AM-6PM"],
    about: "Experienced tutor specializing in Mathematics and Physics for grades 9-12 and JEE preparation. Proven track record of helping students achieve excellent results.",
    achievements: [
      "100% success rate in JEE Advanced",
      "Average student improvement: 35%",
      "15+ students in IITs"
    ]
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Profile Info */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center mb-6">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h1 className="text-2xl font-bold">{tutor.name}</h1>
              <div className="flex items-center justify-center gap-2 mt-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span>{tutor.rating} ({tutor.reviews} reviews)</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gray-500" />
                <span>{tutor.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Book className="h-5 w-5 text-gray-500" />
                <span>{tutor.subjects.join(", ")}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gray-500" />
                <span>{tutor.rate}</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-gray-500" />
                <span>{tutor.education}</span>
              </div>
            </div>

            <button className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Book a Session
            </button>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="md:col-span-2">
          <div className="space-y-6">
            {/* About Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p className="text-gray-600">{tutor.about}</p>
            </div>

            {/* Availability Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Availability</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tutor.availability.map((time, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <span>{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Achievements</h2>
              <ul className="space-y-3">
                {tutor.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorProfile;