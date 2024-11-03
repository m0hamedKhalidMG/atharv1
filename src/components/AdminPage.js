import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AdminContainer = styled.div`
  padding: 20px;
  background-color: #f8f8f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: #3b1112;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 0 auto;
  padding: 10px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  @media (max-width: 600px) {
    height: 150px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

const CardContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TitleText = styled.h3`
  font-size: 1.2rem;
  color: #3b1112;
  margin: 0;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #555;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* limits description to 3 lines */
  -webkit-box-orient: vertical;
`;

const DateText = styled.p`
  font-size: 0.8rem;
  color: #999;
  text-align: right;
  margin: 0;
`;

const AdminPage = () => {
  const [reports, setReports] = useState([]);

  const fetchReports = async () => {
    try {
      const response = await axios.get('https://athar-be.vercel.app/api/reports');
      setReports(response.data);
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <AdminContainer>
      <Title>صفحة الأدمن - عرض البلاغات</Title>
      <GridContainer>
        {reports.map((report) => (
          <Card key={report._id}>
            <ImageWrapper>
              <Image
                src={`https://athar-be.vercel.app/uploads/${report.image}`}
                alt="Report"
                onClick={() => window.open(`https://athar-be.vercel.app/uploads/${report.image}`, '_blank')}
              />
            </ImageWrapper>
            <CardContent>
              <TitleText>{report.address}</TitleText>
              <Description>{report.description}</Description>
              <DateText>{new Date(report.createdAt).toLocaleDateString()}</DateText>
            </CardContent>
          </Card>
        ))}
      </GridContainer>
    </AdminContainer>
  );
};

export default AdminPage;
