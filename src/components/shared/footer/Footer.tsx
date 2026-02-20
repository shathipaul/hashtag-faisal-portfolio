import Link from "next/link";
import {
  FaSquareUpwork,
  FaLinkedinIn,
  FaFacebookF,
  FaSquareInstagram,
} from "react-icons/fa6";

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
      link: "https://www.facebook.com/HashtagFaisal",
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
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row gap-4 justify-between items-center">
            <span className="text-xs md:text-sm opacity-80">
              © 2026 HashtagFaisal. All rights reserved.
            </span>
            <div className="flex items-center flex-wrap md:justify-end gap-2 lg:gap-4">
              {socialLinks.map((data, index) => (
                <a
                  key={index}
                  rel="noopener noreferrer"
                  target="_blank"
                  href={data.link}
                  className={`text-muted text-xl ${data.color} duration-700`}
                >
                  {/* {data.name} */}
                  {data.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
