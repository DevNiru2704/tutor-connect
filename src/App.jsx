
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import TutorRegistration from './pages/TutorRegistration.jsx';
import StudentRegistration from './pages/StudentRegistration.jsx';
import TutorProfile from './pages/TutorProfile.jsx';
import Login from './pages/Login.jsx';
import SearchResults from './pages/SearchResults.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/tutor-registration" element={<TutorRegistration />} />
          <Route path="/student-registration" element={<StudentRegistration />} />
          <Route path="/tutor/:id" element={<TutorProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/*" element={<Navigate to="/home" />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
