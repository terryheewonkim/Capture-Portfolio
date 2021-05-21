import React from "react";
import { Link } from "react-router-dom";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
// Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fadeAnim, photoAnim } from "../animation";
// Wave svg
import Wave from "./Wave";

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
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fadeAnim}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fadeAnim}>Contact Us</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img
          src={home1}
          alt="person with a camera"
          variants={photoAnim}
          initial="hidden" // defining initial and animate properties counteracts the staggerChildren property
          animate="show"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
