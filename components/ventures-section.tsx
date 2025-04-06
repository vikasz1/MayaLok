import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface VentureCardProps {
  icon: string
  title: string
  description: string
}

const VentureCard = ({ icon, title, description }: VentureCardProps) => {
  return (
    <div className="flex flex-col items-center text-center p-8 border border-purple-900/50 rounded-lg bg-gradient-to-b from-purple-950/40 to-black/40 h-full">
      <div className="mb-6 w-20 h-20 flex items-center justify-center">
        <Image src={icon || "/placeholder.svg"} alt={title} width={80} height={80} className="object-contain" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <Link
        href="/projects"
        className="mt-auto bg-purple-700 hover:bg-purple-600 text-white px-6 py-2 rounded-md transition-colors"
      >
        View Our Projects
      </Link>
    </div>
  )
}

export default function VenturesSection() {
  const ventures = [
    {
      icon: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66a74987bd1fa110c309564a_rocket-dynamic-color.png",
      title: "Defeating Moloch",
      description: "Uniting to Overcome Challenges, Spark Transformation.",
    },
    {
      icon: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66a7498740d9e54aabc8a6a8_bookmark-fav-dynamic-color.png",
      title: "Service Layer",
      description: "We bring visions to life with our agency suite for startups and growth.",
    },
    {
      icon: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/661406e507d728d42a93b6d5_web3%20for%20good.png",
      title: "Web3 For Good",
      description: "Promoting decentralized power and wealth redistribution.",
    },
    {
      icon: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/661405c386d312343a1251e4_pregmatic%20philosophy.png",
      title: "Redefining Institutions",
      description: "Empowering individuals to thrive on an exponential journey to success.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore our ventures</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl">
            Discover our diverse range of impactful projects, where collaboration drives success and transforms ideas
            into results.
          </p>

          <div className="mb-12">
            <Link
              href="/portfolio"
              className="inline-block bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-md transition-colors"
            >
              Browse our Portfolio
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ventures.map((venture, index) => (
              <VentureCard key={index} icon={venture.icon} title={venture.title} description={venture.description} />
            ))}
          </div>

          <div className="flex justify-start mt-12 space-x-4">
            <button className="p-4 rounded-full bg-purple-900/30 hover:bg-purple-800/50 border border-purple-700/50 transition-colors">
              <ArrowLeft className="h-5 w-5 text-white" />
              <span className="sr-only">Previous</span>
            </button>
            <button className="p-4 rounded-full bg-purple-900/30 hover:bg-purple-800/50 border border-purple-700/50 transition-colors">
              <ArrowRight className="h-5 w-5 text-white" />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

