import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact FounderSeeds
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our agricultural experts. We're here to help you
            find the perfect seed solutions for your farming operation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+91 90991 96962</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">contact@founderseeds.in</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">
                      Plot no. 1726, Near Vastu Shilp & Castech Foundry,
                    </p>
                    <p className="text-gray-600">
                      Road-J, GIDC-2, Sabalpur, Junagadh – 362037, Gujarat
                    </p>
                  </div>
                </div>

                {/* Hours */}
                {/* <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Mon - Fri: 7:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sat: 8:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sun: Closed</p>
                  </div>
                </div> */}
              </div>

              {/* Emergency Contact */}
              {/* <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800 mb-2">
                  24/7 Emergency Support
                </h3>
                <p className="text-red-700 text-sm mb-2">
                  For urgent agricultural support during critical planting or
                  harvest periods:
                </p>
                <p className="font-semibold text-red-800">+91 90991 96962</p>
              </div> */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label
                    htmlFor="inquiryType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="general">General Information</option>
                    <option value="products">Product Information</option>
                    <option value="dealer">Dealer Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">
                      Partnership Opportunities
                    </option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Farm/Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Smith Family Farm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Please describe your inquiry in detail..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">* Required fields</p>
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center"
                  >
                    Send Message
                    <Send className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {[
                  {
                    question: "What's the best time to place seed orders?",
                    answer:
                      "We recommend placing orders 60-90 days before planting to ensure availability and optimal pricing.",
                  },
                  {
                    question: "Do you offer bulk pricing for large orders?",
                    answer:
                      "Yes, we offer volume discounts for orders above certain thresholds. Contact our sales team for custom pricing.",
                  },
                  {
                    question:
                      "What support do you provide for first-time customers?",
                    answer:
                      "We offer comprehensive support including variety selection guidance, planting recommendations, and ongoing technical support.",
                  },
                  {
                    question: "How can I become an authorized dealer?",
                    answer:
                      "Contact our partnership team to learn about dealer opportunities in your area and application requirements.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <MessageCircle className="h-4 w-4 mr-2 text-green-600" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 ml-6">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
