import React from "react";
import { fadeIn } from "../variants";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="about"
      ref={ref}>
      <div className="container mx-auto">
        <div className="lg:flex lg:items-end lg:gap-x-20">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 bg-about bg-contain bg-no-repeat lg:h-[500px] h-[200px] mix-blend-lighten bg-top"></motion.div>
          <div className="flex-1">
            <motion.h2
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="h2 text-accent text-center lg:text-left">
              About Me.
            </motion.h2>

            <motion.h3
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="h3 text-center lg:text-left">
              Hello! Introduce, I'm rijal. I am currently studying S1
              Informatics Engineering at Bina Insani University. I have a high
              passion in developing skills in information technology.
            </motion.h3>
            <motion.div
              variants={fadeIn("left", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max mx-auto lg:mx-0 items-center gap-3 mt-3">
              <Link to="contact" smooth={true}>
                <button className="btn btn-lg">Contact Me</button>
              </Link>{" "}
              <a href="/cv.pdf" className="text-gradient btn-link">
                Download My CV
              </a>
              <FaDownload />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
