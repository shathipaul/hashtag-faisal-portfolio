import {
  FaSquareUpwork,
  FaLinkedinIn,
  FaFacebookF,
  FaSquareInstagram,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      name: "Linkedin",
      link: "https://www.linkedin.com/company/hashtagfaisal",
      color: "hover:text-[#0077B5]",
    },
    {
      icon: <FaSquareUpwork />,
      name: "UpWork",
      link: "https://www.upwork.com/freelancers/~017397daf489c055c7",
      color: "hover:text-[#14A800]",
    },
    {
      icon: <FaFacebookF />,
      name: "Facebook",
      link: "https://www.facebook.com/HashtaggFaisal",
      color: "hover:text-[#1877F2]",
    },
    {
      icon: <FaSquareInstagram />,
      name: "Instagram",
      link: "https://www.instagram.com/hashtagfaisaldotcom/",
      color: "hover:text-[#FCAF45]",
    },
  ];
  return (
    <footer>
      <div className="py-6 bg-mutedGreen">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col-reverse items-center justify-between gap-4 lg:flex-row">
            <span className="text-xs md:text-sm opacity-80">
              © 2026 HashtagFaisal. All rights reserved.
            </span>
            <div className="flex flex-wrap items-center gap-3 md:justify-end lg:gap-4">
              {socialLinks.map((data, index) => (
                <a
                  key={index}
                  rel="noopener noreferrer"
                  target="_blank"
                  href={data.link}
                  className={`text-muted text-xl ${data.color} transition duration-700`}
                >
                  {/* {data.name} */}
                  {data.icon}
                </a>
              ))}
              <a
                href="mailto:info@hashtagfaisal.com"
                className="text-xl transition duration-700 text-muted hover:text-purple"
              >
                <MdEmail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
