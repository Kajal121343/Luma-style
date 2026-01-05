import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      
     
      <div className="max-w-5xl mx-auto px-6 py-12 text-center text-gray-300">
        <p className="mb-4">
          LumaStyle is your ultimate destination for premium fashion, lifestyle, and accessories. 
          We focus on quality, style, and comfort, bringing you carefully curated products for every occasion. 
          Our mission is to empower every customer to express their unique style with confidence. 
          Shop with us for exclusive collections, seasonal offers, and fast, reliable delivery.
        </p>
        <p>
          📞 +0123 456 789 &nbsp; | &nbsp; 
          ✉️ support@lumastyle.com
        </p>
      </div>

      
      <div className="border-t border-gray-700 py-4 flex justify-center gap-6 text-xl">
        <FaFacebookF className="cursor-pointer hover:text-orange-500" />
        <FaInstagram className="cursor-pointer hover:text-orange-500" />
        <FaTwitter className="cursor-pointer hover:text-orange-500" />
      </div>

      
      <div className="text-center text-sm text-gray-500 py-2">
        © {new Date().getFullYear()} LumaStyle. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
