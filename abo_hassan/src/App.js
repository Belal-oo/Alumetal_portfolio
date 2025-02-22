import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import OurServices from './our services/ourServices';
import ServiceDetails from './our services/detalis/ServiceDetails';
import MoreDetails from './moreDetails/MoreDetails'; // Import the MoreDetails component
import './App.css';
import Home from './Home/Home';
import ContactUS from './contactUS';
import AboutUs from './aboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <OurServices />
              <AboutUs />
              <ContactUS />
            </>
          } />
          <Route path="/details/:id" element={<ServiceDetails />} />
          <Route path="/more-details" element={<MoreDetails />} /> {/* Add this route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;