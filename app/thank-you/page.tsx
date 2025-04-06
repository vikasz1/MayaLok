import Link from "next/link"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Thank You!</h1>
        <p className="text-xl text-gray-300 mb-8">
          Your message has been successfully sent. We will get back to you shortly.
        </p>
        <Link
          href="/"
          className="bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-md transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
