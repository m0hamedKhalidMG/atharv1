import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  font-family: '29LT Riwaya', sans-serif;
  padding: 20px;
  direction: rtl;
  background-color: #f1ede1;
  min-height: 100vh;

  @media (min-width: 1024px) {
    padding: 40px;
  }
`;

const Title = styled.h2`
  color: #68855e;
  font-size: 24px;
  margin-bottom: 30px;
  text-align: right;

  @media (min-width: 1024px) {
    font-size: 28px;
  }
`;

const FormContainer = styled.form`
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 18px;
  color: #3b1112;
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  height: 100px;
`;

const SubmitButton = styled.button`
  background-color: #3b1112;
  color: #f1ede1;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  display: block;
  margin: 20px auto 0;
`;

const ReportPage = () => {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [address, setAddress] = useState('');
  const [isLocationEnabled, setIsLocationEnabled] = useState(false);

  // Function to convert lat/lng to a human-readable address using OpenCage
  const reverseGeocode = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=0c639b99674b4b6e959d9ed52bde8d4a`
      );
      const address = response.data.results[0]?.formatted;
      if (address) {
        setAddress(address);
      } else {
        toast.error('لا يمكن العثور على العنوان.', {
          position: 'top-center',
          autoClose: 3000,
          theme: 'colored',
        });
      }
    } catch (error) {
      toast.error('فشل في تحويل الإحداثيات إلى عنوان.', {
        position: 'top-center',
        autoClose: 3000,
        theme: 'colored',
      });
    }
  };

  // Function to get GPS location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          reverseGeocode(latitude, longitude); // Call reverse geocoding function
          setIsLocationEnabled(true);
        },
        (error) => {
          toast.error('فشل في الحصول على الموقع الجغرافي. يرجى المحاولة مرة أخرى.', {
            position: "top-center",
            autoClose: 3000,
            theme: 'colored',
          });
        }
      );
    } else {
      toast.error('خاصية الموقع غير مدعومة على هذا المتصفح.', {
        position: "top-center",
        autoClose: 3000,
        theme: 'colored',
      });
    }
  };

  useEffect(() => {
    getLocation(); // Automatically get location on component load
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('description', description);
    formData.append('image', image);
    formData.append('address', address); 

    try {
      const response = await axios.post('https://athar-be.vercel.app/api/reports', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('تم تقديم البلاغ بنجاح!', {
        position: "top-center",
        autoClose: 3000,
        theme: 'colored',
      });
      setDescription('');
      setImage(null);
      setAddress('');
    } catch (error) {
      toast.error('فشل في تقديم البلاغ. يرجى المحاولة مرة أخرى.', {
        position: "top-center",
        autoClose: 3000,
        theme: 'colored',
      });

      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Container>
      <ToastContainer />
      <Title>تقديم بلاغ عن أثر</Title>
      <FormContainer onSubmit={handleSubmit}>
        <FormField>
          <Label>وصف:</Label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="أدخل وصف الأثر هنا"
          />
        </FormField>
        <FormField>
          <Label>صورة:</Label>
          <Input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </FormField>
        <FormField>
          <Label>عنوان:</Label>
          <Input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="موقعك أو اسم المكان"
            readOnly={isLocationEnabled}
          />
        </FormField>
        <SubmitButton type="submit">إرسال</SubmitButton>
      </FormContainer>
    </Container>
  );
};

export default ReportPage;
