import Experties from "@/app/components/experties/experties";
import React from "react";

const Resume = () => {
  return (
    <div className="text-white mb-32    ">
        <h1 className="text-5xl text-gray-400 font-bold text-center p-28">Resume</h1>
      {/* <div className="flex justify-between">
            <h1 className="text-3xl font-bold">
                My Education
            </h1>

            <h1 className="text-3xl font-bold">
                My Experties
            </h1>
        </div> */}
      <div className="grid grid-cols-2 gap-7">
        <h1 className="text-3xl font-bold">My Education</h1>

        <h1 className="text-3xl font-bold">My Experties</h1>
        <Experties
          date="2019 - 2023"
          topic="Software Engineer"
          subTopic="IIUI"
          details="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
        ></Experties>
        <Experties
          date="1+ Year"
          topic="Full Stack Web Developer"
          subTopic="Panaverse "
          details="I am expert in Front end and backend techonologies. The technology used are NextJs, and ReactJS as a client side and server side technlogy. Also used Tailwind CSS and Chakra UI for designing web pages."
        ></Experties>
           <Experties
          date="2019 - 2023"
          topic="Bachelor Degree"
          subTopic="Univerisity Of Lahore "
          details="I have done my bachelor degree from University of Lahore with 3.0 CGPA. I have done many mini projects and also participated in many events"
        ></Experties>
           <Experties
          date="1+ Years"
          topic="Programmer"
          subTopic="Self "
          details="I am having alot of experience in different programming languages like C, C++, JAVA, JAVASCRIPT  and Python"
        ></Experties>
      </div>
    </div>
  );
};

export default Resume;
