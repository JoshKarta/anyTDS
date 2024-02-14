import { useState } from "react";
import Valentine from "./components/valentine"
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [isClicked, setIsClicked] = useState(false)

  const handleClicked = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div className="flex justify-center h-screen items-center flex-col bg-red-300 relative">

      <AnimatePresence>
        {!isClicked &&
          <motion.img
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -500 }}
            transition={{ duration: 2 }}
            src="/heart-removebg.png" alt="" className="w-20 h-20 cursor-pointer animate-pulse" onClick={handleClicked} />
        }
      </AnimatePresence>

      <AnimatePresence>
        {isClicked &&
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Valentine />
          </motion.div>
        }
      </AnimatePresence>
      <p className="absolute right-4 bottom-0 text-neutral-100/30 font-semibold">Friendly neighborhood coder SK</p>
    </div>
  )
}

export default App
