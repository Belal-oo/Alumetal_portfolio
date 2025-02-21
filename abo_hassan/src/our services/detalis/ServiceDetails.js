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
              "فايبر": "3500 جنيه",
              "كلادينج": "3700 جنيه",
              "بروديوم ضد الكسر": "3900 جنيه"
            },
            "بديل خشمنيوم": {
              "فايبر": "3500 جنيه",
              "مودرن فايبر": "4000 جنيه",
              "مودرن شيت": "5000 جنيه"
            },
            "خامات خاصة": {
              "HPL": "4650 جنيه/متر",
              "بولى لاك": "5100 جنيه/متر",
              "جود وود": "اتصل للاستعلام"
            },
            "الضمان": {
              "المطبخ": "10 سنوات 🪬",
              "الإكسسوارات": "3 سنوات ضد عيوب الصناعة"
            },
            "القياسات": {
              "معاينة المطابخ": "100 جنيه",
            }
          }
        },
        {
          id: 2,
          title: "أسعار الألوميتال 🔩",
          details: {
            "المنتجات": {
              "شبابيك UPVC": "سعر حسب المقاس",
              "أبواب ألومنيوم": "تبدأ من 2500 جنيه",
              "بلكونات": "تصميمات خاصة حسب الطلب"
            },
            "الخامات": {
              "ألومنيوم عادي": "1200 جنيه/متر",
              "ألومنيوم ممتاز": "1800 جنيه/متر",
              "UPVC ألماني": "2200 جنيه/متر"
            },
            "إضافات": {
              "زجاج سيكوريت": "+300 جنيه/متر",
              "عازل صوتي": "+500 جنيه/متر",
              "تصميمات ديكورية": "اتصل للاستعلام"
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
                    <span className="price">{price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="notes">
            <p>ملاحظات:</p>
            <ul>
              <li>✓ الأسعار تشمل التركيب</li>
              <li>✓ خصم 5% للطلبات الكبيرة</li>
              <li>✓ خدمة ما بعد البيع متاحة 24/7</li>
            </ul>
            <Link to="/" className="back-button mobile-only">
              ← العودة
            </Link>
          </div>
        </div>
      );
    };
export default ServiceDetails;