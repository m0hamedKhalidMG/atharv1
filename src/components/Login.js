import axios from 'axios';

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f1ede1;
`;

const LoginForm = styled.form`
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

const SignupLink = styled.div`
  margin-top: 20px;
  text-align: center;

  a {
    color: #3b1112;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      color: #986c4a; /* لون عند المرور */
    }
  }
`;

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to the backend
      const response = await axios.post('https://athar-be.vercel.app/api/v1/login', {
        email,
        password,
      });

      console.log('تم تسجيل الدخول بنجاح:', response.data);
      setError(''); // Clear any existing error messages
      navigate('/');
      // Get the user role from the response (assuming the response contains a role field)
      const userRole = response.data.result.role || 'user';
      const userEmail = response.data.result.name || email;
      const token = response.data.result.token;

      // Save role, email, and token in local storage
      localStorage.setItem('userRole', userRole);
      localStorage.setItem('userEmail', userEmail);
      localStorage.setItem('authToken', token);
      onLogin(userRole); // Call onLogin with the role (e.g., 'admin' or 'user')
    } catch (err) {
      // Handle any errors from the backend
      setError(err.response?.data?.message || 'البريد الإلكتروني أو كلمة المرور غير صحيحة');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>تسجيل الدخول</Title>
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
        <Button type="submit">تسجيل الدخول</Button>

        {/* رابط إنشاء حساب جديد */}
        <SignupLink>
          <p>ليس لديك حساب؟</p>
          <Link to="/signup">قم بإنشاء حساب</Link>
        </SignupLink>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;