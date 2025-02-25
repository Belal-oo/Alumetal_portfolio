// pages/MoreDetails.js
import React from 'react';
import styled from 'styled-components';
import { Card } from '../components/ourworkCard';
import bg1 from "../assets/5fedb3da-c348-4e4e-83a6-a74e8742645a.jpg"
import bg2 from "../assets/6ee7662b-54ce-488a-923b-6168742f9930.jpg"
import bg3 from "../assets/a8c92183-6921-4634-adee-4a58dcf9d3b2.jpg"
import bg4 from "../assets/dbe9cfd1-848e-40fd-a2d9-09199c5c6f12.jpg"
import bg5 from "../assets/f763fbfa-6e54-49f0-b991-a41fe5b10213.jpg"
import bg6 from "../assets/IMG-20250221-WA0017.jpg"
import bg7 from "../assets/IMG-20250221-WA0019.jpg"
import bg8 from "../assets/IMG-20250221-WA0021.jpg"
import bg9 from "../assets/IMG-20250221-WA0028.jpg"

const MoreDetails = () => {
  const service = [{
    id: 1,
    title: 'خدمة الأوميتال',
    description: 'نقدم خدمات الأوميتال عالية الجودة لتلبية احتياجاتك.',
    features: [
      'تصاميم عصرية',
      'جودة مواد ممتازة',
      'ضمان على العمل',
    ],
    image: bg1
  },
  {
    id: 1,
    title: 'خدمة الأوميتال',
    description: 'نقدم خدمات الأوميتال عالية الجودة لتلبية احتياجاتك.',
    features: [
      'تصاميم عصرية',
      'جودة مواد ممتازة',
      'ضمان على العمل',
    ],
    image: bg2
  },
  {
    id: 1,
    title: 'خدمة الأوميتال',
    // price: '1000 جنيه',
    description: 'نقدم خدمات الأوميتال عالية الجودة لتلبية احتياجاتك.',
    features: [
      'تصاميم عصرية',
      'جودة مواد ممتازة',
      'ضمان على العمل',
    ],
    image: bg3
  },
  {
    id: 2,
    title: 'خدمة الأوميتال',
    // price: '1000 جنيه',
    description: 'نقدم خدمات الأوميتال عالية الجودة لتلبية احتياجاتك.',
    features: [
      'تصاميم عصرية',
      'جودة مواد ممتازة',
      'ضمان على العمل',
    ],
    image: bg4
  },
  {
    id: 2,
    title: 'خدمة الأوميتال',
    // price: '1000 جنيه',
    description: 'نقدم خدمات الأوميتال عالية الجودة لتلبية احتياجاتك.',
    features: [
      'تصاميم عصرية',
      'جودة مواد ممتازة',
      'ضمان على العمل',
    ],
    image: bg5
  },
  {
    id: 2,
    title: 'خدمة الأوميتال',
    // price: '1000 جنيه',
    description: 'نقدم خدمات الأوميتال عالية الجودة لتلبية احتياجاتك.',
    features: [
      'تصاميم عصرية',
      'جودة مواد ممتازة',
      'ضمان على العمل',
    ],
    image: bg6
  },
  {
    id: 2,
    title: 'خدمة الأوميتال',
    // price: '1000 جنيه',
    description: 'نقدم خدمات الأوميتال عالية الجودة لتلبية احتياجاتك.',
    features: [
      'تصاميم عصرية',
      'جودة مواد ممتازة',
      'ضمان على العمل',
    ],
    image: bg7
  },
  {
    id: 2,
    title: 'خدمة الأوميتال',
    // price: '1000 جنيه',
    description: 'نقدم خدمات الأوميتال عالية الجودة لتلبية احتياجاتك.',
    features: [
      'تصاميم عصرية',
      'جودة مواد ممتازة',
      'ضمان على العمل',
    ],
    image: bg8
  },
  {
    id: 1,
    title: 'خدمة الأوميتال',
    // price: '1000 جنيه',
    description: 'نقدم خدمات الأوميتال عالية الجودة لتلبية احتياجاتك.',
    features: [
      'تصاميم عصرية',
      'جودة مواد ممتازة',
      'ضمان على العمل',
    ],
    image: bg9,
  },
];

  return (
    <Container>
      <Header>
        <h1>المزيد من التفاصيل</h1>
      </Header>
        <TextContent>
          <p>
            في هذه الصفحة، ستجد معلومات إضافية حول شركتنا والخدمات التي نقدمها في مجال الأوميتال.
            نحن نسعى باستمرار إلى توفير أفضل الحلول والمنتجات لعملائنا، بفضل فريقنا المتخصص ذو الخبرة الواسعة.
          </p>
          <p>
            نضمن لك الجودة والاحترافية في كل ما نقدمه، ونعمل جاهدين على تحقيق رضا عملائنا من خلال تقديم خدمات مميزة وأسعار تنافسية.
          </p>
        </TextContent>
      <ContentWrapper>
        {
          service.map((item, ) => (
            <Card service={item}/>))}
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    color: #273036;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 0 20px;
`;

const TextContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: right;
  line-height: 1.8;
  font-size: 1.1rem;
  color: #555;

  p {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    font-size: 1rem;
  }
`;

export default MoreDetails;