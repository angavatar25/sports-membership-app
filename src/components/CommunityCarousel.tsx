import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, ArrowRight, Calendar, Users } from "lucide-react"

const CommunityCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const events = [
    {
      id: 1,
      title: "Summer Championship",
      subtitle: "Weekly Tournament",
      color: "from-gray-800 to-gray-900",
      textColor: "text-white",
      participants: 24,
      date: "This Week",
      description: "Join our exciting summer championship with players from all skill levels.",
    },
    {
      id: 2,
      title: "Monthly Challenge",
      subtitle: "Monthly Challenge",
      color: "from-orange-400 to-red-500",
      textColor: "text-white",
      participants: 18,
      date: "Next Week",
      description: "Test your skills in our monthly challenge tournament.",
    },
    {
      id: 3,
      title: "Beginner's Cup",
      subtitle: "Beginner Tournament",
      color: "from-blue-500 to-purple-600",
      textColor: "text-white",
      participants: 32,
      date: "This Month",
      description: "Perfect tournament for beginners to get competitive experience.",
    },
    {
      id: 4,
      title: "Pro League",
      subtitle: "Professional Tournament",
      color: "from-green-500 to-teal-600",
      textColor: "text-white",
      participants: 16,
      date: "Next Month",
      description: "High-level competition for advanced players.",
    },
    {
      id: 5,
      title: "Mixed Doubles",
      subtitle: "Doubles Tournament",
      color: "from-pink-500 to-rose-600",
      textColor: "text-white",
      participants: 20,
      date: "Coming Soon",
      description: "Fun mixed doubles tournament for all skill levels.",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === events.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1))
  }

  return (
    <div className="relative container mx-auto">
      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-gray-900 hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center space-x-2">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? "bg-orange-500 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: `${-currentIndex * 50}%` }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.5,
          }}
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="flex-shrink-0 w-full md:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`relative h-64 rounded-2xl bg-gradient-to-br ${event.color} overflow-hidden group cursor-pointer`}
              >
                <div className="absolute inset-0 bg-black/20"></div>

                <div className="relative p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Calendar className="w-4 h-4 text-white/80" />
                      <span className="text-white/80 text-sm">{event.date}</span>
                    </div>

                    <h3 className={`text-2xl font-bold ${event.textColor} mb-2`}>{event.title}</h3>
                    <p className="text-white/80 mb-2">{event.subtitle}</p>
                    <p className="text-white/70 text-sm">{event.description}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-white/80" />
                      <span className="text-white/80 text-sm">{event.participants} participants</span>
                    </div>

                    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                      {/* <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 p-2">
                        <ArrowRight className="w-4 h-4" />
                      </Button> */}
                    </motion.div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Current Slide Info */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-6 text-center"
      >
        <p className="text-gray-600 text-sm">
          Showing {currentIndex + 1} of {events.length} tournaments
        </p>
      </motion.div>
    </div>
  )
}

export default CommunityCarousel