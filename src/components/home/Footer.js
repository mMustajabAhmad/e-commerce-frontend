import { GrFacebookOption } from "react-icons/gr";
import { GoDash } from "react-icons/go";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

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
            <GrFacebookOption 
            className="text-white"
            size={"1.5em"}
            />
            <GoDash 
            className="text-gray-400"
            size={"1.5em"}
            />
            <FaInstagram 
            className="text-white"
            size={"1.5em"}
            />
            <GoDash 
            className="text-gray-400"
            size={"1.5em"}
            />
            <FaPinterestP
            className="text-white"
            size={"1.5em"}
            />
            <GoDash 
            className="text-gray-400"
            size={"1.5em"}
            />
            <FaTwitter
            className="text-white"
            size={"1.5em"}
            />
            <GoDash 
            className="text-gray-400"
            size={"1.5em"}
            />
            <FaLinkedin
            className="text-white"
            size={"1.5em"}
            />
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
