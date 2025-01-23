import {
  FaSquareXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://x.com/ashish_simon" target="_blank">
                <FaSquareXTwitter className="text-2xl cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/ashishps96/" target="_blank">
                <FaLinkedinIn className="text-2xl cursor-pointer" />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2025 Ashish P S. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
