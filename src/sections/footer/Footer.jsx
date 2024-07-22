import { copyrightSign } from "../../assets/icons";
import { footerLogo } from "../../assets/images";
import { footerLinks, socialMedia } from "../../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col gap-4 items-start">
          <a href="/">
            <img src={footerLogo} alt="logo" className="w-40 h-10" />
          </a>
          <p className="text-white-400 sm:max-w-sm font-montserrat mt-6 text-base leading-7 ">
            Get shoes for every occasion, from the best brands in the market. We
            have the latest trends and styles to keep you looking your best.
          </p>
          <div className=" flex items-center gap-5 mt-8">
            {
              // social icons
              socialMedia.map((social) => (
                <div
                  key={social.alt}
                  className=" flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer"
                >
                  <img
                    src={social.src}
                    alt={social.alt}
                    className=" h-10 w-10"
                  />
                </div>
              ))
            }
          </div>
          <div className=" flex justify-between gap-20 lg:gap-10 mt-7 ">
            {footerLinks.map((section) => (
              <div key={section}>
                <h4 className=" text-white font-palanquin ">{section.title}</h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      key={link.name}
                      className="text-white-400 font-montserrat mt-2 hover:text-slate-gray cursor-pointer"
                    >
                      <a href>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" max-sm:flex-col max-sm:items-center text-white-400 justify-between flex">
        <div className=" justify-start font-montserrat cursor-pointer flex-1 flex items-center gap-5 mt-5">
          <img
            src={copyrightSign}
            alt="copy right"
            width={24}
            height={20}
            className=" rounded-full m-0"
          />
          <p className="text-sm">2021 Shoe Store. All rights reserved</p>
        </div>
        <p className="text-white-400 text-sm mt-5">
          Designed by <span className="text-coral-red">Sahil Anand</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
