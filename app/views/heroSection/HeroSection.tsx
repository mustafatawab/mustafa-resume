import React from "react";
import Image from "next/image";
import background from "../../assets/images/backgroundImage.jpg";
import mustafaImage from "../../assets/images/mustafa.png";
import { MdKeyboardArrowRight } from "react-icons/md";

function HeroSection() {
  return (
    <>
      <Image className="w-full h-[900px] -mt-10 z-10 " src={background} alt="Background Image" />
      <div className="items-center  w-full h-screen -ml-28 -mt-[550px] ">
        <section className="  text-white -ml-14 lg:flex sm:flex-col md:flex-row ">
          <div className="max-w-lg space-y-5 text-black text-justify sm:mx-auto pb-10 px-3">
            <h1 className="text-3xl font-bold ">
              I am Full Stack Web Developer
            </h1>
            <p>
              I am a frontend web developer and backend as well. I can provide
              clean code and pixel perfect design. I also make website more &
              more interactive with web animations. Click on the button below to
              view my freelancing account.
            </p>
            <button className="group flex items-center bg-gradient-to-r from-green-600 to-blue-500 hover:from-blue-500   px-6 py-3 rounded-lg">
              Hire Me
              <MdKeyboardArrowRight className="group-hover:rotate-90 duration-300" />
            </button>
          </div>

          <div className="">
            <Image
            width={1200}
            height={1200}
              src={mustafaImage}
              alt="MUSTAFA TAWAB"
              className="max-w-md -mt-32   "
            ></Image>
          </div>
          
        </section>
        
      </div>
    </>
  );
}

export default HeroSection;
