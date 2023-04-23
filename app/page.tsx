import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import HeroSection from "./views/heroSection/HeroSection";
import SocailIcons from "./views/socialIcons/SocailIcons";
import About from "./views/about/about";
import Wrapper from "./components/wrap/wrapper";
import Services from "./views/services/Services";
import Contact from "./views/contact/Contact";
import Resume from "./views/resume/Resume";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <HeroSection></HeroSection>
      <Wrapper>
        <SocailIcons></SocailIcons>
        
        <About></About>
        <Services></Services>
        <Resume></Resume>

        <Contact></Contact>
      </Wrapper>
    </>
  );
}
