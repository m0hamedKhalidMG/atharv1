import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ServicesContainer = styled.div`
  font-family: '29LT Riwaya', sans-serif;
  padding: 20px;
  direction: rtl;
  background-color: #f1ede1;
  min-height: 100vh;

  @media (min-width: 1024px) {
    padding: 40px;
  }
`;

const SectionTitle = styled.h2`
  color: #3b1112;
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 28px;
  }
`;

const ServiceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 1024px) {
    width: 60%;
    margin: 0 auto;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline */
`;

const ServiceItem = styled.div`
  background-color: ${(props) => props.bgColor || '#986c4a'};
  color: ${(props) => props.textColor || '#f1ede1'};
  padding: 15px;
  border-radius: 25px;
  text-align: center;
  font-size: 18px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 1024px) {
    font-size: 20px;
    padding: 20px;
  }
`;

const ServicesPage = () => {
  return (
    <ServicesContainer>
      <SectionTitle>أنواع الآثار</SectionTitle>
      <ServiceList>
        <StyledLink to="/old-architecture">
          <ServiceItem bgColor="#986c4a">
            مواقع أثرية والعمارة القديمة
          </ServiceItem>
        </StyledLink>
        <StyledLink to="/stone-inscriptions">
          <ServiceItem bgColor="#5a504b">نقوش حجرية</ServiceItem>
        </StyledLink>
        <StyledLink to="/sculptures">
          <ServiceItem bgColor="#68855e">التماثيل والمنحوتات</ServiceItem>
        </StyledLink>
        <StyledLink to="/handcrafts">
          <ServiceItem bgColor="#9d4a4a">الحرف اليدوية والفنون</ServiceItem>
        </StyledLink>
        <StyledLink to="/marine-ruins">
          <ServiceItem bgColor="#688a90">آثار بحرية</ServiceItem>
        </StyledLink>
      </ServiceList>
    </ServicesContainer>
  );
};

export default ServicesPage;
