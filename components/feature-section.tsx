import Image from "next/image"

interface FeatureSectionProps {
  icon: string
  title: string
  description: string
}

export default function FeatureSection({ icon, title, description }: FeatureSectionProps) {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-6 w-32 h-32 relative">
        <Image src={icon || "/placeholder.svg"} alt={title} width={120} height={120} className="object-contain" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

