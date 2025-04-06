import Image from "next/image"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
}

const TeamMember = ({ name, role, image, bio }: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 w-48 h-48 relative rounded-full overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-purple-400 mb-2">{role}</p>
      <p className="text-gray-300">{bio}</p>
    </div>
  )
}

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Jane has over 15 years of experience in venture capital and startup acceleration.",
    },
    {
      name: "John Smith",
      role: "Chief Investment Officer",
      image: "/placeholder.svg?height=200&width=200",
      bio: "John specializes in identifying high-potential ventures and helping them scale.",
    },
    {
      name: "Emily Johnson",
      role: "Head of Operations",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Emily ensures our ventures run smoothly and efficiently to maximize impact.",
    },
    {
      name: "Michael Brown",
      role: "Technology Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Michael guides our technical strategy and innovation initiatives.",
    },
    {
      name: "Sarah Wilson",
      role: "Marketing Lead",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Sarah helps our ventures build strong brands and reach their target audiences.",
    },
    {
      name: "David Lee",
      role: "Fellowship Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "David leads our fellowship program, mentoring the next generation of entrepreneurs.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Our Team</h1>
        <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
          Meet the passionate individuals behind MayaLok who are dedicated to helping impactful ventures
          succeed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} name={member.name} role={member.role} image={member.image} bio={member.bio} />
          ))}
        </div>
      </div>
    </div>
  )
}

