import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaFacebook, FaTwitter, FaInstagram, FaArrowUp, FaWhatsapp } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const HeroSection = ({ t }) => (
  <section
    id="home"
    className="relative h-[80vh] bg-cover bg-center"
    style={{
      backgroundImage: "linear-gradient(to bottom, rgba(30, 58, 138, 0.7), rgba(30, 58, 138, 0.3)), url('https://images.unsplash.com/photo-1604938257005-4f3e3b4c1d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
    }}
  >
    <motion.div
      className="container mx-auto h-full flex flex-col items-center justify-center text-center text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-4">{t.heroTitle}</h1>
      <p className="text-xl md:text-2xl max-w-2xl">{t.heroSubtitle}</p>
      <motion.button
        className="mt-6 bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open("https://wa.me/201095438932", "_blank")}
      >
        {t.contact}
      </motion.button>
    </motion.div>
  </section>
);
// Header Component
const Header = ({ t, lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
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
          className="text-2xl font-extrabold text-white"
          whileHover={{ scale: 1.1 }}
        >
          Net Geeks
        </motion.div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <nav className="flex flex-wrap gap-2 text-white font-semibold text-sm md:text-base">
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

          </nav>
          <motion.button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="px-4 py-2 rounded-full bg-white text-blue-900 border border-yellow-400 hover:bg-yellow-400 hover:text-blue-900 text-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {lang === "ar" ? "English" : "العربية"}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

// Footer Component
const Footer = ({ t }) => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
        <div>
          <img
            src="https://via.placeholder.com/150x50?text=Net+Geeks+Logo"
            alt="Net Geeks Logo"
            className="h-12 mb-4"
          />
          <p className="text-gray-300 max-w-xs">{t.footerDescription}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-yellow-400">{t.quickLinks}</h3>
          <ul className="space-y-3">
            <li>
              <button onClick={() => scrollToSection("home")} className="hover:text-yellow-400 transition">
                {t.home}
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("services")} className="hover:text-yellow-400 transition">
                {t.services}
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="hover:text-yellow-400 transition">
                {t.contact}
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-yellow-400">{t.contactUs}</h3>
          <p className="text-gray-300 mb-2">info@netgeeks.com</p>
          <p className="text-gray-300 mb-4">+20 1095438932</p>
          <div className="flex space-x-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.3, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-white hover:text-yellow-400"
            >
              <FaFacebook size={28} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.3, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-white hover:text-yellow-400"
            >
              <FaTwitter size={28} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.3, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-white hover:text-yellow-400"
            >
              <FaInstagram size={28} />
            </motion.a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 text-gray-400">
        © {new Date().getFullYear()} Net Geeks. All rights reserved.
      </div>
    </footer>
  );
};

// Language Toggle Component
const LanguageToggle = ({ lang, setLang }) => (
  <div className="fixed top-4 left-4 z-50">
    <motion.button
      onClick={() => setLang(lang === "ar" ? "en" : "ar")}
      className="bg-white/80 backdrop-blur-md text-sm text-blue-900 border border-yellow-400 px-4 py-2 rounded-full shadow-lg hover:bg-yellow-400 hover:text-blue-900"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {lang === "ar" ? "English" : "العربية"}
    </motion.button>
  </div>
);

