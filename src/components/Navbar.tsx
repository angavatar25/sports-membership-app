import { motion } from "framer-motion"
import { Menu } from "lucide-react"

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-white font-bold text-xl"
          >
            Logo
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Services", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="text-white hover:text-red-400 transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="md:hidden text-white"
          >
            <Menu size={24} />
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}

export default Navbar