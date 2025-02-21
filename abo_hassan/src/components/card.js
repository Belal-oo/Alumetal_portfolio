import React from 'react'

export const Card = ({isScrolled,service,key}) => {
  console.log(service)
  return (
    <div className={isScrolled?"ServiceCard viewed":"ServiceCard"} key={key} >
    <div className="ServiceTitle">{service.title}</div>
    <div className="ServiceDescription">{service.description}</div>
    <a href={service.url}>تفاصيل</a>
  </div>
  )
}
