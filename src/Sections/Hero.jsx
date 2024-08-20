import Navbar from "../components/Navbar";
import Content from "../components/Content";
import { useState } from "react";

const Hero = () => {
  const [visibility, setVisibility] = useState(false);
  const showContent = () => {
    setVisibility(true);
  };
  const hideContent = () => {
    setVisibility(false);
  };
  return (
    <section className="bg-image h-full">
      <Navbar showContent={showContent}  hideContent={hideContent} />
      {visibility && <Content />}
    </section>
  );
};

export default Hero;