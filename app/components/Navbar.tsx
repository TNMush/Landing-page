import React from "react";
import Guru from "../../public/guru.png";
import Image from "next/image";
import { Syncopate } from "next/font/google";
import Link from "next/link";
const sync = Syncopate({
  weight: "400", // You can specify the weight if needed
  style: "normal", // Style can be normal or italic
  subsets: ["latin"], // Subsets can be latin, latin-ext, etc.
});
const Navbar = () => {
  return (
    <div className=" w-full h-fit py-3 max-md:my-5 md:my-3  flex justify-between pr-4 max-md:border-b-[1px] max-md:border-solid border-[#e4b9b9]">
      <div className="max-md:hidden">
        <Link href="https://priceguru.vercel.app">
          <Image
            src={Guru}
            alt="Logo for price guru"
            width={250}
            height={200}
          />
        </Link>
      </div>
      <div className="md:hidden">
        <Image src={Guru} alt="Logo for price guru" width={150} height={100} />
      </div>
      <Link href="https://priceguru.vercel.app">
        {" "}
        <button
          className={`${sync.className} bg-black px-7 max-md:px-2 max-md:py-2 text-white `}
        >
          Find us.
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
