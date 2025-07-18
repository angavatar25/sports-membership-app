import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import CommunityCarousel from "./CommunityCarousel"
import Typography from "./Typography"
import { EnumTypography } from "../enum/EnumTypography"

const CommunitySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-white rounded-4xl mx-3">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex justify-between mb-">
            <Typography
              variant={EnumTypography.h2}
              className="max-w-2xl"
            >
              Explore communities and tournaments around you
            </Typography>
            <Typography
              variant={EnumTypography.caption}
              className="max-w-80 my-auto"
            >
              Your sports journey start with us
              and guidance from our professionals coach
            </Typography>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-600 mb-8">
            <span>🏆 Tennis Tournament</span>
            <span>📍 Tournament</span>
          </div>

          <div className="flex items-center space-x-4 mb-8">
            <span className="text-gray-600">Upcoming Event</span>
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-bold text-orange-500">01</span>
              <span className="text-gray-400">/10</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <CommunityCarousel />
        </motion.div>
      </div>
    </section>
  )
}

export default CommunitySection