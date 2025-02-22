import React from 'react';
import styled from 'styled-components';

const MoreDetails = () => {
  return (
    <Container>
      <Header>
        <h1>المزيد من التفاصيل</h1>
      </Header>
      <Content>
        <p>
          هنا يمكنك العثور على المزيد من المعلومات عن الشركة والخدمات التي نقدمها.
        </p>
        <p>
          لدينا فريق متخصص في مجال الأوميتال، ونعمل على توفير أفضل الحلول والمنتجات لعملائنا.
        </p>
        <p>
          إذا كان لديك أي أسئلة أو تحتاج إلى مزيد من المعلومات، لا تتردد في الاتصال بنا.
        </p>
      </Content>
    </Container>
  );
};

export default MoreDetails;

const Container = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
`;

const Header = styled.div`
  margin-bottom: 20px;

  h1 {
    font-size: 2.5rem;
    color: #333;
  }
`;

const Content = styled.div`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
`;