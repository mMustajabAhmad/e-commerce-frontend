function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="bg-gray-200 flex flex-row h-[380px]">
          <div
            className="flex flex-col justify-center ml-[8%]"
          >
            <span className="font-bold text-5xl">Flone.</span>
            <span>© 2024 Flone.</span>
            <span>All Rights Reserved</span>
          </div>

          <div
            className="flex flex-col justify-center ml-[5%]"
          >
            <span className="font-bold text-2xl">ABOUT US</span>
            <a href="#" className="mt-2 hover:text-purple-700">
              About us
            </a>
            <a href="#" className="mt-2 hover:text-purple-700">
              Store Location
            </a>
            <a href="#" className="mt-2 hover:text-purple-700">
              Contact
            </a>
            <a href="#" className="mt-2 hover:text-purple-700">
              Orders Tracking
            </a>
          </div>

          <div
            className="flex flex-col justify-center ml-[5%]"
          >
            <span className="font-bold text-2xl">USEFUL LINKS</span>
            <a href="#" className="mt-2 hover:text-purple-700">
              Returns
            </a>
            <a href="#" className="mt-2 hover:text-purple-700">
              Support Policy
            </a>
            <a href="#" className="mt-2 hover:text-purple-700">
              Size Guide
            </a>
            <a href="#" className="mt-2 hover:text-purple-700">
              FAQs
            </a>
          </div>

          <div
            className="flex flex-col justify-center ml-[5%]"
          >
            <span className="font-bold text-2xl">FOLLOW US</span>
            <a href="#" className="mt-2 hover:text-purple-700">
              Facebook
            </a>
            <a href="#" className="mt-2 hover:text-purple-700">
              Instagram
            </a>
            <a href="#" className="mt-2 hover:text-purple-700">
              Twitter
            </a>
            <a href="#" className="mt-2 hover:text-purple-700">
              Youtube
            </a>
          </div>

          <div
            className="flex flex-col justify-center ml-[6%]"
          >
            <span className="font-bold text-2xl">SUBSCRIBE</span>
            <span className="mt-2">
              Get E-mail updates about our latest shop
            </span>
            <span className="mt-1"> and special offers.</span>
            <input
              className="mt-2 py-2 rounded-md"
              type="email"
              placeholder="   Enter Your Email Address..."
            ></input>
            <a href="#" className="underline mt-2 hover:text-purple-700">
              Subscribe
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
