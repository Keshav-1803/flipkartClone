import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-10 text-sm">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* ABOUT Section */}
        <div>
          <h3 className="mb-4 text-neutral-400">ABOUT</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Flipkart Stories</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Press</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Corporate Information</a></li>
          </ul>
        </div>

        {/* GROUP COMPANIES Section */}
        <div>
          <h3 className="text-neutral-400 mb-4">GROUP COMPANIES</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Myntra</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Cleartrip</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Shopsy</a></li>
          </ul>
        </div>

        {/* HELP Section */}
        <div>
          <h3 className="text-neutral-400 mb-4">HELP</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Payments</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Shipping</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Cancellation & Returns</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">FAQ</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Report Infringement</a></li>
          </ul>
        </div>

        {/* CONSUMER POLICY Section */}
        <div>
          <h3 className="text-neutral-400 mb-4">CONSUMER POLICY</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Cancellation & Returns</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Terms Of Use</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Security</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Privacy</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Sitemap</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Grievance Redressal</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">EPR Compliance</a></li>
          </ul>
        </div>

        {/* Mail Us and Registered Office */}
        <div>
          <h3 className="text-neutral-400 mb-4">Mail Us:</h3>
          <p className="text-sm mb-4">
            Flipkart Internet Private Limited,<br />
            Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
            Outer Ring Road, Devarabeesanahalli Village,<br />
            Bengaluru, 560103,<br />
            Karnataka, India
          </p>
        </div>

        <div>
            <h3 className="text-neutral-400 mb-4">Registered Office Address:</h3>
          <p className="text-sm">
            Flipkart Internet Private Limited,<br />
            CIN: U51109KA2012PTC066107<br />
            Telephone: <span className='text-blue-600'>044-45614700 / 044-67415800</span>
          </p>
          </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-evenly items-center">
  
  <div className="flex space-x-4">
    <a href="#" className="hover:underline">Become a Seller</a>
    <a href="#" className="hover:underline">Advertise</a>
    <a href="#" className="hover:underline">Gift Cards</a>
    <a href="#" className="hover:underline">Help Center</a>
  </div>


  <div className="flex items-center space-x-6 mt-4 md:mt-0">
    <p>© 2007-2024 Flipkart.com</p>
    {/* <div className="flex space-x-2">
      <img src="src/assets/visa.svg" alt="Visa" className="w-16 h-8" />
    </div> */}
  </div>
</div>

    </footer>
  );
};


export default Footer;
