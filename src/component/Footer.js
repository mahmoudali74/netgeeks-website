import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p>Welcome to Your Shop, your number one source for all things fashion. We're dedicated to providing you the best of clothing, with a focus on dependability, customer service, and uniqueness.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-8 h-8" />
                </a>

                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-8 h-8" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-8 h-8" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>1234 Street Name, City, State, 12345</p>
              <p>Email: info@yourshop.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p>&copy; 2024 Your Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
