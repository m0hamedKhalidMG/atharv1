import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import batryImage from '../images/m2.jpeg';
import banomeImage from '../images/m1.jpeg';
import m3 from '../images/m3.jpeg';
import m4 from '../images/m3.jpeg';
import m5 from '../images/m5.jpeg';
import m6 from '../images/m6.jpeg';
import s from '../images/s.jpeg';
import m7 from '../images/m7.jpeg';
import m8 from '../images/m8.jpeg';
import m9 from '../images/m10.jpeg';
import m10 from '../images/m9.jpeg';
import m11 from '../images/m11.jpeg';
import m12 from '../images/m12.jpeg';
import m13 from '../images/m13.jpeg';
import m14 from '../images/m14.jpeg';
import m15 from '../images/m15.jpeg';
import m16 from '../images/m16.jpeg';
import m17 from '../images/m17.jpeg';
import m18 from '../images/m18.jpeg';
import ss from '../images/ss.jpeg'
import tt from '../images/tt.jpeg'
import ff from '../images/ff.jpeg'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
`;

const DetailsContainer = styled.div`
  background-color: #f1ede1;
  padding: 40px;
  font-family: '29LT Riwaya';
  direction: rtl;
  min-height: 100vh;
`;

const Title = styled.h2`
  color: #986c4a;
  font-size: 30px;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 40px;
`;

const Text = styled.p`
  color: #3b1112;
  font-size: 20px;
  line-height: 1.8;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
  gap: 40px; /* Add space between each set of images */
`;

const ImagePair = styled.div`
  display: flex;
  justify-content: center; /* Center the images in each pair */
  gap: 20px;

  img {
    width: 400px; /* Set a maximum width for larger screens */
    height: 350px; /* Auto height to maintain aspect ratio */
    object-fit: cover; /* Ensure the image covers the set dimensions */
    border-radius: 10px;
  }

  /* Media Queries for responsiveness */
  @media (max-width: 768px) {
    img {
      max-width: 300px; /* Reduce max width for medium screens */
    }
  }

  @media (max-width: 480px) {
    flex-direction: column; /* Change to column layout for small screens */
    align-items: center; /* Center the images in column layout */

    img {
      max-width: 100%; /* Full width for small screens */
    }
  }
`;




const ImageDescription = styled.div`
  font-size: 18px;
  line-height: 1.8;
  margin-top: 20px;
  font-family: 'Amiri', serif;
`;

const LandmarkDetails = () => {
  const landmarks = [
    {
      images: [batryImage, banomeImage],
      description: 'قصر المصمك: يُعرف قصر المصمك على أنه واحد من أبرز الآثار التاريخية في المملكة العربية السعودية، حيث يتكون القصر من مادة الطوب الطيني ذات السماكة العالية، ويقع في الركن الشمالي الشرقي للرياض القديمة قرب السور القديم، كما يحتوي بداخله متحفًا مخصصًا لتوحيد المملكة العربية السعودية على يد عبد العزيز بن عبد الرحمن آل سعود.',
    },
    {
      images: [ss, m4],
      description: 'الدرعية: هي مدينة عربية في وسط السعودية والعاصمة التاريخية لها. تم تأسيسها عام 1446 وكانت الدولة للسعودية الأولى.',
    },
    {
      images: [m5, m6],
      description: 'مدائن صالح : من اشهر الاثار التاريخية العريقة وتعود لعصر النبي صالح وقومه ثمود',
    },
    {
      images: [s],
      description: 'مدائن شعيب مدينة أثرية تضم بيوت ومعابد أثرية منحوته في الصخر والجبالوكان سكانها من قبيلة مدين. وذكرت في القرآن الكريم أن النبي موسى لجأ إليهم وصاهرهم وأن مساكن مدين قريبة من مساكن ثمود',
    },
    {
      images: [m7, m8],
      description: 'العلا القديمة: تعد العلا أكثر المناطق الأثرية في المملكة وتعتبر العاصمة الثانية تاريخياً لمملكة الأنباط القديمة.',
    },
    {
      images: [m9, m10],
      description: 'النقوش التاريخية في حائل: من أكبر وأهم المواقع الأثرية في المملكة التي يعود تاريخها إلى أكثر من 10 آلاف سنة قبل الميلاد، وهي رابع المواقع الأثرية التي تم إدراجها ضمن قائمة التراث العالمي من قبل اليونسكو نظرًا للرسوم الصخرية الفريدة.',
    },
    {
      images: [m11, m12],
      description: 'قرية ذي عين: تقع فوق مرتفع جبلي وتم تسميتها لكثرة عيون المياه فيها، كما تعتبر من المعالم الأثرية في السعودية نظرًا لاشتهارها بالحجارة البيضاء الكثيرة وزراعة الفواكه وأنواع الريحان.',
    },
    {
      images: [m13, m14],
      description: 'قرية الفاو: تعتبر من أهم أماكن الآثار في الرياض، تمثل نموذجًا تاريخيًا للمدينة العربية قبل الإسلام بكل ما تشتمل عليه من طرقات وأسواق ومقابر وآبار، فقرية الفاو كانت عاصمة دولة "كندة" التي كان لها دور كبير في الجزيرة العربية.',
    },
    {
      images: [tt, m16],
      description: 'قلعة تبوك: تم إنشاؤها في العصر العباسي ليعاد بناؤها في عهد السلطان العثماني سليمان القانوني.',
    },
    {
      images: [ff, m18],
      description: 'جدة التاريخية: يعود إلى عصور ما قبل الإسلام، وأن نقطة التحول في تاريخها كانت في عهد الخليفة الراشد عثمان بن عفان عندما اتخذها ميناءً لمكة المكرمة في عام 26 هـ. تضم جدة التاريخية عددًا من المعالم والمباني الأثرية والتراثية.',
    },
  ];

  return (
    <DetailsContainer>
      <GlobalStyle />
      <Title>أهم الآثار في المملكة</Title>
      <Content>
        <ImagesContainer>
          {landmarks.map((landmark, index) => (
            <div key={index}>
              <ImagePair>
                {landmark.images.map((image, idx) => (
                  <img key={idx} src={image} alt={`الآثار ${index + 1}-${idx + 1}`} />
                ))}
              </ImagePair>
              <ImageDescription>{landmark.description}</ImageDescription>
            </div>
          ))}
        </ImagesContainer>
      </Content>
    </DetailsContainer>
  );
};

export default LandmarkDetails;
