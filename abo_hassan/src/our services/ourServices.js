import "./main.css";
import Detalis from "./detalis/detalis";
import { useState, useEffect } from 'react';

function OurServices() {
    const services = [
        {
            title: "المطابخ",
            description: "جميع اسعار المطابخ داخل الرابط",
            url: "#",
        },
        {
            title: "اسعار الالوميتال",
            description: "شبابيك - ابواب - بلكونات ",
            url: "#",
        }
        ];
        const [isScrolled, setIsScrolled] = useState(false);

        useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY >= 480);
        };
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);
        return (
            <div className="ourServices" id="أعمالنا" style={{direction : "rtl"}}>
        <div className="WaveTop">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#273036" fill-opacity="1" d="M0,128L26.7,122.7C53.3,117,107,107,160,90.7C213.3,75,267,53,320,69.3C373.3,85,427,139,480,149.3C533.3,160,587,128,640,106.7C693.3,85,747,75,800,69.3C853.3,64,907,64,960,64C1013.3,64,1067,64,1120,101.3C1173.3,139,1227,213,1280,224C1333.3,235,1387,181,1413,154.7L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
            </svg>
        </div>
        <div className="ServicesContainer">
            <div  className="ServicesWrapper">
                <div className={isScrolled ? "SectionTitle viewed" : "SectionTitle"}>أعمالنا</div>
                    <div className="ServicesGrid">
                    {services.map((service, index) => (
                        <div className={isScrolled?"ServiceCard viewed":"ServiceCard"} key={index}>
                            <div className="ServiceTitle">{service.title}</div>
                            <div className="ServiceDescription">{service.description}</div>
                            <a href={service.url}>تفاصيل</a>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
    </div>
    );
}

export default OurServices;
