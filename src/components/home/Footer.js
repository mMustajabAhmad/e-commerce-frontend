function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="bg-black h-[380px]">
          <span className="text-white font-bold text-5xl flex justify-center pt-20">
            Flone.
          </span>
          <p className="text-white flex justify-center pt-7">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt
            </span>
          </p>
          <p className="text-white flex justify-center pt-3">
            <span>ut labore et dolore magna aliqua. Ut enim ad minim</span>
          </p>
          <div className="flex justify-center mt-6">
            <i
              className="fab fa-facebook-f text-white text-[24px]"
            ></i>
            <i
              class="fas fa-minus pl-2 text-gray-400 text-[24px]"
            ></i>
            <i
              className="fab fa-instagram pl-2 text-white text-[24px]"
            ></i>
            <i
              class="fas fa-minus pl-2 text-gray-400 text-[24px]"
            ></i>
            <i
              className="fab fa-pinterest-p pl-2 text-white text-[24px]"
            ></i>
            <i
              class="fas fa-minus pl-2 text-gray-400 text-[24px]"
            ></i>
            <i
              className="fab fa-twitter pl-2 text-white text-[24px]"
            ></i>
            <i
              class="fas fa-minus pl-2 text-gray-400 text-[24px]"
            ></i>
            <i
              className="fab fa-linkedin pl-2 text-white text-[24px]"
            ></i>
          </div>
          <hr className="w-[80%] ml-[10%] mt-[5%]"/>
          <p className="text-white flex justify-center mt-2 mb-2">
            © 2024 Flone. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
