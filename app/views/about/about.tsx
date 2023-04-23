import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const About = () => {
  return (
    <>
      <hr className="-mt-32 opacity-50"/>
      <section className="text-white mt-20">
        <h1 className="text-center text-3xl font-bold ">About Me</h1>

        <div className=" py-10 flex flex-wrap">
          <div className="basis-2/3 ">
            <h1 className="font-bold text-2xl">
              Hi, I am <span className="text-green-700">Mustafa Tawab</span>
            </h1>
            <p className="leading-6">
              I help you build brand for your business at an affordable price.
              Thousands of clients have procured exceptional results while
              working with our dedicated team. when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
              Delivering work within time and budget which meets client
              requirements is our moto. Lorem Ipsum has been the industry
              standard dummy text ever when an unknown printer took a galley.
            </p>
          </div>
          <div className="basis-1/3 pl-4 space-y-2">
            <p>
              {" "}
              <span className="font-bold">Name : </span> Mustafa Tawab
            </p>
            <hr className="opacity-40" />
            <p>
              <span className="font-bold">Email : </span> tawab05@gmail.com
            </p>
            <hr className="opacity-40" />
            <p>
              <span className="font-bold">Age : </span> 23
            </p>
            <hr className="opacity-40" />
            <p>
              <span className="font-bold">From : </span>Naval Anchorage
              Islamabad
            </p>
            <button className="group flex items-center bg-gradient-to-r from-green-600 to-blue-500 hover:from-blue-500   px-6 py-3 rounded-lg">
              Download CV
              <MdKeyboardArrowRight className="group-hover:rotate-90 duration-300" />
            </button>
          </div>
        </div>

            <div className="flex justify-around">
                <span className="text-center">
                    <h2 className="font-bold text-4xl text-gray-400">10+</h2>
                    <p>Years Experience</p>
                </span>

                <span className="text-center">
                    <h2 className="font-bold text-4xl text-gray-400">250+</h2>
                    <p>Happy Clients</p>
                </span>

                <span className="text-center">
                    <h2 className="font-bold text-4xl text-gray-400">650+</h2>
                    <p>Projects Done</p>
                </span>

                <span className="text-center">
                    <h2 className="font-bold text-4xl text-gray-400">38</h2>
                    <p>Get Awards</p>
                </span>
            </div>

      </section>
    </>
  );
};

export default About;
