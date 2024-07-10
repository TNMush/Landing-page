import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Guru from "../../public/guru.png";

const Footer = () => {
  return (
    <div className=" h-fit py-10 w-full ">
      <div className="flex max-md:flex-col md:space-x-8 px-6   max-md:space-y-4 justify-center">
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
      </div>
      <div className="flex flex-row md:justify-center pt-4">
        {" "}
        <Image src={Guru} alt="Logo for price guru" width={250} height={200} />
      </div>
    </div>
  );
};

export default Footer;
