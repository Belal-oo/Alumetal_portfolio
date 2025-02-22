import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import photo from "./assets/a8c92183-6921-4634-adee-4a58dcf9d3b2.jpg";
import photo2 from "./assets/5fedb3da-c348-4e4e-83a6-a74e8742645a.jpg";

const AboutUs = () => {
  return (
    <Main id="من نحن">
      <MainHeader>
        <h1>من نحن</h1>
      </MainHeader>
      <Content>
        <ImageContainer>
          <Image src={photo2} alt="" />
        </ImageContainer>
        <TextContainer>
          <Title>الاتحاد للألوميتال</Title>
          <Paragraph>
            هي شبكة رائدة في مجال تنفيذ وتوريد أعمال الأوميتال عالية الجودة في
            مصر. تأسست الشركة برؤية مستقبلية وهدف واضح لتقديم أفضل الحلول
            والمنتجات في مجال أعمال الأوميتال لعملائنا الكرام.
          </Paragraph>
        </TextContainer>
      </Content>
      <Content>
        <ImageContainer>
          <Image src={photo} alt="" />
        </ImageContainer>
        <TextContainer>
          <Title>مميزات الوميتال الاتحاد </Title>
          <Paragraph>
            لوميتال ابوحسن يعتبر هذا القطاع من أفضل قطاعات الالوميتال و الاكثر
            استخداماً فى اعمال واجهات العماير و المطابخ و الشبابيك و الابواب
            وايضا التند و البلكونات لانه مقارنتا بقطاعات اخرى نجد ان قطاع ابوحسن
            يتميز بثقل فى الوزن من القطاعات الاخرى مما يودى الى مميات عديده مثل
            عزل الاصوات المزعجة لانه يسمح باضافه زجاج دابل لمنع الصوت زجاج دبل
            لمنع وكتم الصوت بطريقه افضل تساهم فى الحصول على الهدوء و الراحه
            المطلوبه و تقليل الاضائه فى حاله اختيار نوع معين مثل الزجاج العاكس
            او الزجاج المصنفر و منع الاتربه نهائيا ويمتاز قطاع الوميتال بي اس
            بالمتانة والقوة وسهولة الحركة
          </Paragraph>
        </TextContainer>
      </Content>
      <ButtonContainer>
        <Button to="/more-details">المزيد</Button>
      </ButtonContainer>
    </Main>
  );
};

export default AboutUs;

const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  padding: 20px;
`;

const MainHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
  padding: 20px;

  h1 {
    font-size: 3rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Image = styled.img`
  max-width: 70%;
  height: auto;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;

  &:hover {
    background-color: #0056b3;
  }
`;
