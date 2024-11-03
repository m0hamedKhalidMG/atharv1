import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f1ede1;
`;

const SignUpForm = styled.form`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const Title = styled.h2`
  color: #3b1112;
  margin-bottom: 20px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3b1112;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #986c4a;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

const LoginLink = styled.div`
  margin-top: 20px;
  text-align: center;

  a {
    color: #3b1112;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      color: #986c4a;
    }
  }
`;


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('كلمتا المرور غير متطابقتين');
      return;
    }

    try {
      // Send POST request to the backend
      const response = await axios.post('https://athar-be.vercel.app/api/v1/register', {
        email,
        password,
        passwordCheck: confirmPassword,
      });

      console.log('تم التسجيل بنجاح:', response.data);
      setError(''); // Clear any existing error messages
      navigate('/login');

    } catch (err) {
      // Handle any errors from the backend
      setError(err.response?.data?.message || 'حدث خطأ أثناء التسجيل');
    }
  };

  return (
    <SignUpContainer>
      <SignUpForm onSubmit={handleSubmit}>
        <Title>إنشاء حساب</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="تأكيد كلمة المرور"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button type="submit">إنشاء حساب</Button>

        {/* رابط العودة إلى صفحة تسجيل الدخول */}
        <LoginLink>
          <p>لديك حساب بالفعل؟</p>
          <Link to="/login">تسجيل الدخول</Link>
        </LoginLink>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;