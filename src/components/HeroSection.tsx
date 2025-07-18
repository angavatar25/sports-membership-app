import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Typography from "./Typography"
import { EnumTypography } from "../enum/EnumTypography"

const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/5740521/pexels-photo-5740521.jpeg?_gl=1*kf8gd5*_ga*NDE3MzQ0MzIuMTc1MjczMzQ4MA..*_ga_8JE65Q40S6*czE3NTI3MzM0NzkkbzEkZzEkdDE3NTI3MzM0OTgkajQxJGwwJGgw"
          alt="Tennis court"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-between">
        <div/>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white px-4 py-2 rounded-full text-sm font-medium mb-8 w-fit flex gap-4"
        >
          <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center my-auto">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
          <div>
            <Typography variant={EnumTypography.h2}>
              Tennis
            </Typography>
            <Typography variant={EnumTypography.body}>
              Experience the thrill of professional tennis training and tournaments
            </Typography>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-[256px] text-white mb-8"
        >
          Tennis
        </motion.h1>
      </div>
    </section>
  )
}

export default HeroSection