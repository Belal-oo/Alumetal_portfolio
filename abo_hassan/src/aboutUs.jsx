import React from "react";
import styled from "styled-components";
import photo from "./assets/a8c92183-6921-4634-adee-4a58dcf9d3b2.jpg";
import photo2 from "./assets/5fedb3da-c348-4e4e-83a6-a74e8742645a.jpg";
const AboutUs = () => {
  return (
    <Main id="عنا">
      <MainHeader>
        <h1>من نحن</h1>
      </MainHeader>
      <Content>
        <ImageContainer>
          <Image src={photo} alt="" />
          <Image src={photo2} alt="" />
        </ImageContainer>
        <TextContainer>
          <Title>ابو حسن للاأوميتال</Title>
          <Paragraph>
            هي شبكة رائدة في مجال تنفيذ وتوريد أعمال الأوميتال عالية الجودة في
            مصر. تأسست الشركة برؤية مستقبلية وهدف واضح لتقديم أفضل الحلول
            والمنتجات في مجال أعمال الأوميتال لعملائنا الكرام.
          </Paragraph>
        </TextContainer>
      </Content>
    </Main>
  );
};

export default AboutUs;

const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8fafc;
  padding: 20px;
`;

const MainHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 3rem;
    color: #333;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 100%;
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const Image = styled.img`
  width: 70%;
  height: auto;
  border-radius: 10px;
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px;
  text-align: right;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
`;
