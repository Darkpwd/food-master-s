import React, { useState } from "react";
import { AnimatedSection } from "../Common/AnimatedSection";
import { Button } from "../Common/Button";
import { Calendar, Clock, Users, Check } from "lucide-react";

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

const timeSlots: TimeSlot[] = [
  { id: "1", time: "17:00", available: true },
  { id: "2", time: "17:30", available: true },
  { id: "3", time: "18:00", available: true },
  { id: "4", time: "18:30", available: false },
  { id: "5", time: "19:00", available: true },
  { id: "6", time: "19:30", available: true },
  { id: "7", time: "20:00", available: false },
  { id: "8", time: "20:30", available: true },
  { id: "9", time: "21:00", available: true },
  { id: "10", time: "21:30", available: true },
];

const partySizes = [1, 2, 3, 4, 5, 6, 7, 8];

export const Reservation: React.FC = () => {
  const [date, setDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [partySize, setPartySize] = useState<number>(2);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [specialRequests, setSpecialRequests] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit this to a server
    console.log({
      date,
      selectedTime,
      partySize,
      name,
      email,
      phone,
      specialRequests,
    });
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setDate("");
    setSelectedTime("");
    setPartySize(2);
    setName("");
    setEmail("");
    setPhone("");
    setSpecialRequests("");
    setIsSubmitted(false);
  };

  // Calculate min date (today)
  const today = new Date();
  const minDate = today.toISOString().split("T")[0];

  return (
    <section className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-[1px] w-10 bg-[#e6c200]"></div>
            <span className="mx-4 text-[#e6c200] font-semibold tracking-wider">
              SECURE YOUR TABLE
            </span>
            <div className="h-[1px] w-10 bg-[#e6c200]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Make a Reservation
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Reserve your culinary journey and experience our innovative menu in
            an atmosphere of refined elegance.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0d2240] rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-5">
              {/* Reservation graphic */}
              <div className="md:col-span-2 bg-[#5e48e8]/20 p-8 relative hidden md:block">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5e48e8]/30 to-transparent" />
                </div>

                <div className="relative h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Your Table Awaits
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Join us for an unforgettable dining experience with
                      innovative cuisine in an elegant atmosphere.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="mr-3 p-2 bg-[#e6c200] bg-opacity-20 rounded-full">
                        <Calendar size={20} className="text-[#e6c200]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Availability</h4>
                        <p className="text-gray-400 text-sm">
                          Reservations open up to 30 days in advance
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-3 p-2 bg-[#e6c200] bg-opacity-20 rounded-full">
                        <Users size={20} className="text-[#e6c200]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">
                          Private Events
                        </h4>
                        <p className="text-gray-400 text-sm">
                          For parties of 9+ please contact us directly
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-3 p-2 bg-[#e6c200] bg-opacity-20 rounded-full">
                        <Clock size={20} className="text-[#e6c200]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">
                          Cancellation Policy
                        </h4>
                        <p className="text-gray-400 text-sm">
                          Free cancellation up to 24 hours before your
                          reservation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reservation form */}
              <div className="md:col-span-3 p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-xl font-semibold text-white mb-6">
                      Reservation Details
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium text-gray-300 mb-1"
                        >
                          Date
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            id="date"
                            min={minDate}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            className="block w-full bg-[#0a192f] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#5e48e8] focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="party-size"
                          className="block text-sm font-medium text-gray-300 mb-1"
                        >
                          Party Size
                        </label>
                        <select
                          id="party-size"
                          value={partySize}
                          onChange={(e) => setPartySize(Number(e.target.value))}
                          required
                          className="block w-full bg-[#0a192f] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#5e48e8] focus:border-transparent"
                        >
                          {partySizes.map((size) => (
                            <option key={size} value={size}>
                              {size} {size === 1 ? "Person" : "People"}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Time
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot.id}
                            type="button"
                            disabled={!slot.available}
                            onClick={() => setSelectedTime(slot.time)}
                            className={`
                              px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#5e48e8] focus:ring-opacity-50
                              ${
                                selectedTime === slot.time
                                  ? "bg-[#5e48e8] text-white"
                                  : slot.available
                                  ? "bg-[#0a192f] text-white hover:bg-[#0a192f]/80"
                                  : "bg-gray-800 text-gray-500 cursor-not-allowed"
                              }
                            `}
                          >
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-gray-800 pt-6">
                      <h3 className="text-xl font-semibold text-white mb-6">
                        Contact Information
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-300 mb-1"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="block w-full bg-[#0a192f] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#5e48e8] focus:border-transparent"
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="block w-full bg-[#0a192f] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#5e48e8] focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-300 mb-1"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          className="block w-full bg-[#0a192f] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#5e48e8] focus:border-transparent"
                        />
                      </div>

                      <div className="mt-4">
                        <label
                          htmlFor="special-requests"
                          className="block text-sm font-medium text-gray-300 mb-1"
                        >
                          Special Requests (Optional)
                        </label>
                        <textarea
                          id="special-requests"
                          rows={3}
                          value={specialRequests}
                          onChange={(e) => setSpecialRequests(e.target.value)}
                          className="block w-full bg-[#0a192f] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#5e48e8] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                      >
                        Complete Reservation
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                      <Check size={36} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Reservation Confirmed!
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Thank you for your reservation. We've sent a confirmation
                      to your email.
                    </p>
                    <div className="bg-[#0a192f] rounded-lg p-6 mb-6 text-left">
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="block text-gray-400">Date</span>
                          <span className="text-white">
                            {new Date(date).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <div>
                          <span className="block text-gray-400">Time</span>
                          <span className="text-white">{selectedTime}</span>
                        </div>
                        <div>
                          <span className="block text-gray-400">
                            Party Size
                          </span>
                          <span className="text-white">
                            {partySize} {partySize === 1 ? "Person" : "People"}
                          </span>
                        </div>
                        <div>
                          <span className="block text-gray-400">Name</span>
                          <span className="text-white">{name}</span>
                        </div>
                      </div>
                    </div>
                    <Button onClick={resetForm} variant="outline" size="md">
                      Make Another Reservation
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
