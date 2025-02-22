import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = ({ service }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <ServiceImage src={service.image} alt={service.title} />
        <Overlay>
          <ServicePrice>{service.price}</ServicePrice>
        </Overlay>
      </ImageContainer>
      
      <Content>
        <ServiceTitle>{service.title}</ServiceTitle>
        <ServiceDescription>{service.description}</ServiceDescription>
        
        <FeaturesList>
          {service.features.map((feature, index) => (
            <FeatureItem key={index}>{feature}</FeatureItem>
          ))}
        </FeaturesList>
        
        <DetailsLink to={`/details/${service.id}`}>
          <span>المزيد من التفاصيل</span>
        </DetailsLink>
      </Content>
    </CardContainer>
  );
};

// الأنماط باستخدام styled-components
const CardContainer = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  transform: translateY(${props => props.viewed ? '0' : '20px'});
  opacity: ${props => props.viewed ? 1 : 0};
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 16/9;
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

const ServicePrice = styled.span`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Content = styled.div`
  padding: 1.5rem;
  text-align: right;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #273036;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const FeatureItem = styled.li`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  
  &::before {
    content: '•';
    color: #3b82f6;
    margin-left: 0.5rem;
    font-size: 1.2rem;
  }
`;

const DetailsLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #273036;
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #3b82f6;
    
    span {
      transform: translateX(-5px);
    }
    
  }
`;

const ArrowIcon = styled.span`
  transition: transform 0.3s ease;
`;

