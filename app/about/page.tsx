import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">About MayaLok</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-6">
              At MayaLok, we're on a mission to bring visions to life with a full suite of agencies to help
              companies start and scale. We believe in the power of persistence, innovation, and collaboration to create
              meaningful change in the world.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Our team of experts works closely with founders and entrepreneurs to turn their ideas into successful
              ventures. We provide the resources, guidance, and support needed to navigate the challenges of building
              and scaling a business.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-purple-900/30 p-2 rounded-md mr-4 mt-1">
                  <svg
                    className="w-5 h-5 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Persistence</h3>
                  <p className="text-gray-300">
                    We believe in the power of persistence to overcome challenges and achieve success.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-900/30 p-2 rounded-md mr-4 mt-1">
                  <svg
                    className="w-5 h-5 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-300">
                    We constantly explore new technologies and methodologies to stay ahead of the curve.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-900/30 p-2 rounded-md mr-4 mt-1">
                  <svg
                    className="w-5 h-5 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                  <p className="text-gray-300">
                    We believe in the power of collaboration to drive success and transform ideas into results.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-block bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-md transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}

