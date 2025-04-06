import Image from "next/image"
import Link from "next/link"

interface BlogPostProps {
  title: string
  date: string
  author: string
  category: string
  image: string
  excerpt: string
  slug: string
}

const BlogPost = ({ title, date, author, category, image, excerpt, slug }: BlogPostProps) => {
  return (
    <div className="flex flex-col border border-purple-900/50 rounded-lg overflow-hidden bg-gradient-to-b from-purple-950/40 to-black/40">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <span className="text-purple-400 text-sm">{category}</span>
          <span className="text-gray-400 text-sm">{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{excerpt}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-gray-400 text-sm">By {author}</span>
          <Link href={`/blogs/${slug}`} className="text-purple-400 hover:text-purple-300 transition-colors">
            Read More →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function BlogsPage() {
  const blogPosts = [
    {
      title: "The Future of Venture Capital in Web3",
      date: "April 2, 2023",
      author: "Jane Doe",
      category: "Web3",
      image: "/placeholder.svg?height=300&width=600",
      excerpt:
        "Exploring how blockchain technology is transforming the venture capital landscape and creating new opportunities for investors and entrepreneurs.",
      slug: "future-of-venture-capital-web3",
    },
    {
      title: "Building Successful Startups: Lessons from the Trenches",
      date: "March 15, 2023",
      author: "John Smith",
      category: "Startups",
      image: "/placeholder.svg?height=300&width=600",
      excerpt:
        "Key insights and lessons learned from working with hundreds of startups and helping them navigate the challenges of building and scaling a business.",
      slug: "building-successful-startups",
    },
    {
      title: "The Power of Persistence in Entrepreneurship",
      date: "February 28, 2023",
      author: "Emily Johnson",
      category: "Entrepreneurship",
      image: "/placeholder.svg?height=300&width=600",
      excerpt:
        "Why persistence is the most important trait for entrepreneurs and how to develop it to overcome challenges and achieve success.",
      slug: "power-of-persistence",
    },
    {
      title: "Decentralized Finance: Revolutionizing the Financial System",
      date: "February 10, 2023",
      author: "Michael Brown",
      category: "DeFi",
      image: "/placeholder.svg?height=300&width=600",
      excerpt:
        "How decentralized finance is disrupting traditional financial systems and creating new opportunities for financial inclusion and innovation.",
      slug: "decentralized-finance-revolution",
    },
    {
      title: "The Rise of Impact Investing: Profit with Purpose",
      date: "January 25, 2023",
      author: "Sarah Wilson",
      category: "Impact Investing",
      image: "/placeholder.svg?height=300&width=600",
      excerpt:
        "How impact investing is changing the investment landscape by combining financial returns with positive social and environmental impact.",
      slug: "rise-of-impact-investing",
    },
    {
      title: "Building a Strong Startup Culture: Tips and Strategies",
      date: "January 12, 2023",
      author: "David Lee",
      category: "Startup Culture",
      image: "/placeholder.svg?height=300&width=600",
      excerpt:
        "Practical advice for founders on how to build and maintain a strong company culture that attracts top talent and drives success.",
      slug: "building-strong-startup-culture",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Our Blog</h1>
        <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
          Insights, thoughts, and perspectives from the MayaLok team on entrepreneurship, venture capital, and
          innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              date={post.date}
              author={post.author}
              category={post.category}
              image={post.image}
              excerpt={post.excerpt}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

