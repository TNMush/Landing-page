import React from "react";
import { Gilda_Display, Syncopate } from "next/font/google";
import Image from "next/image";
import Computers from "../../public/computers.jpg";
import Picture1 from "../../public/picture1.png";
import Picture2 from "../../public/Screenshot 2024-07-06 000104.png";
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
    <div className="py-[100px] ">
      <section className="w-full py-5 flex flex-row px-6 max-md:flex-col">
        <div className="md:w-1/2 w-full">
          <h1 className={`${gilda.className} text-6xl max-md:text-2xl`}>
            For the right prices,
          </h1>
          <h1 className={`${gilda.className} text-5xl max-md:text-2xl`}>
            trust the
          </h1>
          <h1
            className={`${gilda.className} text-6xl max-md:text-2xl text-[#e64f4f]`}
          >
            Guru
          </h1>
          <div className="space-y-3">
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
            <button
              className={`${sync.className} bg-black px-7 py-4 max-md:px-2 max-md:py-1 text-white mt-4`}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full ">
          <Image src={Computers} alt="computers" className="flex-grow" />
        </div>
      </section>
      <section className="w-full  flex flex-row py-[200px] px-6 max-md:flex-col">
        <div className="md:w-1/2 w-full flex justify-center">
          {" "}
          <h1
            className={`${gilda.className} text-5xl max-md:text-3xl flex text-center`}
          >
            The best way to compare on top electronics.
          </h1>
        </div>
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center">
          {" "}
          <h1 className={`${sync.className} text-3xl max-md:text-3xl`}>
            Made for Zimbabweans,
          </h1>{" "}
          <h1 className={`${sync.className}  text-3xl max-md:text-3xl`}>
            by Zimbabweans
          </h1>{" "}
        </div>
      </section>
      <section className="w-full  flex flex-row py-[120px] px-6 max-md:flex-col">
        <div className="md:w-1/2 w-full flex justify-center">
          <Image src={Picture1} alt="computers" className="flex-grow p5" />
        </div>
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center space-y-4">
          {" "}
          <h1 className={`${sync.className} text-3xl max-md:text-3xl`}>
            Search and compare
          </h1>{" "}
          <h1 className={`${sync.className}  text-3xl max-md:text-3xl`}>
            prices instantly
          </h1>{" "}
          <p>
            Search for products by name from multiple marketplaces in one go.
          </p>
          <button
            className={`${sync.className} bg-black px-7 py-4 max-md:px-2 max-md:py-1 text-white mt-4`}
          >
            Learn More
          </button>
        </div>
      </section>{" "}
      <section className="w-full  flex flex-row py-[120px] px-6 max-md:flex-col">
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center space-y-4">
          {" "}
          <h1 className={` text-3xl max-md:text-3xl`}>
            Only pay what you have to.
          </h1>{" "}
          <p>
            Easy price comparisons for products from multiple Zimbabwean
            websites.
          </p>{" "}
          <button
            className={`${sync.className} bg-black px-7 py-4 max-md:px-2 max-md:py-1 text-white mt-4`}
          >
            Learn More
          </button>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <Image src={Picture2} alt="computers" className="flex-grow p5" />
          <Image
            src={Picture2}
            alt="computers"
            className="flex-grow p5 max-md:hidden"
          />
        </div>
      </section>
      <section className="w-full  flex flex-row py-[150px] bg-slate-300 max-md:flex-col">
        <div className="md:w-1/2 w-full flex justify-center">
          {" "}
          <h1 className={`${gilda.className} text-5xl max-md:text-3xl`}>
            Price Guru
          </h1>
        </div>
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center">
          <p>
            is a portofolio project for my alx software engineering course. The
          </p>
          <p>main inspiration was to help users like me purchase quality</p>
          <p>
            electronics for the right price. Why pay more for a product you can
          </p>
          <p>
            get cheaper somewhere else? Smart shopping starts todayis a
            portofolio
          </p>
          <p>
            project for my alx software engineering course. The main inspiration
          </p>
          <p>
            was to help users like me purchase quality electronics for the right
          </p>
          <p>
            price. Why pay more for a product you can get cheaper somewhere
            else?
          </p>
          <p>Smart shopping starts today</p>
        </div>
      </section>
    </div>
  );
};

export default MainArea;
