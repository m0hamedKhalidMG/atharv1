
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logoImage from '../images/logo.jpg'; // افترض أن لديك صورة اللوغو
import vision2030Image from '../images/ll.png'; // افترض أن لديك صورة رؤية السعودية 2030

const FooterContainer = styled.footer`
  background-color: #3b1112;
  padding: 40px 20px;
  color: white;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  direction: rtl;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.2);

  @media (min-width: 1024px) {
    text-align: right;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImportantLinks = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  text-align: right;

  h4 {
    font-size: 20px;
    margin-bottom: 15px;
    color: #f9d342;
    font-weight: bold;
  }

  a {
    color: #f1ede1;
    text-decoration: none;
    margin-bottom: 10px;
    display: block;
    transition: color 0.3s ease;

    &:hover {
      color: #f9d342;
    }
  }
`;

const LogosContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Vision2030Logo = styled.img`
  width: 120px;
  height: auto;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const WhatsAppContainer = styled.div`
  margin-top: 20px;
  text-align: right;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #f9d342;

  a {
    color: #f9d342;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s ease;

    &:hover {
      color: #fff;
    }
  }

  svg {
    font-size: 24px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <ImportantLinks>
          <h4>روابط مهمة</h4>
          <a
            href="https://heritage.moc.gov.sa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            موقع وزارة الثقافة
          </a>
          <a
            href="https://ksaforunesco.org/ar/ksas-world-heritage-list/"
            target="_blank"
            rel="noopener noreferrer"
          >
            قائمة التراث العالمي في السعودية
          </a>
          <a
            href="https://www.sta.gov.sa/ar/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            موقع هيئة السياحة
          </a>
        </ImportantLinks>

        <LogosContainer>
          <Logo src={logoImage} alt="لوغو أثر" />
          <Vision2030Logo src={vision2030Image} alt="رؤية السعودية 2030" />
        </LogosContainer>
      </FooterContent>
      <WhatsAppContainer>
        <FontAwesomeIcon icon={faWhatsapp} />
        <a
  href="https://wa.me/+966 55 429 9346"
  target="_blank"
  rel="noopener noreferrer"
>
  Chat with us on WhatsApp
</a>

      </WhatsAppContainer>
      <p style={{ marginTop: '30px', fontSize: '14px' }}>
        © 2024 أثر - جميع الحقوق محفوظة
      </p>
    </FooterContainer>
  );
};

export default Footer;
