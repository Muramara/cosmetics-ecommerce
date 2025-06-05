import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-medium text-gray-900 mb-8 text-center">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-pink-500 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">0720485281 / 0113402485</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri: 9am - 6pm EAT</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-pink-500 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                    <a 
                      href="mailto:contact@lumiere.com" 
                      className="text-gray-600 hover:text-pink-500 transition-colors"
                    >
                      contact@lexyfragrance.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Sonalux House<br />
                      Moi Avenue<br />
                      Ground floor, shop opposite Family Bank
                    </p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="font-medium text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.instagram.com/lexyfragrance?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-50 text-gray-600 hover:text-pink-500 rounded-full transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.tiktok.com/@lexyfragrance" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-50 text-gray-600 hover:text-pink-500 rounded-full transition-colors"
                    >
                      <FaTiktok className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">Visit Our Store</h2>
              <div className="aspect-square w-full rounded-lg overflow-hidden">
                <iframe
                  title="Store Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.816222906543!2d36.82175027436101!3d-1.2841777356225401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11da66de3ca3%3A0x43032695c6db515e!2sLexy%20Fragrance%20Ltd!5e0!3m2!1sen!2ske!4v1748850488099!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <div className="mt-6">
                <h3 className="font-medium text-gray-900 mb-2">Store Hours</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-600">Monday - Friday</p>
                    <p className="font-medium">10:00 AM - 7:00 PM</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Saturday</p>
                    <p className="font-medium">11:00 AM - 6:00 PM</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-600">Sunday</p>
                    <p className="font-medium">12:00 PM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;