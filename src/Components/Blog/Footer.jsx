const Footer = () => {
  return (
    <div className="relative bg-gray-50">
      {/* Hovering Card */}
      <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-[90vw] max-w-3xl bg-gradient-to-r from-blue-500 to-green-700 text-white p-8 rounded-3xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded w-full sm:w-80 text-black"
            />
            <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800">
              Get started
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 pt-32 px-6 pb-10 bg-white rounded-t-3xl shadow-inner">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-xl font-semibold text-[#502429]">
              <span>{'{ }'}</span> Sheba Software Solutions
            </div>
            <p>Addis Ababa, Ethiopia</p>
            <p className="mt-2">Phone: +251970415771</p>
            <p>Email: shebasoftware@gmail.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-2">Quick links</h3>
            <ul className="space-y-1">
              <li>Pricing</li>
              <li>Resources</li>
              <li>About us</li>
              <li>FAQ</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-2">Social</h3>
            <ul className="space-y-1">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li>Terms of service</li>
              <li>Privacy policy</li>
              <li>Cookie policy</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 text-xs text-gray-500">
          2025 Sheba Software Technologies, All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;

