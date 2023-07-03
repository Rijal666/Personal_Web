import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img3 from "../assets/wedding1.jpg";
import img2 from "../assets/DeweTour.jpg";
import img1 from "../assets/Dumbflix.jpg";
import { FaDownload } from "react-icons/fa";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col mb-10 lg:mb-0 ">
            <div>
              <h2 className="h2 leading-tight text-accent">My Proect.</h2>
              <p className="max-w-sm mb-10">
                These are projects that I have made with full dedication and
                commitment. With a growing experience and expertise, I am ready
                to continue the journey of creating more innovative and
                inspiring projects.look in the cv for information about my
                project
              </p>
              <div className="flex gap-x-3 mb-10">
                <a href="/cv.pdf" className="text-gradient btn-link">
                  Download My CV
                </a>
                <FaDownload />
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <a href="https://dumbflix-app.vercel.app/">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={img1}
                  alt=""
                  className="group-hover:scale-125 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Fullstack Developer</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="h3 text-white">Dumbflix</span>
                </div>
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <a href="https://deploy-dewe-tour-lksi.vercel.app/">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={img2}
                  alt=""
                  className="group-hover:scale-125 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Fullstack Developer</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="h3 text-white">DeweTour</span>
                </div>
              </a>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <a href="https://youtu.be/tRmUN8ol_rs">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={img3}
                  alt=""
                  className="group-hover:scale-125 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Videographer</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="h3 text-white">The Wedding</span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
