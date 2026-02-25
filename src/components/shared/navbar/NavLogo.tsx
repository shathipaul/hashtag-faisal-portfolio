import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo/logo.png";

const NavLogo = () => {
  return (
    <Link
      href="/"
      className="w-14 lg:w-16 decoration-0"
      aria-label="Go to homepage"
    >
      <Image
        src={logo}
        alt="Faisal Ahmed Logo - A stylized 'F' in a triangle, representing Faisal Ahmed's personal brand."
        priority
        // placeholder="blur"
        sizes="(max-width: 1280px) 192px, 240px"
      />
    </Link>
  );
};

export default NavLogo;
