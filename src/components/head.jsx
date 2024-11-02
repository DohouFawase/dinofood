import { animate, motion } from "framer-motion";
import React from "react";

function slideIn(delay) {
  return (
    {
      initial:{
       x:-100,
       opacity:0
      },
      animate:{
        x:0,
       opacity:1,
       transition: {
        duration:0.6,
        delay:delay
    }

      }
    }
  )

}

function fadeIn(delay) {
  return (
    {
      initial:{
       y:-100,
       opacity:0
      },
      animate:{
        y:0,
       opacity:1,
       transition: {
        duration:0.6,
        delay:delay
    }

      }
    }
  )

}
export default function Head() {
  return (
    <div>
      <div className="px-12 overflow-hidden">
        <motion.h1 
        variants={slideIn(0.4)}
        initial="initial"
        whileInView={"animate"}
        
        className="lg:text-[11.9rem] md:text-[6.9rem] text-[4rem] font-bold  ">DINO FOODS</motion.h1>
        <div className="">
          <motion.p
          variants={slideIn(0.5)}
          initial="initial"
          whileInView={"animate"}
          className=" my-12 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            quos provident sed inventore fuga amet numquam atque officia dicta
            perferendis perspiciatis voluptas quas neque, doloribus nesciunt
            nihil! Quia accusamus commodi quaerat molestias nesciunt blanditiis
            id saepe. Illum facere ut distinctio mollitia, consequuntur tempore
            omnis corporis blanditiis tempora? Veritatis rem neque quidem ex
            quos saepe recusandae!
          </motion.p>
        </div>
      </div>
      <motion.img
       variants={fadeIn(0.5)}
       initial="initial"
       whileInView={"animate"} src="/rest.jpg" alt="" className="w-full" />

    </div>
  );
}
