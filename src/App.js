import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaFacebook, FaTwitter, FaInstagram, FaArrowUp, FaWhatsapp, FaRegEnvelope } from "react-icons/fa";
import Slider from "react-slick";
import emailjs from "emailjs-com";

// Translations object
const translations = {
  ar: {
    home: "الرئيسية",
    services: "الخدمات",
    contact: "تواصل معانا",
    ourServices: "خدماتنا",
    customers: "عملاؤنا",
    name: "الاسم",
    phone: "رقم الهاتف",
    message: "رسالتك",
    watchVideo: "📹 شاهد الفيديو",
    send: "إرسال",
    footerDescription: "حلول أتمتة منزلية ذكية وموثوقة باستخدام إنترنت الأشياء.",
    quickLinks: "روابط سريعة",
    contactUs: "تواصل معنا",
    heroTitle: "حلول ذكية لمنزلك",
    heroSubtitle: "مع Net Geeks، تحكم بمنزلك بسهولة وأناقة.",
    servicesList: [
      { title: "أنظمة الإنتركم", description: "تركيب وصيانة أنظمة إنتركم Hikvision بكفاءة عالية." },
      { title: "كاميرات داخلية وخارجية", description: "تركيب كاميرات TAPO وHikvision مع دعم ما بعد البيع." },
      { title: "التحكم في الطاقة", description: "مراقبة وجدولة استهلاك الطاقة للأجهزة المنزلية مع تقارير استهلاك." },
      { title: "التحكم عن بعد", description: "التحكم في التكييف، الغسالة، اللمبات، وغيرها عبر الإنترنت." },
      { title: "إضاءة قابلة للتعتيم", description: "التحكم في إضاءة الديكور بسهولة، نجحت في ميفيدا رمضان الماضي." },
      { title: "التحكم في الري", description: "أتمتة أنظمة الري المنزلية حسب التصميم." }
    ],
    customersList: [
      "المهندس عمرو محمد حسن: مدينتي - فيلا (إنترنت، تليفون، تكييف، إنتركم، ري)",
      "الآنسة دينا عبداللطيف: مدينتي - فيلا (إنترنت، إنتركم، أمان)",
      "المهندس كريم مصطفى: مدينة نصر - شقة (إنترنت، تليفون)",
      "المهندس مصطفى شريف: مزرعة دجاج (مراقبة درجة الحرارة)",
      "الآنسة نجوى فريد: مدينتي - شقة (إنترنت، كاميرات، ري)",
      "المهندس أحمد فرحات: ميفيدا (إنترنت، تكييف، إنتركم، ري، إضاءة قابلة للتعتيم)",
      "السيد حسام الدين فرحات: (إنترنت، كاميرات)",
      "الآنسة ميرفت فريد: (نظام طوارئ، كاميرات)",
      "دكتور أحمد طارق: (تحسين إنترنت، كاميرات)",
      "المهندسة لينا بطراوي: (تحسين سرعة الإنترنت)",
      "المهندس محمد العربي: (كاميرات، إضاءة بالحركة)"
    ]
  },
  en: {
    home: "Home",
    services: "Services",
    contact: "Contact",
    ourServices: "Our Services",
    customers: "Our Customers",
    name: "Name",
    phone: "Phone",
    message: "Your Message",
    send: "Send",
    watchVideo: "📹 Watch Video",
    footerDescription: "Smart and reliable home automation solutions using IoT.",
    quickLinks: "Quick Links",
    contactUs: "Contact Us",
    heroTitle: "Smart Solutions for Your Home",
    heroSubtitle: "With Net Geeks, control your home with ease and style.",
    productShowcase: "📷 Product Showcase",
    productImages: [
      {
        src: "https://th.bing.com/th/id/OIP.N_mKRL-X4YKDfNt4oQNInQHaFf?r=0&rs=1&pid=ImgDetMain",
        alt: "Product 1"
      },
      {
        src: "https://th.bing.com/th/id/OIP.6XOE6XMopNCM1lEzgZ1uAQHaFJ?r=0&w=700&h=486&rs=1&pid=ImgDetMain",
        alt: "Product 2"
      },
      {
        src: "https://th.bing.com/th/id/R.ca0a9c602e779f3b428cd1891c9c21bf?rik=Vg6zSqwMltHhfw&pid=ImgRaw&r=0",
        alt: "Product 3"
      }
    ],
    servicesList: [
      { title: "Intercom Systems", description: "Installation and maintenance of Hikvision intercom systems with high efficiency." },
      { title: "Indoor and Outdoor Cameras", description: "Install TAPO and Hikvision cameras with after-sales support." },
      { title: "Power Control", description: "Monitor and schedule power usage for home devices with consumption reports." },
      { title: "Remote Control", description: "Control AC, washing machine, lights, and more via the internet." },
      { title: "Dimmable Lighting", description: "Control decorative lighting easily, proven in Mivida last Ramadan." },
      { title: "Irrigation Control", description: "Automate home irrigation systems based on design." }
    ],
    customersList: [
      "Eng. Amr Mohamed Hassan: Madinaty - Villa (Internet, Phone, AC, Intercom, Irrigation)",
      "Ms. Dina Abdel Latif: Madinaty - Villa (Internet, Intercom, Security)",
      "Eng. Karim Mostafa: Nasr City - Apartment (Internet, Phone)",
      "Eng. Mostafa Sherif: Chicken Farm (Temperature Monitoring)",
      "Ms. Nagwa Farid: Madinaty - Apartment (Internet, Cameras, Irrigation)",
      "Eng. Ahmed Farhat: Mivida (Internet, AC, Intercom, Irrigation, Dimmable Lighting)",
      "Mr. Hossam Farhat: (Internet, Cameras)",
      "Ms. Mervat Farid: (Emergency System, Cameras)",
      "Dr. Ahmed Tarek: (Internet Optimization, Cameras)",
      "Eng. Lina Batrawy: (Internet Speed Improvement)",
      "Eng. Mohamed El-Araby: (Cameras, Motion Lighting)"
    ]
  }
};

