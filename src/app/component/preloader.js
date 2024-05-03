"use client";
import { color, motion, px ,AnimatePresence} from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Preloader() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader)
        setTimeout(() => {
          loader.style.display = "none";
        }, 3000);
    }
  }, []);

  const [areWindow , setAreWindow]= useState(false);

  useEffect(() =>{
    setTimeout(() =>setAreWindow(true),8000)
  })


  const [boxClicked, setBoxclicked] = useState(false);

  const handleClick = () => {
    setBoxclicked(true);
  };

  
  return (
    <div>

       <AnimatePresence>
      {areWindow === false && (
         
         <motion.div
          className="are text-center absolute z-10"
          initial={{ backgroundColor: "black", width: "0%" }}

          animate={{
            width: "100%",
            x:"0%",
            transition: {
              delay: 0,
              duration: 1,
              ease: "easeInOut",}
          }}
          exit={
            {width: "0%",}
          }

        >

          
          <motion.span
            className="are-text text-3xl font-semibold leading-normal	text-white mr-2 "
            initial={{ y: "15px", opacity: 0 }}
            animate={{
              y: "0px",
              opacity: 1,
              transition: {
                delay: 1.2,
                duration: 0.5,
              },
            }}
          >
            ARE
          </motion.span>
  
          <motion.span
            className="are-text text-3xl font-semibold leading-normal	text-white mr-2 "
            initial={{ y: "15px", opacity: 0 }}
            animate={{
              y: "0px",
              opacity: 1,
              transition: {
                delay: 1.4,
                duration: 0.5,
              },
            }}
          >
            YOU
          </motion.span>
  
          <motion.span
            className="are-text text-3xl font-semibold leading-normal	text-white mr-2 "
            initial={{ y: "15px", opacity: 0 }}
            animate={{
              y: "0px",
              opacity: 1,
              transition: {
                delay: 1.6,
                duration: 0.5,
              },
            }}
          >
            READY
          </motion.span>
  
          <motion.div
            className="line-text text-3xl font-semibold leading-normal mr-2 bg-white	"
            initial={{
              x: "0",
              opacity: 0,
              backgroundColor: "white",
              width: "0px",
              height: "2px",
            }}
            animate={{
              X: "100%",
              opacity: 1,
              transition: {
                width: "0px",
                height: "2px",
                delay: 1.7,
                duration: 0.5,
              },
            }}
          >
            
          </motion.div> 

        </motion.div>
        )}
      </AnimatePresence>
      

      <AnimatePresence>
      {boxClicked === false && (
        <motion.div
        className="box flex flex-col justify-center absolute z-20"
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: 1,
          height: "100%",
          transition: {
            delay: 1.7,
            duration: 1.5,
            ease: "easeInOut",
          },
        }}
        exit={
          {width: "0%",x:["50%", "100%"]}
        }
      >
        <motion.span
          className="pre-text text-9xl font-semibold leading-normal	text-white"
          initial={{ x: "100%" }}
          animate={{
            x: "10%",
            opacity: 1,
            transition: {
              delay: 2.5,
              duration: 1.5,
            },
            
          }}
        >
          <Link href={"/logo"} onClick={handleClick}>LOGO DESIGN</Link>
        </motion.span>

        <motion.span
          className="pre-text text-9xl font-semibold leading-normal	text-white"
          initial={{ x: "100%" }}
          animate={{
            x: "10%",
            opacity: 1,
            transition: {
              delay: 2.6,
              duration: 1.5,
            },
          }}
        >
        <Link href={"/web"} onClick={handleClick}>WEBSITE</Link>
        </motion.span>

        <motion.span
          className="pre-text text-9xl font-semibold leading-normal	text-white"
          initial={{ x: "100%" }}
          animate={{
            x: "10%",
            opacity: 1,
            transition: {
              delay: 2.7,
              duration: 1.5,
            },
          }}
        >
          <Link href={"/"}>MARKETING</Link>
        </motion.span>
      </motion.div>
      )}
      </AnimatePresence>
      
    </div>
  );
}
