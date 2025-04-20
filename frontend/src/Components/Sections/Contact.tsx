import { restaurantInfo } from "../../../Data/restaurantData";
import { AnimatedSection } from "../Common/AnimatedSection";
import { Button } from "../Common/Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact: React.FC = () => {
  const { address, phone, email, hours } = restaurantInfo;

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-t from-[#0a192f] to-[#0d2240]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-[1px] w-10 bg-[#e6c200]"></div>
            <span className="mx-4 text-[#e6c200] font-semibold tracking-wider">
              GET IN TOUCH
            </span>
            <div className="h-[1px] w-10 bg-[#e6c200]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Contact Information
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Visit us to experience our innovative cuisine or reach out for
            inquiries and private events.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Contact details with map */}
          <AnimatedSection className="bg-[#0a192f] rounded-2xl overflow-hidden shadow-xl">
            <div className="h-64 bg-gray-700 relative">
              {/* This would be a real map in production */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#0a192f]/50">
                <p className="text-gray-400 text-center px-4">
                  Interactive map would be displayed here
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a192f] to-transparent"></div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                Our Location
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin
                    size={20}
                    className="text-[#e6c200] mt-1 mr-3 flex-shrink-0"
                  />
                  <div>
                    <span className="block text-white">{address}</span>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      Get Directions
                    </a>
                  </div>
                </li>

                <li className="flex items-center">
                  <Phone
                    size={20}
                    className="text-[#e6c200] mr-3 flex-shrink-0"
                  />
                  <a
                    href={`tel:${phone}`}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    {phone}
                  </a>
                </li>

                <li className="flex items-center">
                  <Mail
                    size={20}
                    className="text-[#e6c200] mr-3 flex-shrink-0"
                  />
                  <a
                    href={`mailto:${email}`}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    {email}
                  </a>
                </li>

                <li className="flex items-start pt-2">
                  <Clock
                    size={20}
                    className="text-[#e6c200] mt-1 mr-3 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-white font-medium mb-2">
                      Hours of Operation
                    </h4>
                    <ul className="space-y-1">
                      {Object.entries(hours).map(([day, time]) => (
                        <li key={day} className="grid grid-cols-2 text-sm">
                          <span className="text-gray-400">{day}</span>
                          <span className="text-white">{time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection delay={200}>
            <div className="bg-[#0a192f] rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-6">
                Send Us a Message
              </h3>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="block w-full bg-[#0d2240] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#5e48e8] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="block w-full bg-[#0d2240] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#5e48e8] focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="block w-full bg-[#0d2240] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#5e48e8] focus:border-transparent"
                    placeholder="Subject of your message"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="block w-full bg-[#0d2240] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#5e48e8] focus:border-transparent"
                    placeholder="Your message"
                  />
                </div>

                <div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
