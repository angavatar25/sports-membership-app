import { motion } from "framer-motion";

import Typography from "./Typography";
import { EnumTypography } from "../enum/EnumTypography";
import useNavigationBar from "../hooks/useNavigationBar";
import Button from "./Button";
import { EnumButton } from "../enum/EnumButton";
import useNavigation from "../hooks/useNavigate";

const Navbar = () => {
  const { menuNav, isScrolled } = useNavigationBar();
  const { redirectToPage } = useNavigation();

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
            className="text-white flex font-bold text-xl"
          >
            Logo
            <div className="hidden md:flex items-center space-x-8 ml-10">
              {menuNav.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="cursor-pointer"
                  onClick={() => redirectToPage(item.dir)}
                >
                  <Typography
                    isTextWhite={true}
                    variant={EnumTypography.caption}
                  >
                    {item.name}
                  </Typography>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center space-x-4"
          >
            <Button
              text="Login"
              type={EnumButton.PRIMARY}
            />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar