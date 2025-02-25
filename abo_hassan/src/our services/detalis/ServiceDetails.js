import { useParams, Link } from 'react-router-dom';
import "./service-details.css"

const ServiceDetails = () => {
    const { id } = useParams();
    const services = [
        {
          id: 1,
          title: "أسعار المطابخ 👩‍🍳♨️",
          details: {
            "كلادينج دواخل": {
              "فايبر": "تواصل معنا للاستعلام",
              "كلادينج": "تواصل معنا للاستعلام",
              "بروديوم ضد الكسر": "تواصل معنا للاستعلام"
            },
            "بديل خشمنيوم": {
              "فايبر": "تواصل معنا للاستعلام",
              "مودرن فايبر": "تواصل معنا للاستعلام",
              "مودرن شيت": "تواصل معنا للاستعلام"
            },
            "خامات خاصة": {
              "HPL": "تواصل معنا للاستعلام",
              "بولى لاك": "تواصل معنا للاستعلام",
              "جود وود": "تواصل معنا للاستعلام"
            },
            "الضمان": {
              "المطبخ": "10 سنوات 🪬",
              "الإكسسوارات": "3 سنوات ضد عيوب الصناعة"
            },
            "القياسات": {
              "معاينة المطابخ": "تواصل معنا للاستعلام",
            }
          }
        },
        {
          id: 2,
          title: "أسعار الألوميتال 🔩",
          details: {
            "المنتجات": {
              "شبابيك UPVC": "تواصل معنا للاستعلام",
              "أبواب ألومنيوم": "تواصل معنا للاستعلام",
              "بلكونات": "تواصل معنا للاستعلام"
            },
            "الخامات": {
              "ألومنيوم عادي": "تواصل معنا للاستعلام",
              "ألومنيوم ممتاز": "تواصل معنا للاستعلام",
              "UPVC ألماني": "تواصل معنا للاستعلام"
            },
            "إضافات": {
              "زجاج سيكوريت": "تواصل معنا للاستعلام",
              "عازل صوتي": "تواصل معنا للاستعلام",
              "تصميمات ديكورية": "تواصل معنا للاستعلام"
            },
            "الضمان": {
              "الهياكل": "5 سنوات",
              "التشطيبات": "3 سنوات"
            }
          }
        }
      ];

    const service = services.find(s => s.id === parseInt(id));

    if (!service) return <div>الخدمة غير موجودة</div>;
    
    return (
        <div className="service-details">
          <h1>{service?.title}</h1>
          
          {Object.entries(service?.details || {}).map(([category, items]) => (
            <div key={category} className="category-section">
              <h2 className="category-title">{category}</h2>
              
              <div className="items-grid">
                {Object.entries(items).map(([item, price]) => (
                  <div key={item} className="price-item">
                    <span className="material">{item}</span>
                    <span className={`price ${price.includes('تواصل') ? 'contact-price' : ''}`}>
                      {price}
                      {/* {price.includes('تواصل') && (
                        <Link to="/contact" className="contact-button">
                          اتصل الآن
                        </Link>
                      )} */}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="notes">
            <p>ملاحظات هامة:</p>
            <ul className="notes-list">
              <li>✓ الأسعار قابلة للتغيير حسب المواصفات</li>
              <li>✓ خصم خاص للطلبات الكمية</li>
              <li>✓ خدمة التركيب متاحة 24 ساعة</li>
            </ul>
            <Link to="/" className="back-button">
              ← العودة للرئيسية
            </Link>
          </div>
        </div>
    );
};

export default ServiceDetails;