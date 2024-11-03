import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import bannerImage from '../images/banner.jpg';
import newsImage1 from '../images/qq.jpeg'; // صورة تخص الخبر الأول
import newsImage2 from '../images/w.jpeg'; // صورة تخص الخبر الثاني
import newsImage3 from '../images/qq.jpeg'; // صورة تخص الخبر الثالث
import newsImage4 from '../images/ww.jpeg'; // صورة تخص الخبر الرابع
import newsImage5 from '../images/i.jpeg'; // صورة تخص الخبر الخامس
import batryImage from '../images/batry.png';
import banomeImage from '../images/banome.jpg';
import hh from '../images/10202.jpg';

const HomeContainer = styled.div`
  font-family: '29LT Riwaya', sans-serif !important;
  padding: 20px !important;
  direction: rtl !important;
  background-color: #f1ede1 !important;

  @media (min-width: 1024px) {
    padding: 40px !important;
  }
`;

const Banner = styled.div`
  width: 100% !important;
  height: 300px !important;
  background-image: url(${batryImage}) !important;
  background-size: cover !important;
  background-position: center !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  text-align: center !important;

  color: #f1ede1 !important;
  font-family: '29LT Riwaya', sans-serif !important;
  font-size: 72px !important;
  font-weight: bold !important;
  letter-spacing: 0.05em !important;
  line-height: 1.2 !important;

  @media (min-width: 1024px) {
    height: 400px !important;
    font-size: 90px !important;
  }

  @media (max-width: 768px) {
    font-size: 50px !important;
    height: 300px !important;
  }

  @media (max-width: 480px) {
    font-size: 36px !important;
    height: 200px !important;
  }
`;

const Section = styled.section`
  margin: 20px 0 !important;
  padding: 20px !important;
  background-color: #f1ede1 !important;
  border-radius: 10px !important;

  @media (min-width: 1024px) {
    margin: 40px 0 !important;
    padding: 30px !important;
  }
`;

const Title = styled.h2`
  color: #986c4a !important;
  font-size: 22px !important;
  margin-bottom: 10px !important;

  @media (min-width: 1024px) {
    font-size: 30px !important;
  }
`;

const ImageContainer = styled.div`
  width: 50% !important;
  height: 300px !important;
  background-color: #e0e0e0 !important;
  background-image: url(${banomeImage}) !important;
  background-size: cover !important;
  background-position: center !important;
  margin-bottom: 20px !important;
  border-radius: 10px !important;
  cursor: pointer; /* إضافة مؤشر اليد */

  @media (min-width: 1024px) {
    height: 300px !important;
  }
`;

const NewsSection = styled.div`
  margin-top: 40px !important;
  display: flex !important;
  flex-direction: column !important;

  @media (min-width: 1024px) {
    flex-direction: column !important;
    gap: 20px !important;
  }
`;

const NewsGrid = styled.div`
  display: flex !important;
  flex-wrap: wrap !important;
  justify-content: space-between !important;
  gap: 20px !important;

  @media (min-width: 1024px) {
    flex-direction: row !important;
    gap: 10px !important;
  }
`;

const NewsItem = styled.div`
  background-color: #f1ede1 !important;
  color: #986c4a !important;
  padding: 10px !important;
  border-radius: 8px !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  text-align: center !important;
  width: 100% !important;
  height: 300px !important;

  @media (min-width: 1024px) {
    width: 19% !important; /* عرض 19% لكل عنصر لضمان وجود 5 عناصر في الصف */
  }
`;

const NewsImage = styled.img`
  width: 100% !important;
  height: 150px !important;
  border-radius: 8px !important;
  object-fit: cover !important;
  margin-bottom: 10px !important;

  @media (min-width: 1024px) {
    height: 180px !important;
  }
`;

const NewsText = styled.p`
  font-size: 16px !important;

  @media (min-width: 1024px) {
    font-size: 18px !important;
  }
`;

const Home = () => {
  const navigate = useNavigate(); // استخدم الـ useNavigate للتوجيه

  const handleImageClick = () => {
    navigate('/landmark-details'); // توجيه المستخدم إلى صفحة التفاصيل
  };
  return (
    <HomeContainer>
      <Banner></Banner>
      <Section>
        <Title>أهم الآثار في المملكة</Title>
        <ImageContainer onClick={handleImageClick} />
      </Section>

      <NewsSection>
        <Title>آخر الأخبار</Title>
        <NewsGrid>
          <NewsItem
            as="a"
            href="https://sabq.org/saudia/hrmxs6"
            target="_blank"
          >
            <NewsImage src={newsImage1} alt="خبر" />
            <NewsText>
              تعرف على 25 موقعاً أثرياً اعتمدتهم "السياحة" بـ8 مناطق.. عسير
              تتصدر
            </NewsText>
          </NewsItem>
          <NewsItem
            as="a"
            href="https://sabq.org/saudia/2hhhzf6l7f"
            target="_blank"
          >
            <NewsImage src={newsImage2} alt="خبر" />
            <NewsText>
              برنامج جدة التاريخية: العثور على 25 ألفًا من المواد الأثرية تعود
              أقدمها إلى عصر الخلفاء الراشدين
            </NewsText>
          </NewsItem>
          <NewsItem
            as="a"
            href="https://search.app/Zb8RzYEJ1egmbcou8"
            target="_blank"
          >
            <NewsImage src={hh} alt="خبر" />
            <NewsText>
            فنون الصخر في حائل  أكبر متحف طبيعي في العالم المصدر
            </NewsText>
          </NewsItem>
          <NewsItem
            as="a"
            href="https://www.alarabiya.net/saudi-today/2017/07/21/%D8%A7%D9%84%D8%B9%D9%84%D8%A7-%D8%A3%D9%83%D8%A8%D8%B1-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A3%D8%AB%D8%B1%D9%8A%D8%A9-%D8%A8%D8%B9%D8%AF%D8%AF-%D8%A7%D9%84%D9%86%D9%82%D9%88%D8%B4-%D9%88%D8%A7%D9%84%D9%88%D8%A7%D8%AC%D9%87%D8%A7%D8%AA-%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D9%8A%D8%A9"
            target="_blank"
          >
            <NewsImage src={newsImage4} alt="خبر" />
            <NewsText>
              بالصور.. العلا أكبر مدينة أثرية بعدد الواجهات الصخرية
            </NewsText>
          </NewsItem>
          <NewsItem
            as="a"
            href="https://www.alarabiya.net/amp/saudi-today/2021/08/06/-%D9%87%D9%8A%D8%A6%D8%A9-%D8%A7%D9%84%D8%AA%D8%B1%D8%A7%D8%AB-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9-%D8%AA%D9%88%D8%AB%D9%91%D9%82-14-%D9%85%D9%88%D9%82%D8%B9%D8%A7%D9%8B-%D8%A3%D8%AB%D8%B1%D9%8A%D8%A7%D9%8B-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D8%AC%D9%84-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A-%D9%84%D9%84%D8%A2%D8%AB%D8%A7%D8%B1-"
            target="_blank"
          >
            <NewsImage src={newsImage5} alt="خبر" />
            <NewsText>
              هيئة التراث توثق 14 موقعًا أثريًا في السجل الوطني
            </NewsText>
          </NewsItem>
        </NewsGrid>
      </NewsSection>
    </HomeContainer>
  );
};

export default Home;
