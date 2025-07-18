import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer
      ref={ref}
      className="bg-blue-darkmode rounded-4xl m-2 text-white py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-orange-500 font-semibold">TennisClub</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Start your tennis journey with exciting and joyful experience
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-12"
          >
            {/* <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
              Join Us
            </Button> */}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid md:grid-cols-4 gap-8 mb-12"
        >
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Jl. Sudirman No. 123, Jakarta</p>
              <p>Phone: +62 21 1234 5678</p>
              <p>Email: info@tennisclub.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Private Coaching</p>
              <p>Group Sessions</p>
              <p>Court Rental</p>
              <p>Tournaments</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Our Story</p>
              <p>Coaches</p>
              <p>Facilities</p>
              <p>Membership</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Instagram</p>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>YouTube</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400"
        >
          <p>&copy; 2024 Tennis Club. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer