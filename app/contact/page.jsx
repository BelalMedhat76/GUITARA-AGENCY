import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function ContactPage() {
  return (
    <div className=" bg-gradient-to-r from-gray-900 to-gray-800 text-white mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center pt-[60px] mb-12">
        <h1 className="text-4xl font-bold text-red-600" data-aos="fade-up">
          Get in Touch
        </h1>
        <p
          className="text-xl text-gray-600"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We'd love to hear from you! Fill out the form or reach us through
          social media.
        </p>
      </div>

      {/* Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div
          className="p-8 bg-gray-800  shadow-lg rounded-lg"
          data-aos="fade-right"
        >
          <h2 className="text-3xl font-semibold text-white mb-6">
            Contact Form
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-red-600"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-gray-700 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-red-600"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-gray-700 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-red-600"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 bg-gray-700 rounded-md"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-700 text-white py-3 rounded-md hover:bg-red-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div
          className="bg-gray-800  p-8 shadow-lg rounded-lg"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h2 className="text-3xl font-semibold text-red-600 mb-6">
            Contact Info
          </h2>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-2xl text-white mr-4" />
            <p className="text-lg text-red-600"> Contact@GuitaraAgenCy.com</p>
          </div>
          <div className="flex items-center mb-4">
            <FaPhone className="text-2xl text-white mr-4" />
            <p className="text-lg text-red-600"> +2 01282020076</p>
          </div>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-2xl text-white mr-4" />
            <p className="text-lg text-red-600">
              {" "}
              1 Mahmoud Taimour St, Almaza, Heliopolis, Cairo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
