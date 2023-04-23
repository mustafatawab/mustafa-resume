"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

function NavBar() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="fixed top-0 w-full   flex text-xl  justify-around py-7 text-white bg-gray-900   items-center">
        <div className="font-autograph">
          <Link href={"/"}>Mustafa Tawab</Link>
        </div>
        <div className="space-x-7  font-autograph2 hidden md:flex">
          <span className="hover:text-green-600 hover:scale-150 duration-500">
            <Link href={"#"}>Home</Link>
          </span>
          <span className="hover:text-green-600 hover:scale-150 duration-500">
            <Link href={"#"}>About</Link>
          </span>
          <span className="hover:text-green-600 hover:scale-150 duration-500">
            <Link href={"#"}>Portfolio</Link>
          </span>
          <span className="hover:text-green-600 hover:scale-150 duration-500">
            <Link href={"#"}>Skills</Link>
          </span>
          <span className="hover:text-green-600 hover:scale-150 duration-500">
            <Link href={"#"}>Blog</Link>
          </span>
          <span className="hover:text-green-600 hover:scale-150 duration-500">
            <Link href={"#"}>Contact</Link>
          </span>
        </div>

        <span className="flex items-center gap-3">
          <IoIosCall />
          <p className="text-green-600 hover:text-white ">+923475300572</p>
        </span>
        <div
          className="lg:hidden md:hidden z-20"
          onClick={() => {
            setToggle(!toggle);
            console.log(toggle);
          }}
        >
          {toggle ? <GiHamburgerMenu size={30} /> :  <RxCross1 />}
        </div>

        {/* overlay starts here */}
        {!toggle ? (
          <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center  bg-black text-white lg:hidden md:hidden sm:flex">
            <ul className="font-autograph2 text-6xl space-y-8">
              <li className="hover:scale-125 duration-300 hover:text-green-700">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:scale-125 duration-300 hover:text-green-700">
                <Link href={"/"}>About</Link>
              </li>
              <li className="hover:scale-125 duration-300 hover:text-green-700">
                <Link href={"/"}>Portfolio</Link>
              </li>
              <li className="hover:scale-125 duration-300 hover:text-green-700">
                <Link href={"/"}>Skils</Link>
              </li>
              <li className="hover:scale-125 duration-300 hover:text-green-700">
                <Link href={"/"}>Contact</Link>
              </li>
            </ul>
          </div>
        ) : null}

        {/* overlay Ends here */}
      </div>
    </>
  );
}

export default NavBar;
