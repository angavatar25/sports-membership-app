import { motion, AnimatePresence } from "framer-motion"
import { contentVariants, itemVariants, slideVariants } from "../../animation/FramerAnimation"
import { ArrowRight } from "lucide-react"
import Typography from "../Typography"
import { EnumTypography } from "../../enum/EnumTypography"

interface TCourtSession {
  direction: number;
  currentIndex: number;
  data: TCourtData;
};

interface TCourtData {
  image: string;
  courtName: string;
  date: string;
  description: string;
}

const CourtSessionCard = (props: TCourtSession) => {
  const { data, direction, currentIndex } = props;
  return (
    <div className="flex items-center gap-4">
      {/* Main Card with 3D Perspective */}
      <div className="flex-1 relative h-80 perspective-1000">
        <AnimatePresence
          initial={false}
          custom={direction}
          mode="wait"
        >
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 400, damping: 35 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.4 },
              rotateY: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
            }}
            className="absolute inset-0 rounded-4xl overflow-hidden shadow-xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.img
              src={data.image || "/placeholder.svg"}
              alt={data.courtName}
              className="w-full h-full object-cover"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            {/* Card Content with Staggered Animation */}
            <motion.div
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 p-10 flex flex-col justify-between text-white"
            >
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-2 mb-4 bg-white/30 p-2 rounded-full backdrop-blur-lg w-fit">
                  <motion.div
                    className="w-2 h-2 bg-white rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.25, type: "spring", stiffness: 600 }}
                  />
                  <span className="text-sm font-medium">
                    {data.date}
                  </span>
                </div>
                <Typography
                  variant={EnumTypography.caption}
                  className="max-w-2xs"
                >
                  {data.description}
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-end justify-between">
                <Typography variant={EnumTypography.h2}>
                  {data.courtName}
                </Typography>
                <motion.button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-medium flex items-center gap-2 transition-all duration-300 text-sm"
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <ArrowRight size={14} />
                  </motion.div>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
  </div>
  )
}

export default CourtSessionCard