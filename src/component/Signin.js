import React, { useState } from 'react';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can send this data to your backend for authentication
    // Add your code to send the form data to your backend for authentication (e.g., using Axios)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-purple-600 to-blue-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <a href="/" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 block text-center w-full">
            Sign In
          </a>

        </form>
        <div className="mt-4 text-center text-sm">
          <span className="text-gray-600">Don't have an account?</span>
          <a href="/s" className="text-blue-500 ml-1 hover:underline">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Signin;
