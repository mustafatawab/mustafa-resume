import React from "react";
import Image from "next/image";

const MyServices = ({ img, heading, paragraph }: any) => {
  return (
    <>
      <div className="space-y-10 bg-gray-600 shadow-2xl text-center p-6 rounded-lg"> 
        <Image src={img} alt="Services Image" className="m-auto"></Image>
        <h1 className="font-bold text-2xl ">{heading}</h1>
        <p>{paragraph}</p>
      </div>
    </>
  );
};

export default MyServices;
