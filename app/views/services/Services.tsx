import MyServices from "@/app/components/services/services";
import React from "react";
import image1 from "../../assets/images/servicesImages/01.png";
import image2 from "../../assets/images/servicesImages/02.png";
import image3 from "../../assets/images/servicesImages/03.png";
import image4 from "../../assets/images/servicesImages/04.png";
import image5 from "../../assets/images/servicesImages/05.png";
import image6 from "../../assets/images/servicesImages/06.png";

const Services = () => {
  return (
    <>
      <div className="text-white mt-28">
        <hr />

        <h1 className="p-10 text-3xl font-bold text-center mt-5  "> <span className="shadow-md underline-offset-8"> Services</span></h1>
        <div className="grid grid-cols-3 gap-5 py-10">
          <MyServices
            img={image1}
            heading="Sketches"
            paragraph="Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem."
          ></MyServices>

          <MyServices
            img={image2}
            heading="UI/UX Design"
            paragraph="Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem."
          ></MyServices>

          <MyServices
            img={image3}
            heading="Product Design"
            paragraph="Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem."
          ></MyServices>

          <MyServices
            img={image4}
            heading="Brand Design"
            paragraph="Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem."
          ></MyServices>

          <MyServices
            img={image5}
            heading="Digital Marketing"
            paragraph="Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem."
          ></MyServices>

          <MyServices
            img={image6}
            heading="Web Design"
            paragraph="Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem."
          ></MyServices>
        </div>

        <hr />
        
      </div>
    </>
  );
};

export default Services;
