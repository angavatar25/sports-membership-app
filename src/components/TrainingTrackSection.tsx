import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import TrainingTrackCard from "./Cards/TrainingTrackCard"

const TrainingTrackSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-2xl">
              We aim for perfectness and the beauty of tennis by choosing the right track for you
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">3</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <TrainingTrackCard />
        </motion.div>
      </div>
    </section>
  )
}

export default TrainingTrackSection