// Welcome Screen Component
const WelcomeScreen = ({ onStart }) => (
  <motion.div
    className="fixed inset-0 bg-blue-900 flex flex-col items-center justify-center z-[9999]"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Net Geeks</h1>
    <motion.button
      onClick={onStart}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="mt-4 px-8 py-4 bg-yellow-400 text-blue-900 rounded-full font-semibold hover:bg-yellow-300 transition"
    >
      Start Your Journey With Us
    </motion.button>
  </motion.div>
);

// Contact Form Modal
const ContactFormModal = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(() => {
        alert("Message sent successfully!");
        onClose();
      }, (error) => {
        console.error(error);
        alert("Failed to send message.");
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <motion.div
        className="bg-white p-8 rounded-xl max-w-md w-full shadow-2xl relative"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-red-500">×</button>
        <h3 className="text-2xl font-bold mb-4 text-blue-900">Contact Us</h3>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="contact_number" value={Date.now()} />
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input name="name" onChange={handleChange} required className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone</label>
            <input name="phone" onChange={handleChange} required className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea name="message" onChange={handleChange} required className="w-full border border-gray-300 p-2 rounded"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded hover:bg-yellow-400 hover:text-blue-900 transition">
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
};

// Header Component
const Header = ({ t, lang, setLang, showContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };
  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-xl shadow-md ${isScrolled ? "bg-blue-900/90 py-2" : "bg-blue-800/60 py-4"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        <motion.div
          className="text-xl sm:text-2xl font-extrabold text-white"
          whileHover={{ scale: 1.1 }}
        >
          Net Geeks
        </motion.div>
        <button
          className="sm:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
        <nav className={`${mobileMenuOpen ? "block" : "hidden"} sm:block w-full sm:w-auto mt-4 sm:mt-0`}>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm sm:text-base">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("home")}
              className="px-4 py-2 rounded-full bg-yellow-400 text-blue-900 hover:bg-yellow-300 transition"
            >
              {t.home}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("services")}
              className="px-4 py-2 rounded-full bg-yellow-400 text-blue-900 hover:bg-yellow-300 transition"
            >
              {t.services}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={showContact}
              className="px-4 py-2 rounded-full bg-yellow-400 text-blue-900 hover:bg-yellow-300 transition"
            >
              {t.contact}
            </motion.button>
            <motion.button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="px-4 py-2 rounded-full bg-white text-blue-900 border border-yellow-400 hover:bg-yellow-400 hover:text-blue-900 text-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {lang === "ar" ? "English" : "العربية"}
            </motion.button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

// Hero Section
const HeroSection = ({ t }) => (
  <section
    id="home"
    className="relative h-[80vh] bg-cover bg-center"
    style={{
      backgroundImage: "linear-gradient(to bottom, rgba(30, 58, 138, 0.7), rgba(30, 58, 138, 0.3)), url('https://images.unsplash.com/photo-1604938257005-4f3e3b4c1d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
    }}
  >
    <motion.div
      className="container mx-auto h-full flex flex-col items-center justify-center text-center text-white px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">{t.heroTitle}</h1>
      <p className="text-lg sm:text-xl md:text-2xl max-w-xl">{t.heroSubtitle}</p>
      <motion.button
        className="mt-6 bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open("https://wa.me/201095438932", "_blank")}
      >
        {t.contact}
      </motion.button>
    </motion.div>
  </section>
);

// Footer Component
const Footer = ({ t }) => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-blue-900 text-white py-12 sm:py-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <div>
          <img
            src="https://via.placeholder.com/150x50?text=Net+Geeks+Logo"
            alt="Net Geeks Logo"
            className="h-8 sm:h-10 mb-4"
          />
          <p className="text-gray-300 text-sm sm:text-base">{t.footerDescription}</p>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-yellow-400">{t.quickLinks}</h3>
          <ul className="space-y-2">
            <li>
              <button onClick={() => scrollToSection("home")} className="hover:text-yellow-400 transition text-sm sm:text-base">
                {t.home}
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("services")} className="hover:text-yellow-400 transition text-sm sm:text-base">
                {t.services}
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-yellow-400">{t.contactUs}</h3>
          <p className="text-gray-300 text-sm sm:text-base">info@netgeeks.com</p>
          <p className="text-gray-300 mb-4 text-sm sm:text-base">+20 1095438932</p>
          <div className="flex space-x-4">
            <motion.a href="#" whileHover={{ scale: 1.3 }} className="text-white hover:text-yellow-400"> 
              <FaFacebook size={20} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.3 }} className="text-white hover:text-yellow-400">
              <FaTwitter size={20} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.3 }} className="text-white hover:text-yellow-400">
              <FaInstagram size={20} />
            </motion.a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-400 text-xs sm:text-sm">
        © {new Date().getFullYear()} Net Geeks. All rights reserved.
      </div>
    </footer>
  );
};

