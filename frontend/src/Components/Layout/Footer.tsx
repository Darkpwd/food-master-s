import React from "react";
import { restaurantInfo } from "../../../Data/restaurantData";
import {
  ChefHat,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export const Footer: React.FC = () => {
  const { name, address, phone, email, hours, socialMedia } = restaurantInfo;

  return (
    <footer className="bg-[#0a192f] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ChefHat size={24} className="text-[#e6c200]" />
              <h3 className="font-bold text-xl tracking-wider">{name}</h3>
            </div>
            <p className="text-gray-400 max-w-xs">
              Experience culinary innovation in a space where futuristic
              techniques meet timeless flavors.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialMedia.instagram && (
                <a
                  href={socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#e6c200] transition-colors"
                >
                  <Instagram size={20} />
                </a>
              )}
              {socialMedia.facebook && (
                <a
                  href={socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#e6c200] transition-colors"
                >
                  <Facebook size={20} />
                </a>
              )}
              {socialMedia.twitter && (
                <a
                  href={socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#e6c200] transition-colors"
                >
                  <Twitter size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-[#e6c200] mt-0.5" />
                <span className="text-gray-300">{address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-[#e6c200]" />
                <a
                  href={`tel:${phone}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-[#e6c200]" />
                <a
                  href={`mailto:${email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {email}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Opening Hours</h4>
            <ul className="space-y-2">
              {Object.entries(hours).map(([day, time]) => (
                <li key={day} className="flex items-start space-x-2">
                  <Clock size={18} className="text-[#e6c200] mt-0.5" />
                  <div>
                    <span className="text-gray-300">{day}: </span>
                    <span className="text-gray-400">{time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-3">
              Subscribe to receive updates on seasonal menus and events.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#5e48e8]"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#5e48e8] to-[#3b82f6] text-white py-2 rounded-md hover:from-[#4e3bc8] hover:to-[#2a6be0] transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
