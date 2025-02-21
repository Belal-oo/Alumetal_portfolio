import React from 'react';
import { Link } from 'react-router-dom'; 

export const Card = ({ isScrolled, service }) => {
  return (
    <div className={isScrolled ? "ServiceCard viewed" : "ServiceCard"}>
      <div className="ServiceTitle">{service.title}</div>
      <div className="ServiceDescription">{service.description}</div>
      <Link 
        to={`/details/${service.id}`} // تغيير من href إلى to
        className="details-link"
      >
        تفاصيل
      </Link>
    </div>
  );
};