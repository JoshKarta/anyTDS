import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import Paper from "./paper";

export default function Envelope() {
    const [isOpen, setIsOpen] = useState(false);

    function handleEnvelopeClick() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="relative cursor-pointer" onClick={handleEnvelopeClick}>
            {/* Envelope */}
            <div className="w-0 h-0 
  border-l-[150px] border-l-indigo-700
  border-t-[100px] border-t-indigo-600
  border-b-[100px] border-b-indigo-700
  border-r-[150px] border-r-indigo-700">
            </div>
            {/* Lid */}
            <div className={`absolute top-0 w-0 h-0 
  border-l-[150px] border-l-transparent
  border-b-[100px] border-b-indigo-600
  border-r-[150px] border-r-transparent transition-all duration-500 ease-in-out -scale-y-100 ${isOpen ? "scale-y-100 !-top-1/2 border-b-indigo-700" : ""}`} >
            </div>
            {/* Paper */}
            <AnimatePresence>
                {isOpen && (<>
                    <motion.div
                        key="paper"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5 }}
                        className="absolute left-8 -top-16 "
                    >
                        <Paper description="Happy valentines day ❤️! Hope you have/had a wonderful day" />
                    </motion.div>
                    <motion.img
                        key="heart1"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: -300 }}
                        exit={{ opacity: 0, y: -500 }}
                        transition={{ duration: 1, delay: .2 }}
                        className="w-12 h-12 absolute z-30" src="/heart-removebg.png" />
                    <motion.img
                        key="heart2"
                        initial={{ opacity: 0, y: 100, x: 125 }}
                        animate={{ opacity: 1, y: -350 }}
                        exit={{ opacity: 0, y: -500 }}
                        transition={{ duration: 1, delay: .3 }}
                        className="w-12 h-12 absolute z-30" src="/heart-removebg.png" />
                    <motion.img
                        key="heart3"
                        initial={{ opacity: 0, y: 100, x: 275 }}
                        animate={{ opacity: 1, y: -300 }}
                        exit={{ opacity: 0, y: -500 }}
                        transition={{ duration: 1, delay: .4 }}
                        className="w-12 h-12 absolute z-30" src="/heart-removebg.png" />
                </>
                )}
            </AnimatePresence>
        </div >
    )
}
