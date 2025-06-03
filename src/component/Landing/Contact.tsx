import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Real API call - uncomment when axios and sweetalert2 are installed
      await axios.post("http://localhost:8000/api/contact", formData);

      // Simulate API call for demo
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Real success alert - uncomment when sweetalert2 is installed
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });

      // Demo success alert
      alert("Message sent successfully!");

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      // Real error handling - uncomment when axios and sweetalert2 are installed
      if (axios.isAxiosError(err)) {
        Swal.fire({
          title: "Error!",
          text: err.response?.data?.message || "Something went wrong.",
          icon: "error",
          confirmButtonText: "Close",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "An unexpected error occurred.",
          icon: "error",
          confirmButtonText: "Close",
        });
      }

      // Demo error alert
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact</h2>
        <p className="text-gray-600">
          Kami terbuka untuk kerja sama, pertanyaan, atau sekadar menyapa.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-10">
            {/* Address */}
            <div className="flex items-start group">
              <div className="w-11 h-11 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white flex-shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  Address
                </h3>
                <p className="text-sm text-gray-600">
                  Jl. Pembangunan VI, Tuk, Kec. Kedawung, Kabupaten Cirebon,
                  Jawa Barat 45153
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start group">
              <div className="w-11 h-11 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white flex-shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  Call Us
                </h3>
                <p className="text-sm text-gray-600">+62 821-1110-2272</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start group">
              <div className="w-11 h-11 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white flex-shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  Email Us
                </h3>
                <p className="text-sm text-gray-600">Info@bararec.co.id</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <div className="h-full" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 text-sm text-gray-700 bg-white border rounded-full border-gray-300 focus:border-orange-600 focus:outline-none placeholder-gray-500"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 text-sm text-gray-700 bg-white border rounded-full border-gray-300 focus:border-orange-600 focus:outline-none placeholder-gray-500"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-3 text-sm text-gray-700 bg-white border rounded-full border-gray-300 focus:border-orange-600 focus:outline-none placeholder-gray-500"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-6">
                <textarea
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 text-sm text-gray-700 bg-white border rounded-xl border-gray-300 focus:border-orange-600 focus:outline-none placeholder-gray-500 resize-none"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="text-center">
                {/* Loading Message */}
                {isLoading && (
                  <div className="mb-6 p-4 bg-white text-center">
                    <div className="inline-flex items-center">
                      <div className="w-6 h-6 border-3 border-orange-600 border-t-white rounded-full animate-spin mr-2"></div>
                      Loading
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-orange-600 text-white rounded-full transition-all duration-400 hover:bg-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.3768290363487!2d108.54420837573714!3d-6.723790265742511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee3f332fdb533%3A0xc2132a45dba95904!2sBara%20Reca%20Niroga!5e0!3m2!1sid!2sid!4v1748052871399!5m2!1sid!2sid"
            width="600"
            height="450"
            className="w-full h-64 border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
