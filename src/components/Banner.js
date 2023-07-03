import React from "react";
import Image from "../assets/poto.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className=" text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="text-[35px] font-bold lg:text-[79px] leading-[0.8]">
              RIZKI RIZAL MUALIM
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[26px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1] ">
              <span className="mr-3">I am a</span>
              <TypeAnimation
                sequence={[
                  "Fullstack Developer",
                  2000,
                  "Videographer",
                  2000,
                  "Photographer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0">
              I have extraordinary abilities in creative and technological
              fields. As a fullstack developer, I am able to master both the
              frontend backend of software development, creating engaging user
              experiences. As a videographer, I have the ability to capture
              precious moments through the audiovisual medium, creating
              professional and high-quality videos. As a photographer, I have a
              high artistic sense in shooting and being able to create stunning
              results. The combination of my expertise in these three areas
              makes me a versatile professional capable of producing engaging
              and stunning visual content with a deep understanding of
              technology.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <Link to="contact" smooth={true}>
                <button className="btn btn-lg">Contact Me</button>
              </Link>
              <Link to="work" smooth={true}>
                <p className="text-gradient btn-link cursor-pointer">
                  My Portfolio
                </p>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 ">
              <a href="https://github.com/Rijal666">
                <FaGithub />
              </a>
              <a href="https://instagram.com/rrizale_">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/rizki-rizal-mualim/">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="lg:w-[40%] lg:h-[40%] hidden lg:flex">
            <img src={Image} alt="" className="rounded-t-full " />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
