import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logoImage from '../images/logo.jpg'; // Import logo image
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Update import

// Header container styling
const HeaderContainer = styled.header`
  background-color: #f1ede1; /* Light background color for the header */
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end; /* Align all items to the right */
  align-items: center;
  direction: rtl;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.1); /* Light shadow for header */
  letter-spacing: 0.15em !important;
  line-height: 2.2 !important;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding: 10px 15px; /* Reduce padding on small screens */
  }
`;

// Navigation links styling
const NavLinks = styled.nav`
  display: flex;
  gap: 20px; /* Spacing between links */
  align-items: center;
  font-family: '29LT Riwaya', sans-serif; /* Use 29LT Riwaya font */
  font-size: 18px; /* Larger size on desktop */
  margin-left: auto; /* Fix links next to the logo */
  margin-right: 20px; /* Spacing between logo and links */

  a {
    color: #3b1112; /* Dark text color */
    text-decoration: none;
    padding: 8px 10px;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;
  }

  a:hover {
    background-color: #3b1112; /* Dark background on hover */
    color: #f1ede1; /* Text color on hover */
  }

  a.active {
    background-color: #3b1112; /* Dark background for active page */
    color: #f1ede1;
  }

  @media (max-width: 768px) {
    display: none; /* Hide links on small screens */
  }
`;

// Logo styling
const Logo = styled.img`
  width: 60px; /* Logo size on desktop */
  height: auto;
  cursor: pointer; /* Pointer cursor for logo */
  margin-left: 20px; /* Spacing between logo and links */

  @media (max-width: 768px) {
    width: 50px; /* Smaller logo size on small screens */
    margin-left: 0; /* Remove margin on small screens */
  }
`;

// Dropdown services styling
const ServicesDropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover div {
    display: block;
  }
`;

// Dropdown content styling
const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1ede1;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1;
  right: 0;

  a {
    color: #3b1112;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: right;
  }

  a:hover {
    background-color: #3b1112; /* Dark background on hover */
    color: #f1ede1; /* Text color on hover */
  }
`;

// Dropdown menu styling for small screens
const DropdownMenu = styled.div`
  display: ${({ isOpen }) =>
    isOpen ? 'block' : 'none'}; /* Show or hide menu */
  position: absolute;
  top: 70px;
  right: 20px;
  background-color: #f1ede1;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 100;

  a {
    display: block;
    color: #3b1112;
    padding: 10px;
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s;
  }

  a:hover {
    background-color: #3b1112; /* Dark background on hover */
    color: #f1ede1; /* Text color on hover */
  }
`;
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Toggle the dropdown menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Update active button and login state whenever the route changes
  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === '/') {
      setActiveButton('home');
    } else if (currentPath === '/about') {
      setActiveButton('about');
    } else if (currentPath === '/services') {
      setActiveButton('services');
    } else if (currentPath === '/report') {
      setActiveButton('services-dropdown');
    } else if (currentPath === '/login') {
      setActiveButton('login');
    }
    else if (currentPath === '/contact') {
      setActiveButton('contact');
    }
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, [location]);

  // Handle button click to set active state
  const handleClick = (buttonName) => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
  };

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    setActiveButton(null);
    navigate('/'); // Use navigate to redirect after logout
  };

  // Check user role from local storage
  const userRole = localStorage.getItem('userRole');

  return (
    <HeaderContainer>
      <Logo src={logoImage} alt="Logo" onClick={toggleMenu} />
      <NavLinks>
        <Link
          to="/"
          className={activeButton === 'home' ? 'active' : ''}
          onClick={() => handleClick('home')}
        >
          الرئيسية {activeButton === 'home' && '▼'}
        </Link>
        <Link
          to="/about"
          className={activeButton === 'about' ? 'active' : ''}
          onClick={() => handleClick('about')}
        >
          عن أثر {activeButton === 'about' && '▼'}
        </Link>
        <Link
          to="/services"
          className={activeButton === 'services' ? 'active' : ''}
          onClick={() => handleClick('services')}
        >
          أنواع الآثار {activeButton === 'services' && '▼'}
        </Link>
        <ServicesDropdown>
          <Link
            to="/report"
            className={activeButton === 'services-dropdown' ? 'active' : ''}
            onClick={() => handleClick('services-dropdown')}
          >
            الخدمات {activeButton === 'services-dropdown' && '▼'}
          </Link>
          <DropdownContent>
            <Link to="/report">تقديم بلاغ عن أثر</Link>
            <Link to="/acplaces">الأماكن الأثرية</Link>
          </DropdownContent>
        </ServicesDropdown>
        <Link
            to="/contact"
            className={activeButton === 'contact' ? 'active' : ''}
            onClick={() => handleClick('contact')}
          >تواصل معنا {activeButton === 'contact' && '▼'}</Link>
        {/* Render Admin tab if user role is admin */}
        {userRole === 'Admin' && (
          <Link to="/admin" className={activeButton === 'admin' ? 'active' : ''}>
            إدارة
          </Link>
        )}
        {isLoggedIn ? (
          <a onClick={handleLogout} style={{ cursor: 'pointer' }}>
            تسجيل الخروج
          </a>
        ) : (
          <Link
            to="/login"
            className={activeButton === 'login' ? 'active' : ''}
            onClick={() => handleClick('login')}
          >
            تسجيل الدخول {activeButton === 'login' && '▼'}
          </Link>
        )}
      </NavLinks>

      {/* Dropdown menu for small screens */}
      <DropdownMenu isOpen={isMenuOpen}>
  <Link to="/" onClick={toggleMenu}>الرئيسية</Link>
  <Link to="/about" onClick={toggleMenu}>عن أثر</Link>
  <Link to="/services" onClick={toggleMenu}>أنواع الآثار</Link>
  <Link to="/report" onClick={toggleMenu}>تقديم بلاغ عن أثر</Link>
  <Link to="/acplaces" onClick={toggleMenu}>الأماكن الأثرية</Link>
  <Link to="/contact" onClick={toggleMenu}>تواصل معنا</Link>

  {isLoggedIn ? (
    <a onClick={() => { handleLogout(); toggleMenu(); }} style={{ cursor: 'pointer' }}>
      تسجيل الخروج
    </a>
  ) : (
    <Link to="/login" onClick={toggleMenu}>تسجيل الدخول</Link>
  )}

  {/* Render Admin tab in the dropdown if user role is admin */}
  {userRole === 'admin' && <Link to="/admin" onClick={toggleMenu}>إدارة</Link>}
</DropdownMenu>

    </HeaderContainer>
  );
};

export default Header;