// Rating Stars Component
const RatingStars = () => (
  <div className="flex justify-center mt-2 sm:mt-4">
    {[...Array(5)].map((_, i) => (
      <motion.div key={i} whileHover={{ scale: 1.2 }}>
        <FaStar className="text-yellow-400 mx-0.5" />
      </motion.div>
    ))}
  </div>
);

// Media Section
const MediaSection = ({ t }) => {
  const isArabic = t.lang === "ar";
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    rtl: isArabic,
  };
  const productImages = t.productImages || [
    {
      src: "https://th.bing.com/th/id/OIP.N_mKRL-X4YKDfNt4oQNInQHaFf?r=0&rs=1&pid=ImgDetMain",
      alt: "Default Image 1"
    },
    {
      src: "https://th.bing.com/th/id/OIP.6XOE6XMopNCM1lEzgZ1uAQHaFJ?r=0&w=700&h=486&rs=1&pid=ImgDetMain",
      alt: "Default Image 2"
    },
    {
      src: "https://th.bing.com/th/id/R.ca0a9c602e779f3b428cd1891c9c21bf?rik=Vg6zSqwMltHhfw&pid=ImgRaw&r=0",
      alt: "Default Image 3"
    }
  ];
  return (
    <section id="products" className="py-12 sm:py-24 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto text-center px-4">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-blue-900"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t.productShowcase}
        </motion.h2>
        {isArabic ? (
          <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto overflow-hidden rounded-xl shadow-2xl border border-yellow-400">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&rel=0"
                title="فيديو تعريفي"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[200px] sm:h-[300px] md:h-[400px]"
              ></iframe>
            </div>
          </div>
        ) : (
          <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-2xl border border-yellow-400">
            <Slider {...settings}>
              {productImages.map((img, i) => (
                <motion.div
                  key={i}
                  className="h-[200px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-white"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
};

// Services Component
const Services = ({ t }) => {
  const [openVideo, setOpenVideo] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleOpen = (index) => {
    setActiveIndex(index);
    setOpenVideo(true);
  };
  const handleClose = () => {
    setOpenVideo(false);
    setActiveIndex(null);
  };
  const videoUrls = [
    "https://www.youtube.com/embed/-SBao0_k0Is",
    "https://www.youtube.com/embed/8Dbv4qc4HEM",
    "https://www.youtube.com/embed/d411Yry9TBg",
    "https://www.youtube.com/embed/d411Yry9TBg",
    "https://www.youtube.com/embed/t06jxbaaKbo",
    "https://www.youtube.com/embed/gCUyTRL9YRA",
  ];
  return (
    <section id="services" className="py-12 sm:py-24 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto text-center px-4">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold mb-8 sm:mb-12 text-blue-900"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.ourServices}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.servicesList.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-xl border-t-4 border-yellow-400 hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-blue-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{service.description}</p>
              <RatingStars />
              <button
                onClick={() => handleOpen(i)}
                className="mt-3 sm:mt-4 px-4 py-2 bg-blue-900 text-white rounded-full hover:bg-yellow-400 hover:text-blue-900 transition text-sm sm:text-base"
              >
                {t.watchVideo}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      {openVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-xl p-4">
            <iframe
              src={videoUrls[activeIndex]}
              title="Service Video"
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] rounded-xl shadow-2xl border border-yellow-400"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white bg-red-500 px-2 py-1 rounded-full hover:bg-red-600 transition text-sm"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

// Customers Component
const Customers = ({ t }) => (
  <section id="customers" className="py-12 sm:py-24 bg-gray-100">
    <div className="container mx-auto text-center px-4">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-blue-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {t.customers}
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {t.customersList.map((name, i) => (
          <motion.div
            key={i}
            className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-md hover:shadow-xl transition"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <p className="text-gray-800 text-sm sm:text-base">{name}</p>
            <RatingStars />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Back to Top Button
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <motion.button
      className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-blue-900 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-yellow-400 hover:text-blue-900 ${isVisible ? "block" : "hidden"
        }`}
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaArrowUp size={16} />
    </motion.button>
  );
};

// Loading Bar Component
const LoadingBar = () => (
  <motion.div
    className="fixed top-0 left-0 h-1 bg-yellow-400 z-[9999]"
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: 1.2 }}
  />
);

// Main App Component
const App = () => {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("light");
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);

  const t = translations[lang];

  // Simulate loading
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const handleStart = () => {
    setShowWelcome(false);
  };

  return (
    <AnimatePresence>
      {showWelcome ? (
        <WelcomeScreen onStart={handleStart} key="welcome" />
      ) : (
        <div
          dir={lang === "ar" ? "rtl" : "ltr"}
          className={`min-h-screen relative animate-gradient-bg ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gradient-to-tl from-gray-100 to-white"} transition-all`}
          style={{ fontFamily: lang === "ar" ? "'Tajawal', sans-serif" : "'Inter', sans-serif" }}
        >
          {/* Styles */}
          <style>
            {`
    .animate-gradient-bg {
      background: linear-gradient(45deg, #1E3A8A, #3B82F6, #FBBF24, #1E3A8A); 
      background-size: 400%;
      animation: gradient 15s ease infinite;
    }

    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* RTL Arrows for Slick Slider */
    [dir="rtl"] .slick-prev:before {
      content: '\\276E';
      left: auto !important;
      right: 15px !important;
    }

    [dir="rtl"] .slick-next:before {
      content: '\\276F';
    }

    @media (max-width: 768px) {
      .container {
        padding: 0 1rem !important;
      }

      .animate-gradient-bg {
        background-size: 600% 600% !important;
      }
    }

    @media (max-width: 480px) {
      .animate-gradient-bg {
        background-size: 800% 800% !important;
      }
    }
  `}
          </style>

          <Header t={t} lang={lang} setLang={setLang} showContact={() => setShowContactForm(true)} />

          <LoadingBar />

          <HeroSection t={t} />

          <MediaSection t={t} />

          <Services t={t} />

          <Customers t={t} />

          <Footer t={t} />

          <BackToTop />

          {showContactForm && <ContactFormModal onClose={() => setShowContactForm(false)} />}
        </div>
      )}
    </AnimatePresence>
  );
};

export default App;