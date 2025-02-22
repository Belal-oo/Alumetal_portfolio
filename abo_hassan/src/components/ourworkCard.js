// components/ourworkCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = ({ service }) => {
  const {
    id,
    title,
    description,
    features = [],
  } = service;

  const fallbackImage = '';

  return (
    <CardContainer>
      <ImageContainer>
        <ServiceImage 
          src={service.image || fallbackImage} 
          alt={title || 'اسم الخدمة'} 
          loading="lazy"
        />
        <Overlay>
        </Overlay>
      </ImageContainer>

      <Content>
        <ServiceTitle>{title || 'عنوان الخدمة'}</ServiceTitle>
        
        <ServiceDescription>
          {description || 'لا توجد تفاصيل متاحة حالياً.'}
        </ServiceDescription>

        {features.length > 0 && (
          <FeaturesList>
            {features.map((feature, index) => (
              <FeatureItem key={index}>{feature}</FeatureItem>
            ))}
          </FeaturesList>
        )}

        <DetailsLink to={`/details/${id}`}>
          <span>المزيد من التفاصيل</span>
          <ArrowIcon>→</ArrowIcon>
        </DetailsLink>
      </Content>
    </CardContainer>
  );
};

// الأنماط باستخدام Flexbox
const CardContainer = styled.div`
  direction:rtl;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 800px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
`;


const Content = styled.div`
  padding: 2rem;
  text-align: right;

  @media (max-width: 768px) {
    padding: 1rem;
    padding-left:5rem;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  color: #273036;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ServiceDescription = styled.p`
  color: #6b7280;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const FeatureItem = styled.li`
  padding: 0.8rem 0;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  
  &::before {
    content: '•';
    color: #3b82f6;
    margin-left: 0.8rem;
    font-size: 1.5rem;
  }
`;

const DetailsLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: #273036;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #3b82f6;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const ArrowIcon = styled.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
`;