import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Guru from "../../public/guru.png";

const Footer = () => {
  return (
    <div className=" h-80 w-full ">
      <div className="flex flex-col px-6   space-y-4">
        <Link
          href={"https://github.com/santan34/priceguru"}
          className=" flex flex-row  items-center"
        >
          <FaGithub className="text-3xl mr-2 max-md:text-2xl text-gray-500" />{" "}
          Visit project repository
        </Link>
        <Link
          href={"https://github.com/santan34"}
          className=" flex flex-row  items-center"
        >
          <FaGithub className="text-3xl mr-2 max-md:text-2xl text-gray-500" />{" "}
          Visit my Github
        </Link>
        <Link
          href={"https://x.com/uncrowned_zw"}
          className=" flex flex-row  items-center"
        >
          <FaXTwitter className="text-3xl mr-2 max-md:text-2xl text-gray-500" />{" "}
          Visit my Twitter
        </Link>
        <Link
          className=" flex flex-row  items-center"
          href={"https://www.linkedin.com/in/takudzwanashe-ndaveni-9b80b11a8"}
        >
          {" "}
          <FaLinkedinIn className="text-3xl mr-2 max-md:text-2xl text-gray-500" />
          Visit my LinkedIn
        </Link>
        <Image src={Guru} alt="Logo for price guru" width={250} height={200} />
      </div>
    </div>
  );
};

export default Footer;
