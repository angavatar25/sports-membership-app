import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"

const TrainingProgramCard = () => {
  const programs = [
    {
      title: "Private Session",
      subtitle: "For super beginner - intermediate",
      price: "Rp 200.000",
      period: "/session",
      color: "from-orange-400 to-red-500",
      features: ["One-on-one coaching", "Flexible scheduling", "Equipment provided", "Progress tracking"],
    },
    {
      title: "Private Session",
      subtitle: "For intermediate - upper intermediate",
      price: "Rp 300.000",
      period: "/session",
      color: "from-gray-700 to-gray-900",
      features: ["Advanced techniques", "Match preparation", "Video analysis", "Tournament training"],
    },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {programs.map((program, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.8 }}
          whileHover={{ y: -10, scale: 1.02 }}
          className={`relative rounded-2xl bg-gradient-to-br ${program.color} overflow-hidden`}
        >
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="relative p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/80 text-sm">Premium</span>
              </div>
              <span className="text-white/60 text-sm">Jan - Feb 2024</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
            <p className="text-white/80 mb-6">{program.subtitle}</p>

            <div className="mb-8">
              <div className="flex items-baseline space-x-1">
                <span className="text-3xl font-bold text-white">{program.price}</span>
                <span className="text-white/60">{program.period}</span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {program.features.map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + featureIndex * 0.1 + 0.5 }}
                  className="flex items-center space-x-3"
                >
                  <Check className="w-4 h-4 text-white" />
                  <span className="text-white/80 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 text-center">
              <span className="text-white/60 text-xs">Book Now - 1</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default TrainingProgramCard