// Rating Stars Component
const RatingStars = () => (
  <div className="flex justify-center mt-4">
    {[...Array(5)].map((_, i) => (
      <motion.div key={i} whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
        <FaStar className="text-yellow-400 mx-0.5" />
      </motion.div>
    ))}
  </div>
);
const MediaSection = ({ t }) => {
  const isArabic = t.lang === "ar";

  // إعدادات السلايدر
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
    rtl: isArabic, // دعم RTL للعربية
  };

  // الصور لنسخة الإنجليزية
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
    <section id="products" className="py-24 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto text-center px-4">
        <motion.h2
          className="text-5xl font-bold mb-12 text-blue-900"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t.productShowcase}
        </motion.h2>

        {/* عرض فيديو عند استخدام اللغة العربية */}
        {isArabic ? (
          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl border border-yellow-400">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&rel=0"
                title="فيديو تعريفي"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[500px] md:h-[600px] object-cover"
              ></iframe>
            </div>
          </div>
        ) : (
          // عرض سلايدر الصور عند استخدام اللغة الإنجليزية
          <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl border border-yellow-400">
            <Slider {...settings}>
              {productImages.map((img, i) => (
                <motion.div
                  key={i}
                  className="h-[500px] flex items-center justify-center bg-white"
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
    <section id="services" className="py-24 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-blue-900"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.ourServices}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.servicesList.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl border-t-4 border-yellow-400 hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-blue-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <RatingStars />
              <button
                onClick={() => handleOpen(i)}
                className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-full hover:bg-yellow-400 hover:text-blue-900 transition"
              >
                {t.watchVideo}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      {openVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative w-full max-w-3xl p-4">
            <iframe
              src={videoUrls[activeIndex]}
              title="Service Video"
              className="w-full h-[400px] rounded-xl shadow-2xl border border-yellow-400"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white bg-red-500 px-3 py-1 rounded-full hover:bg-red-600 transition"
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
  <section id="customers" className="py-24 bg-gray-100">
    <div className="container mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold mb-12 text-blue-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {t.customers}
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {t.customersList.map((name, i) => (
          <motion.div
            key={i}
            className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-md hover:shadow-xl transition"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <p className="text-gray-800">{name}</p>
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
      className={`fixed bottom-8 right-8 bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-yellow-400 hover:text-blue-900 ${isVisible ? "block" : "hidden"
        }`}
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaArrowUp size={20} />
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
  const t = translations[lang];

  // Simulate loading
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          className="fixed inset-0 bg-blue-900 flex items-center justify-center z-[9999]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        </motion.div>
      ) : (
        <div
          dir={lang === "ar" ? "rtl" : "ltr"}
          className={`min-h-screen relative animate-gradient-bg ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gradient-to-tl from-gray-100 to-white"
            }`}
          style={{ fontFamily: lang === "ar" ? "'Tajawal', sans-serif" : "'Inter', sans-serif" }}
        >
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

    /* --- RTL Arrows for Slick Slider --- */
    [dir="rtl"] .slick-prev:before {
      content: '\\276E';
      left: auto !important;
      right: 15px !important;
    }

    [dir="rtl"] .slick-next:before {
      content: '\\276F';
    }

    /* --- Responsive Styles --- */
    @media (max-width: 768px) {
      .container {
        padding: 0 1rem !important;
      }

      h1.text-5xl {
        font-size: 1.75rem !important;
      }

      h2.text-5xl {
        font-size: 1.5rem !important;
      }

      p.text-xl {
        font-size: 1rem !important;
      }

      .h-[80vh] {
        height: auto !important;
        min-height: 60vh !important;
      }

      .h-[500px] {
        height: 300px !important;
      }

      .text-4xl {
        font-size: 1.25rem !important;
      }

      .text-2xl {
        font-size: 1.1rem !important;
      }

      .px-8.py-3 {
        padding: 0.75rem 1.5rem !important;
        font-size: 0.9rem !important;
      }

      .grid-cols-3 {
        grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
      }

      .max-w-5xl {
        max-width: 100% !important;
      }

      .hidden.sm\\:flex {
        display: flex !important;
      }

      .w-full.max-w-3xl {
        width: 95% !important;
      }

      .animate-gradient-bg {
        background-size: 600% 600% !important;
      }
    }

    @media (max-width: 480px) {
      .h-[500px] {
        height: 250px !important;
      }

      .text-5xl {
        font-size: 1.2rem !important;
      }

      .text-4xl {
        font-size: 1rem !important;
      }

      .text-2xl {
        font-size: 0.9rem !important;
      }

      .px-4.py-2 {
        padding: 0.5rem 1rem !important;
        font-size: 0.8rem !important;
      }

      .backdrop-blur-md {
        backdrop-filter: blur(8px) !important;
      }

      .animate-gradient-bg {
        background-size: 800% 800% !important;
      }
    }
  `}
          </style>
          <Header t={t} lang={lang} setLang={setLang} />

          <LoadingBar />
          <HeroSection t={t} />
          <MediaSection t={t} />
          <Services t={t} />
          <Customers t={t} />
          <Footer t={t} />
          <BackToTop />
        </div>
      )}
    </AnimatePresence>
  );
};

export default App;