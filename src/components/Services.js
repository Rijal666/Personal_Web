import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "HTML & CSS",
    description:
      "HTML is a programming language used to create the structure and content of web pages. CSS is a programming language used to set the appearance and visual style of web pages.",
  },
  {
    name: "Javascript",
    description:
      "JavaScript is a programming language used to provide interactivity, create functionality, and control dynamic behavior on web pages.",
  },
  {
    name: "React Js",
    description:
      "ReactJS is a JavaScript library used to build interactive and efficient user interfaces (UI) for web application development.",
  },
  {
    name: "Go (Echo & Gin)",
    description:
      "Go (Golang) is an open-source programming language designed for high performance and scalability, with an emphasis on simplicity and developer productivity.",
  },
  {
    name: "C++",
    description:
      "C++ is a high-level and powerful programming language used for software development with a focus on efficiency and high performance.",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-20">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten">
            <h2 className="h2 text-accent mb-6">What can I do</h2>
            <h3 className="h3 max-w-[455px]">
              programming language that I mastered
            </h3>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}>
            {services.map((service, index) => {
              return (
                <div
                  className="border-b border-white/20 h-[96px] mb-[38px]"
                  key={index}>
                  <div className="max-w-[676px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold">
                      {service.name}
                    </h4>
                    <p className="font-secondary leading-tight">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
