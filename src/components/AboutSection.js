import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
// Framer Motion
import { motion } from "framer-motion";


const AboutSection = () => {
  // framer motion variant
  // If you have a parent variant and a bunch of children, you can stagger them with staggerChildren property in the transition property
  // when property to define when you want the animation to start (default - starts at the same time)

  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            {/* Use framer motion with props */}
            {/* animate is a live property - can hook it up to the state and animate it live */}
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>come true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="person with a camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
