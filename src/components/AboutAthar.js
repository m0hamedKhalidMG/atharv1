import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Import Amiri font globally
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
`;

// إعداد مكونات الـ Styled Components
const AboutContainer = styled.div`
  background-color: #f1ede1;
  padding: 20px;
  direction: rtl;
  min-height: 100vh;
  font-family: 'Amiri', serif;
`;

const TitleBox = styled.div`
  background-color: #3b1112;
  color: #F3DFB8;
  padding: 30px;
  border-radius: 8px;
  text-align: right;
  font-size: 50px;
  font-weight: bold;
`;

const TextContent = styled.p`
  color: #F3DFB8;
  font-size: 18px;
  line-height: 1.8;
  margin-top: 20px;
 
`;

const AboutAthar = () => {
  return (
    <>
      <GlobalStyle />
      <AboutContainer>
        <TitleBox>
          منصة أثر للتعرف على الآثار السياحية البارزة في المملكة العربية السعودية.
          <TextContent>
            تساهم في اكتشاف الآثار التي اكتشفها عامة الشعب حديثاً ولم يتم تصنيفها
            من قبل الخبراء والعاملين في الآثار والسياحة؛ حتى يتم البحث فيها من قبل
            مختصين لتصنيفها وتسجيلها بشكل أسرع كمعلم أثري وسياحي.
          </TextContent>
        </TitleBox>
      </AboutContainer>
    </>
  );
};

export default AboutAthar;
