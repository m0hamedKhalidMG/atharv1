// export default App;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import GlobalStyle from './GlobalStyle';
import ServicesPage from './components/ServicesPage'; // Adjust path as necessary
import OldArchitecture from './components/OldArchitecture';
import StoneInscriptions from './components/StoneInscriptions';
import Sculptures from './components/Sculptures';
import Handcrafts from './components/Handcrafts';
import MarineRuins from './components/MarineRuins';
import ReportPage from './components/ReportPage';
// import ArchaeologicalPlacesPage from './components/ArchaeologicalPlacesPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AdminPage from './components/AdminPage';
import ArchaeologicalPlacesPage from './components/ArchaeologicalPlacesPage ';
import AboutAthar from './components/AboutAthar';
import LandmarkDetails from './components/LandmarkDetails';
import Contact from './components/Contact';
import PrivateRoute from './components/PrivateRoute';
function App() {
  // Define the handleLogin function
  const handleLogin = (role) => {
    if (role === 'admin') {
      console.log('Logged in as Admin');
      // Redirect to admin page
    } else {
      console.log('Logged in as User');
      // Redirect to user home page or dashboard
    }
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landmark-details" element={<LandmarkDetails />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/old-architecture" element={<OldArchitecture />} />
        <Route path="/stone-inscriptions" element={<StoneInscriptions />} />
        <Route path="/sculptures" element={<Sculptures />} />
        <Route path="/handcrafts" element={<Handcrafts />} />
        <Route path="/marine-ruins" element={<MarineRuins />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/acplaces" element={<ArchaeologicalPlacesPage />} />
        {/* Pass the handleLogin function to the Login component */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />



        <Route path="/admin" element={
          <PrivateRoute>
            <AdminPage />
          </PrivateRoute>
        } />



        
        <Route path="/about" element={<AboutAthar />} />
        <Route path="/contact" element={<Contact />} />{' '}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
