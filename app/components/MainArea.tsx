import React from "react";
import { Gilda_Display, Syncopate } from "next/font/google";
import Image from "next/image";
import Computers from "../../public/computers.jpg";
import Picture1 from "../../public/picture1.png";
import Picture2 from "../../public/Screenshot 2024-07-06 000104.png";
import Picture3 from "../../public/image.png";
import Link from "next/link";
const gilda = Gilda_Display({
  weight: "400", // You can specify the weight if needed
  style: "normal", // Style can be normal or italic
  subsets: ["latin"], // Subsets can be latin, latin-ext, etc.
});

const sync = Syncopate({
  weight: "400", // You can specify the weight if needed
  style: "normal", // Style can be normal or italic
  subsets: ["latin"], // Subsets can be latin, latin-ext, etc.
});
const MainArea = () => {
  return (
    <div className="md:py-[100px] ">
      <section className="w-full md:py-5 flex flex-row px-6 max-md:flex-col">
        <div className="md:w-1/2 w-full md:space-y-4 ">
          <h1
            className={`${gilda.className} text-6xl max-md:text-2xl max-md:text-center`}
          >
            For the right prices,
          </h1>
          <div className="flex flex-row md:space-x-4 max-md:flex-col items-center">
            <h1 className={`${gilda.className} text-5xl max-md:text-2xl`}>
              trust the
            </h1>
            <h1
              className={`${gilda.className} text-6xl max-md:text-4xl max-md:mt-2 text-[#e64f4f]`}
            >
              Guru
            </h1>
          </div>
          <div className="md:hidden py-6 text-center">
            Welcome to the ultimate destination for finding the best deals on
            electronics! Easily search and compare prices on laptops, phones,
            printers, and more all in one place. Discover unbeatable prices from
            top retailers with just a few clicks.
          </div>

          <div className="space-y-3 max-md:hidden">
            <p>
              Welcome to the ultimate destination for finding the best deals on
            </p>
            <p>
              {" "}
              electronics! Easily search and compare prices on laptops, phones,
            </p>
            <p>
              printers, and more all in one place . Discover unbeatable prices
            </p>
            <p>from top retailers with just a few clicks.</p>
            <div className="pt-5">
              <Link href={"https://priceguru.vercel.app/"}>
                <button
                  className={`${sync.className} bg-black px-7 py-4 max-md:px-2 max-md:py-1 text-white `}
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full ">
          <Image src={Computers} alt="computers" className="flex-grow" />
        </div>
      </section>
      <section className="w-full  flex flex-row py-[200px] max-md:py-[100px] px-6 max-md:flex-col">
        <div className="md:w-1/2 w-full flex justify-center">
          {" "}
          <h1
            className={`${gilda.className} text-5xl max-md:text-3xl flex text-center`}
          >
            The best way to compare on top electronics.
          </h1>
        </div>
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center max-md:space-y-2 max-md:mt-16">
          {" "}
          <h1 className={`text-center text-3xl max-md:text-2xl`}>
            Made for Zimbabweans,
          </h1>{" "}
          <h1
            className={`text-center  text-3xl max-md:text-2xl text-[#c46767]`}
          >
            by Zimbabweans
          </h1>{" "}
        </div>
      </section>
      <section className="w-full  flex flex-row]  px-6 max-md:flex-col">
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="shadow-lg">
            <Image src={Picture1} alt="computers" className="flex-grow p-5" />
          </div>
        </div>
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center space-y-4 max-md:space-y-2 max-md:py-16">
          {" "}
          <h1 className={` text-3xl max-md:text-2xl`}>
            Search and compare
          </h1>{" "}
          <h1 className={`  text-3xl max-md:text-2xl`}>prices instantly</h1>{" "}
          <p className="text-center max-md:py-3">
            Search for products by name from multiple marketplaces in one go.
          </p>
          <Link href={"https://priceguru.vercel.app/"}>
            <button
              className={`${sync.className} bg-black px-7 py-4 max-md:px-2 max-md:py-1 text-white `}
            >
              Learn More
            </button>
          </Link>
        </div>
      </section>{" "}
      <section className="w-full  flex flex-row pt-[100px] max-md:py-[100px] px-6 max-md:flex-col">
        <div className="md:w-1/2 w-full flex justify-center flex-col space-y-4">
          {" "}
          <h1
            className={`${gilda.className} text-5xl max-md:text-3xl flex text-center`}
          >
            Buy products at their cheapest.
          </h1>
          <p className="text-center max-md:py-3">
            Get informed when the price of a price of
          </p>
          <p className="text-center max-md:py-3">
            {" "}
            a product changes so that you can make purchases at the best time.
          </p>
        </div>{" "}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center max-md:space-y-2 max-md:mt-16 p-8">
          <div className="shadow-lg ">
            <Image src={Picture3} alt="computers" className=" " />
          </div>
        </div>
      </section>
      <section className="w-full  flex flex-row py-[120px] px-6 max-md:flex-col">
        <div className="max-md:hidden md:w-1/2 w-full flex flex-col items-center justify-center space-y-4">
          {" "}
          <h1
            className={`${gilda.className} text-4xl max-md:text-3xl text-center text-[#d65555]`}
          >
            Only pay what you have to.
          </h1>{" "}
          <p>
            Easy price comparisons for products from multiple Zimbabwean
            websites.
          </p>{" "}
          <Link href={"https://priceguru.vercel.app/"}>
            <button
              className={`${sync.className} bg-black px-7 py-4 max-md:px-2 max-md:py-1 text-white `}
            >
              Learn More
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <Image src={Picture2} alt="computers" />
        </div>
        <div className="md:hidden md:w-1/2 w-full flex flex-col items-center justify-center space-y-4 max-md:pt-12">
          {" "}
          <h1
            className={`${gilda.className} text-4xl max-md:text-3xl text-center text-[#d65555]`}
          >
            Only pay what you have to.
          </h1>{" "}
          <p className="text-center">
            Easy price comparisons for products from multiple Zimbabwean
            websites.
          </p>{" "}
          <Link href={"https://priceguru.vercel.app/"}>
            <button
              className={`${sync.className} bg-black px-7 py-4 max-md:px-2 max-md:py-1 text-white `}
            >
              Learn More jongwe
            </button>
          </Link>
        </div>
      </section>
      <section className="w-full  flex flex-row md:py-[150px] py-[70px] bg-[#f8f3f3] max-md:flex-col">
        <div className="md:w-1/2 w-full flex justify-center">
          {" "}
          <h1 className={`${gilda.className} text-5xl  text-[#e75858]`}>
            Price Guru
          </h1>
        </div>

        <div className="md:w-1/2 w-full flex flex-col items-center justify-center">
          <div className="md:hidden text-center pt-8">
            is a portofolio project for my alx software engineering course. The
            main inspiration was to help users like me purchase quality
            electronics for the right price. Why pay more for a product you can
            get cheaper somewhere else? Smart shopping starts todayis a
            portofolio project for my alx software engineering course. The main
            inspiration was to help users like me purchase quality electronics
            for the right price. Why pay more for a product you can get cheaper
            somewhere else? Smart shopping starts today
          </div>
          <div className="max-md:hidden">
            <p className="text-center">
              is a portofolio project for my alx software engineering course.
              The
            </p>
            <p className="text-center">
              main inspiration was to help users like me purchase quality
            </p>
            <p className="text-center">
              electronics for the right price. Why pay more for a product you
              can
            </p>
            <p className="text-center">
              get cheaper somewhere else? Smart shopping starts todayis a
              portofolio
            </p>
            <p className="text-center">
              project for my alx software engineering course. The main
              inspiration
            </p>
            <p className="text-center">
              was to help users like me purchase quality electronics for the
              right
            </p>
            <p className="text-center">
              price. Why pay more for a product you can get cheaper somewhere
              else?
            </p>
            <p className="text-center">Smart shopping starts today</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainArea;
