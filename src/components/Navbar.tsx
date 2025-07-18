import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { useEffect, useState } from "react"
import Typography from "./Typography";
import { EnumTypography } from "../enum/EnumTypography";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled past the hero section (assuming hero is ~100vh)
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight * 0.8 // 80% of viewport height

      setIsScrolled(scrollPosition > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0)",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
      }}
      transition={{
        y: { duration: 0.8, ease: "easeOut" },
        opacity: { duration: 0.8, ease: "easeOut" },
        backgroundColor: { duration: 0.3, ease: "easeInOut" },
        backdropFilter: { duration: 0.3, ease: "easeInOut" },
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
      style={{
        borderBottomColor: isScrolled ? "rgba(255, 255, 255, 0.1)" : "transparent",
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-white flex font-bold text-xl"
          >
            Logo
            <div className="hidden md:flex items-center space-x-8 ml-10">
              {["Home", "Schedule", "Events", "About"].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -2 }}
                  className="text-white hover:text-orange-400 transition-colors duration-200 relative"
                >
                  <Typography variant={EnumTypography.caption}>
                    {item}
                  </Typography>
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-400 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center space-x-4"
          >
            <motion.div
              className="w-8 h-8 bg-white rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
            {/* <Button variant="ghost" size="icon" className="text-white md:hidden hover:bg-white/10">
              <Menu className="h-6 w-6" />
            </Button> */}
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar