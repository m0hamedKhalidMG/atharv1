import React from 'react';
import styled from 'styled-components';
import oImage from '../images/o.png';

const PageContainer = styled.div`
  font-family: '29LT Riwaya', sans-serif;
  padding: 20px;
  direction: rtl;
  background-color: #f1ede1;
  min-height: 100vh;

  @media (min-width: 1024px) {
    padding: 40px;
  }
`;

const PageTitle = styled.h2`
  color: #986c4a;
  font-size: 24px;
  margin-bottom: 30px;
  text-align: right;

  @media (min-width: 1024px) {
    font-size: 28px;
  }
`;

const ContentImage = styled.div`
  width: 100%;
  height: 400px; /* حجم الصورة */
  background-color: #e0e0e0;
  background-image: url(${oImage}) !important;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  margin-bottom: 20px;
`;

const OldArchitecture = () => {
  return (
    <PageContainer>
      <PageTitle>مواقع أثرية والعمارة القديمة</PageTitle>
      <ContentImage />
    </PageContainer>
  );
};

export default OldArchitecture;
