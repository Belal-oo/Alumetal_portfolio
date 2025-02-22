import React from "react";
import styled from "styled-components";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactUS = () => {
  const handelWahtsClick = (p) => {
    console.log("lallaalla");
    console.log(p);
  };

  return (
    <Main id="تواصل معنا">
      <div className="container">
        <h1>تواصل معنا</h1>
        <p>
          نحن هنا لمساعدتك! إذا كان لديك أي أسئلة أو استفسارات، فلا تتردد في
          التواصل معنا.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h2>معلومات التواصل</h2>
            <ul>
              <li>
                <strong>العنوان:</strong> المنشيه، الشارع، الدولة
              </li>
              <li>
                <strong>الهاتف:</strong> +155 777 555
              </li>
              <li>
                <strong>البريد الإلكتروني:</strong> Hasona@example.com
              </li>
            </ul>
            <button className="iconn" onClick={handelWahtsClick}>
              <IoLogoWhatsapp className="heheh" />
            </button>
          </div>

          <div className="contact-form">
            <h2>أرسل لنا رسالة</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">الاسم الكامل</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">البريد الإلكتروني</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">الرسالة</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit">إرسال</button>
            </form>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default ContactUS;

const Main = styled.div`
  height: 81vh;

  padding: 100px 30px;
  background-color: #f9f9f9;
  text-align: center;
  * {
    direction: rtl;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.5rem;
    padding: 50px;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 50px;
  }

  .contact-content {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    text-align: right;
  }

  .contact-info,
  .contact-form {
    flex: 1;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .contact-info h2,
  .contact-form h2 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 20px;
  }

  .contact-info ul {
    list-style: none;
    padding: 0;
  }

  .contact-info ul li {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 10px;
  }

  .contact-info .iconn {
    font-size: 3rem;
    padding: 20px;
    float: left;
    border: none;
    background-color: white;
  }
  .contact-info .iconn .heheh {
    cursor: pointer;
  }

  .contact-form .form-group {
    margin-bottom: 20px;
    padding-left: 10px;
  }

  .contact-form label {
    display: block;
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 5px;
  }

  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .contact-form textarea {
    resize: vertical;
  }

  .contact-form button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    font-size: 1.1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .contact-form button:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    .contact-content {
      direction: rtl;
      flex-direction: column;
      gap: 20px;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      display: flex;
      padding: 20px;
    }
  }
`;
