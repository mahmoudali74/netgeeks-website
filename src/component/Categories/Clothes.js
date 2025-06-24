
import React, { useState } from 'react';
import Slider from "react-slick";
import Navbar from '../Navbar';
import Footer from '../Footer';

const RelatedProducts = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const items = [
    {
      imgSrc: "https://th.bing.com/th/id/OIP.tHVNhl9YafqobH53uVjLPwHaHa?rs=1&pid=ImgDetMain",
      altText: "Sports Clothes Image 1",
      title: "adidas Tracksuit Infant Girls",
      price: "$29.99",
      rating: 5,
      reviews: 38,
      category: "Summer Sale"
    },
    {
      imgSrc: "https://th.bing.com/th/id/OIP.oUo8N3b6-RjhVBQIyxcQqgHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7",
      altText: "Sports Clothes Image 2",
      title: "Nike Women's Running Jacket",
      price: "$49.99",
      rating: 4.5,
      reviews: 28,
      category: "Recommended"
    },
    {
      imgSrc: "https://th.bing.com/th/id/R.2e95fe902e2d197a46d427172e89375c?rik=RnPftR2vmiXyqg&pid=ImgRaw&r=0",
      altText: "Sports Clothes Image 3",
      title: "Under Armour Men's Golf Polo",
      price: "$39.99",
      rating: 4,
      reviews: 22,
      category: "Best Seller"
    },
    {
      imgSrc: "https://th.bing.com/th/id/R.78d633fd299363dd1d477724337dfd00?rik=U%2fLvDdigWbPhuQ&pid=ImgRaw&r=0",
      altText: "Sports Clothes Image 4",
      title: "Puma Men's Soccer Jersey",
      price: "$24.99",
      rating: 4.5,
      reviews: 35,
      category: "Summer Sale"
    },
    {
      imgSrc: "https://th.bing.com/th/id/OIP._xPcOzON8VvjWoQyu6-78QHaHa?w=212&h=213&c=7&r=0&o=5&pid=1.7",
      altText: "Sports Clothes Image 5",
      title: "Adidas Women's Training Shorts",
      price: "$19.99",
      rating: 4,
      reviews: 18,
      category: "Recommended"
    },
    {
      imgSrc: "https://th.bing.com/th/id/R.74f1076eefd5b7845d39ad4e6b3698dc?rik=Zj8O65tpVZul%2bQ&pid=ImgRaw&r=0",
      altText: "Sports Clothes Image 6",
      title: "adidas t-shirts men",
      price: "$99.99",
      rating: 4.5,
      reviews: 42,
      category: "Best Seller"
    },
    {
      imgSrc: "https://th.bing.com/th/id/OIP.IEl-oFUJZ4s9wXEX56w9_AAAAA?rs=1&pid=ImgDetMainhttps://th.bing.com/th/id/OIP.IEl-oFUJZ4s9wXEX56w9_AAAAA?rs=1&pid=ImgDetMain",
      altText: "Sports Clothes Image 7",
      title: "Reebok Women's Yoga Leggings",
      price: "$34.99",
      rating: 4,
      reviews: 25,
      category: "Recommended"
    },
    {
      imgSrc: "https://th.bing.com/th/id/OIP.9tEarfzlRPakoju3zpZjYQHaHa?w=215&h=215&c=7&r=0&o=5&pid=1.7",
      altText: "Sports Clothes Image 8",
      title: "Puma Men's Training Tank Top",
      price: "$14.99",
      rating: 4,
      reviews: 32,
      category: "Best Seller"
    },

    {
      imgSrc: "https://th.bing.com/th/id/OIP._sjZj0fsiWEJTbLsUjZBCgHaHa?pid=ImgDet&w=178&h=178&c=7",
      altText: "Nike Men's Training Shorts",
      title: "Nike Men's Training Shorts",
      price: "$29.99",
      rating: 4,
      reviews: 28,
      category: "Summer Sale"
    }
  ];
  const handleQuantityChange = (quantity) => {
    setSelectedQuantity(quantity);
  };

  const handleBuyClick = () => {
    setShowPaymentForm(true);
    setShowPopup(false);
  };


  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSelectedSize(null); // Reset size selection
    setSelectedColor(null); // Reset color selection
    setShowPopup(true);
  };
  const handlePaymentFormClose = () => {
    setShowPaymentForm(false);
  };

  const handlePaymentConfirm = () => {
    alert('Payment Confirmed!');
    setShowPaymentForm(false);
  };
  const calculatePrice = (product, quantity) => {
    const productPrice = parseFloat(product.price.replace('$', ''));
    return `$${(productPrice * quantity).toFixed(2)}`;
  };

  const updatedPrice = selectedProduct ? calculatePrice(selectedProduct, selectedQuantity) : '';

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.184c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.785.57-1.84-.197-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118l-3.39-2.46c-.783-.57-.38-1.81.588-1.81h4.184a1 1 0 00.95-.69l1.287-3.974z" />
        </svg>
      );
    }
    return stars;
  };

  const renderCategorySlider = (category) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="mb-9">
        <div className={`bg-gradient-to-r ${category === 'Summer Sale' ? 'from-green-400 via-blue-500 to-purple-600' : category === 'Recommended' ? 'from-yellow-400 via-red-500 to-pink-600' : 'from-indigo-400 via-purple-500 to-pink-600'} text-white p-2 rounded-lg shadow-md mb-4`}>
          <h2 className="font-manrope font-bold text-lg sm:text-xl text-white mb-2 text-center">{category}</h2>
        </div>
        <Slider {...settings}>
          {items.filter(item => item.category === category).map((item, index) => (
            <div key={index} className="px-1">
              <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition-all hover:scale-105 hover:shadow-lg">
                <img
                  className="mb-4 mx-auto w-60 h-60 object-cover"
                  src={item.imgSrc}
                  alt={item.altText}
                  onClick={() => handleProductClick(item)}
                />
                <div className="p-2">
                  <h6 className="block mt-1 text-xs sm:text-sm leading-tight font-medium text-black text-center">{item.title}</h6>
                  <div className="flex justify-center mt-1">
                    {renderStars(item.rating)}
                  </div>
                  <p className="text-xs text-gray-500 text-center">{item.reviews} reviews</p>
                  <p className="mt-1 text-gray-900 text-center font-semibold">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        {renderCategorySlider('Summer Sale')}
        {renderCategorySlider('Recommended')}
        {renderCategorySlider('Best Seller')}
      </div>
      {showPopup && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="max-w-lg bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
            <img
              className="w-48 h-48 object-cover rounded-lg mb-4"
              src={selectedProduct.imgSrc}
              alt={selectedProduct.altText}
            />
            <h3 className="text-lg font-semibold mb-2">{selectedProduct.title}</h3>
            <p className="text-gray-700 mb-4">{selectedProduct.price}</p>
            <div className="flex items-center mb-4">
              <label className="mr-2">Size:</label>
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className={`border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500 mr-2 ${selectedSize === size ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="flex items-center mb-4">
              <label className="mr-2">Color:</label>
              {['Red', 'Blue', 'Green', 'Black'].map((color) => (
                <button
                  key={color}
                  className={`border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500 mr-2 ${selectedColor === color ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
            <div className="flex items-center mb-4">
              <label className="mr-2">Quantity:</label>
              {[1, 2, 3, 4, 5].map((quantity) => (
                <button
                  key={quantity}
                  className={`border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500 mr-2 ${selectedQuantity === quantity ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                  onClick={() => handleQuantityChange(quantity)}
                >
                  {quantity}
                </button>
              ))}
            </div>
            <p className="mb-4 text-gray-700">Total Price: {updatedPrice}</p>
            <div className="flex">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={handleBuyClick}
            >
              Buy Now
            </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )} {showPaymentForm && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
            <p className="mb-4">Product: {selectedProduct.title}</p>
            <p className="mb-4">Quantity: {selectedQuantity}</p>
            <p className="mb-4">Total Price: {selectedProduct.price * selectedQuantity}</p>
            <form onSubmit={handlePaymentConfirm}>
              <div className="mb-4">
                <label className="block text-gray-700">Card Number</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Expiry Date</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">CVV</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Confirm Payment
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                  onClick={handlePaymentFormClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default RelatedProducts;
