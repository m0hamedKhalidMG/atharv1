import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  font-family: '29LT Riwaya', sans-serif;
  padding: 20px;
  direction: rtl;
  background-color: #f1ede1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    padding: 40px;
  }
`;

const Title = styled.h2`
  color: #3b1112;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

const Form = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 1024px) {
    padding: 30px;
  }
`;

const ContactText = styled.p`
  color: #3b1112;
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
`;

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting email data to the server
    console.log(email);
    alert('تم إرسال البريد الإلكتروني بنجاح!');
    setEmail('');
  };

  return (
    <ContactContainer>
      <Title>تواصل معنا</Title>
      <ContactText dir="rtl">
        <span style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ marginLeft: '5px' }}
          >
            <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C9.4 21 3 14.6 3 7c0-.55.45-1 1-1h3.03c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.02.74-.24 1.02l-2.2 2.2z" />
          </svg>
          <a href="tel:+966554299346" style={{ textDecoration: 'none', color: '#3b1112' }}>
            للوصول إلى مركز الاتصال، نأمل منك الاتصال على +966 55 429 9346
          </a>
        </span>

        <span style={{ display: 'flex', alignItems: 'center' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ marginLeft: '5px' }}
          >
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 4.25l-7 4.5-7-4.5V6l7 4.5 7-4.5v2.25z" />
          </svg>
          <a href="mailto:Athaarksa@gmail.com" style={{ textDecoration: 'none', color: '#3b1112' }}>
            أو مراسلتنا عبر البريد الإلكتروني على Athaarksa@gmail.com
          </a>
        </span>
      </ContactText>
    </ContactContainer>
  );
};

export default Contact;
