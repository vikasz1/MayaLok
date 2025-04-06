import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import VenturesSection from "@/components/ventures-section"
import FeatureSection from "@/components/feature-section"

export default function Home() {
  const features = [
    {
      icon: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/623b2fad6b395328c558ad78_light-bulb.png",
      title: "Positive Impact Focus",
      description: "We help positive-impact brands and people create meaningful change in the world.",
    },
    {
      icon: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/623b2fac3538e612b19345aa_mobile.png",
      title: "Constant Innovation",
      description: "We continuously explore new technologies and methodologies to stay ahead of the curve.",
    },
    {
      icon: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/623b2fac5c7b8860e8efc609_shopping-bag.png",
      title: "A To Z Expertise",
      description:
        "We build our own businesses from the ground up, giving us comprehensive expertise across all stages.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Venturing forever, together.</h1>
            <p className="text-xl mb-8">
              We bring visions to life with a full suite of agencies to help companies start and scale.
            </p>
            <Link
              href="/apply"
              className="inline-block bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-md transition-colors"
            >
              Apply For Fellowship
            </Link>
          </div>
          <div className="relative">
            <Image
              src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/627d1e14ef51702e03cde3a0_PV.svg"
              alt="Laptop with growth visualization"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">We are persistent towards success.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureSection key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </section>

      {/* Ventures Section */}
      <VenturesSection />

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to collaborate?</h2>
          <p className="text-xl mb-8">Join us in creating impactful ventures that drive positive change.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-md transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/apply"
              className="border border-purple-700 hover:bg-purple-900/30 text-white px-6 py-3 rounded-md transition-colors"
            >
              Apply For Fellowship
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

