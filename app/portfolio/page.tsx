import Image from "next/image"
import Link from "next/link"

interface PortfolioItemProps {
  title: string
  category: string
  image: string
  description: string
  link: string
}

const PortfolioItem = ({ title, category, image, description, link }: PortfolioItemProps) => {
  return (
    <div className="flex flex-col border border-purple-900/50 rounded-lg overflow-hidden bg-gradient-to-b from-purple-950/40 to-black/40">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-purple-400 text-sm mb-2">{category}</span>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300 mb-6 flex-grow">{description}</p>
        <Link
          href={link}
          className="mt-auto inline-block bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors text-center"
        >
          View Case Study
        </Link>
      </div>
    </div>
  )
}

export default function PortfolioPage() {
  const portfolioItems = [
    {
      title: "Defeating Moloch Project",
      category: "Collaboration Platform",
      image: "/placeholder.svg?height=300&width=600",
      description:
        "A platform that helps organizations overcome coordination challenges and work together more effectively.",
      link: "/portfolio/defeating-moloch",
    },
    {
      title: "Service Layer Suite",
      category: "Agency Services",
      image: "/placeholder.svg?height=300&width=600",
      description: "Our comprehensive suite of agency services designed to help startups scale and succeed.",
      link: "/portfolio/service-layer",
    },
    {
      title: "Web3 For Good Initiative",
      category: "Blockchain",
      image: "/placeholder.svg?height=300&width=600",
      description: "Leveraging blockchain technology to promote decentralized power and wealth redistribution.",
      link: "/portfolio/web3-for-good",
    },
    {
      title: "Institutional Transformation",
      category: "Education",
      image: "/placeholder.svg?height=300&width=600",
      description:
        "Redefining traditional institutions to empower individuals on their journey to success through innovative educational approaches.",
      link: "/portfolio/institutional-transformation",
    },
    {
      title: "Decentralized Finance Platform",
      category: "Finance",
      image: "/placeholder.svg?height=300&width=600",
      description:
        "A platform that provides accessible financial services to underserved communities through blockchain technology.",
      link: "/portfolio/defi-platform",
    },
    {
      title: "Sustainable Tech Initiative",
      category: "Sustainability",
      image: "/placeholder.svg?height=300&width=600",
      description:
        "Developing technology solutions that address environmental challenges and promote sustainable practices.",
      link: "/portfolio/sustainable-tech",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Our Portfolio</h1>
        <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
          Explore our diverse range of impactful projects, where collaboration drives success and transforms ideas into
          results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              category={item.category}
              image={item.image}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

