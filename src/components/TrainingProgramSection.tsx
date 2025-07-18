import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import TrainingProgramCard from "./Cards/TrainingProgramCard"

const TrainingProgramSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join us with our extensive training program
          </h2>
          <div className="w-8 h-1 bg-orange-500 rounded"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <TrainingProgramCard />
        </motion.div>
      </div>
    </section>
  )
}

export default TrainingProgramSection