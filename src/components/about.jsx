import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";

function slideIn(delay) {
  return {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
}

function slideOut(delay) {
  return {
    initial: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
}
export default function About() {
  return (
    <div>
      <div className="">
        <div className="px-12 md:px-24 lg:px-44 py-12">
          <div className="grid md:grid-cols-2 place-contente-center  lg:grid-cols-2 gap-x-7 gap-y-10">
            <div className="">
              <motion.img
                variants={slideIn(0.4)}
                initial="initial"
                whileInView={"animate"}
                src="/bg.jpg"
                alt=""
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="">
              <motion.p
              
              variants={slideOut(0.4)}
                initial="initial"
                whileInView={"animate"}
              
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas esse excepturi beatae voluptate, sit quasi ab accusamus
                laudantium sequi! Veritatis distinctio ad, tempora nemo rerum
                nam illum facere nobis facilis quasi rem, aliquam suscipit quis,
                alias reiciendis error molestiae dolore ea? Voluptatum nisi
                tempore nihil molestias numquam deleniti aliquam in.
              </motion.p>
            </div>
            <div className="">
           <motion.p
            variants={slideOut(0.4)}
            initial="initial"
            whileInView={"animate"}
           >   Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              nam temporibus minima quasi molestiae distinctio similique labore
              ullam, dolore eaque amet soluta officiis voluptatem eligendi
              aspernatur, quia corporis sint! Cupiditate corrupti veritatis quas
              architecto odio ipsa pariatur repellat? Repudiandae reiciendis
              blanditiis neque, enim laborum placeat odio alias vel rerum sint.</motion.p>
            </div>
            <div className="">
              <motion.img 
              variants={slideIn(0.4)}
              initial="initial"
              whileInView={"animate"}
              src="/food.jpg" alt="" className="w-full h-64 object-cover" />
            </div>
          </div>
          <div className="text-center pt-12 ">
            <NavLink className={"bg-black text-white px-3 p-2 hover:border hover:bg-transparent hover:text-black rounded-full"} to={""}>Read More</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
