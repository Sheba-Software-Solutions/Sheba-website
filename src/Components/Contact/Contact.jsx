import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    e.target.reset()
  }

  return (
    <div id="contact" className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact us
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="contact-card bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-50 text-blue-600">
              <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Email us</h3>
              <p className="mt-2 text-base text-gray-500">
                Our support team will get back to you within 24 hours.
              </p>
              <p className="mt-4 text-blue-600 font-medium">
                hello@sheba.app
              </p>
            </div>
          </div>

          <div className="contact-card bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-50 text-blue-600">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-xl" />
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Call us</h3>
              <p className="mt-2 text-base text-gray-500">
                Monday to Friday from 9am to 5pm EAT.
              </p>
              <p className="mt-4 text-blue-600 font-medium">
                +251 911 123 456
              </p>
            </div>
          </div>

          <div className="contact-card bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-50 text-blue-600">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Visit us</h3>
              <p className="mt-2 text-base text-gray-500">
                Come say hello at our office headquarters.
              </p>
              <p className="mt-4 text-blue-600 font-medium">
                Bole Road<br />Addis Ababa, Ethiopia
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg shadow-sm overflow-hidden relative z-10">
          <div className="md:flex">
            <div className="md:flex-1 p-8">
              <h3 className="text-2xl font-semibold text-gray-900">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit} className="mt-6 space-y-6" autoComplete="on">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 relative z-10"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="Your email address"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 relative z-10"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Your message"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-vertical relative z-10"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition relative z-10"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
            <div className="md:flex-1">
              <div className="h-full w-full bg-gray-200">
                <iframe
                  className="h-full w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252646.25221138036!2d38.613328149999996!3d9.0247037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cd09b6503f%3A0x4a53e0a211c67e62!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1697840000000!5m2!1sen!2sus"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact