import React from "react";

const Contact = () => {
  return (
    <>
      <div className="text-white space-y-10 mt-10">
        <h1 className="text-center font-bold text-3xl">Contact Us</h1>
        <p className="text-center">Get In Touch With Us</p>
        <div className="m-auto">
          <form action="https://formspree.io/f/xgebnkkg" method="POST" className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="mx-auto block bg-transparent p-2 w-80 rounded-md border-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              required
              className="mx-auto block bg-transparent p-2 w-80 rounded-md border-2"
            />
            <textarea
              name="message"
              id=""

              cols={30}
              rows={10}
              className="mx-auto block bg-transparent p-2 w-80 rounded-md border-2"
            ></textarea>
            <button type="submit" className="block mx-auto  bg-gradient-to-r from-green-600 to-blue-500 hover:from-blue-500  hover:shadow-lg duration-500 px-6 py-3 rounded-lg ">Submit</button>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
