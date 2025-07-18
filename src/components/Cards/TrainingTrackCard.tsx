import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const TrainingTrackCard = () => {
  const tracks = [
    {
      title: "Coaching",
      description: "Professional one-on-one coaching sessions",
      color: "from-green-400 to-green-600",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Agility",
      description: "Improve your speed and movement on court",
      color: "from-gray-700 to-gray-900",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Game",
      description: "Play competitive games and tournaments",
      color: "from-orange-400 to-red-500",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {tracks.map((track, index) => (
        <motion.div
          key={track.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.8 }}
          whileHover={{ y: -10, scale: 1.02 }}
          className={`relative h-80 rounded-2xl bg-gradient-to-br ${track.color} overflow-hidden group cursor-pointer`}
        >
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="relative p-6 h-full flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">{track.title}</h3>
              <p className="text-white/80 mb-4">{track.description}</p>

              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-center space-x-2 text-white"
              >
                <span className="text-sm">Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default TrainingTrackCard