import { useRef, useState } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Typography from "./Typography"
import CourtSessionCard from "./Cards/CourtSessionCard"
import { EnumTypography } from "../enum/EnumTypography"

const CourtSession = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const sessions = [
    {
      id: 1,
      courtName: "Court Alpha",
      date: "14 January 2026",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      sessionType: "Advanced Training",
      image: "https://images.pexels.com/photos/5740521/pexels-photo-5740521.jpeg?_gl=1*kf8gd5*_ga*NDE3MzQ0MzIuMTc1MjczMzQ4MA..*_ga_8JE65Q40S6*czE3NTI3MzM0NzkkbzEkZzEkdDE3NTI3MzM0OTgkajQxJGwwJGgw",
      level: "Advanced",
      duration: "90 minutes",
    },
    {
      id: 2,
      courtName: "Court Beta",
      date: "16 January 2026",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      sessionType: "Beginner Basics",
      image: "https://images.pexels.com/photos/5740521/pexels-photo-5740521.jpeg?_gl=1*kf8gd5*_ga*NDE3MzQ0MzIuMTc1MjczMzQ4MA..*_ga_8JE65Q40S6*czE3NTI3MzM0NzkkbzEkZzEkdDE3NTI3MzM0OTgkajQxJGwwJGgw",
      level: "Beginner",
      duration: "60 minutes",
    },
    {
      id: 3,
      courtName: "Court Gamma",
      date: "18 January 2026",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      sessionType: "Match Preparation",
      image: "https://images.pexels.com/photos/5740521/pexels-photo-5740521.jpeg?_gl=1*kf8gd5*_ga*NDE3MzQ0MzIuMTc1MjczMzQ4MA..*_ga_8JE65Q40S6*czE3NTI3MzM0NzkkbzEkZzEkdDE3NTI3MzM0OTgkajQxJGwwJGgw",
      level: "Intermediate",
      duration: "75 minutes",
    },
    {
      id: 4,
      courtName: "Court Delta",
      date: "20 January 2026",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      sessionType: "Recovery Training",
      image: "https://images.pexels.com/photos/5740521/pexels-photo-5740521.jpeg?_gl=1*kf8gd5*_ga*NDE3MzQ0MzIuMTc1MjczMzQ4MA..*_ga_8JE65Q40S6*czE3NTI3MzM0NzkkbzEkZzEkdDE3NTI3MzM0OTgkajQxJGwwJGgw",
      level: "All Levels",
      duration: "45 minutes",
    },
  ]

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sessions.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sessions.length) % sessions.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant={EnumTypography.h2}
              className="mb-10"
            >
              Explore and see our <span className="text-red-500">court session</span>
            </Typography>

            {/* Enhanced Session Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 30, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="space-y-4"
              >
                <div className="flex items-center gap-4">
                  <motion.span
                    className="bg-red-primary text-white px-3 py-1 rounded-full text-sm font-medium"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
                  >
                    {sessions[currentIndex].level}
                  </motion.span>
                  <span className="text-gray-500">{sessions[currentIndex].duration}</span>
                </div>
                <h3 className="text-2xl text-gray-900">{sessions[currentIndex].sessionType}</h3>
                <p className="text-gray-600">{sessions[currentIndex].description}</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Enhanced Card Slider */}
          <motion.div
            initial={{ x: 100, opacity: 0, scale: 0.8 }}
            animate={isInView ? { x: 0, opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <CourtSessionCard
              direction={direction}
              currentIndex={currentIndex}
              data={sessions[currentIndex]}
            />
            {/* Enhanced Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {sessions.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-400 ${
                    index === currentIndex ? "bg-red-primary w-6" : "bg-gray-300 hover:bg-gray-400 w-1.5"
                  }`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
        <div className="flex gap-3 justify-end mt-4">
          <motion.button
            onClick={prevSlide}
            className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 border group"
            whileHover={{ scale: 1.1, y: -1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft
              size={16}
              className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
            />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="w-10 h-10 bg-red-primary rounded-full shadow-lg flex items-center justify-center hover:bg-red-600 transition-all duration-300 group"
            whileHover={{ scale: 1.1, y: -1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight
              size={16}
              className="text-white group-hover:scale-110 transition-transform duration-300"
            />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default CourtSession