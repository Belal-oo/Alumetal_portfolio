import React from "react";
import styled from "styled-components";

const ContactUS = () => {
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
                <strong>العنوان:</strong> المدينة، الشارع، الدولة
              </li>
              <li>
                <strong>الهاتف:</strong> +123 456 789
              </li>
              <li>
                <strong>البريد الإلكتروني:</strong> info@example.com
              </li>
            </ul>
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
  padding: 50px 20px;
  background-color: #f9f9f9;
  text-align: center;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 40px;
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

  .contact-form .form-group {
    margin-bottom: 20px;
    padding-right: 5px;
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
    }
  }
`;
