import Link from 'next/link'

export default function Hero() {
  return (
    <section className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-brand-dark">Authenticate </span>
            <span className="text-brand-cyan">Faster.</span>
            <br />
            <span className="text-brand-dark">Cheaper. </span>
            <span className="text-brand-cyan">Consistently.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Revolutionary sneaker authentication that combines cutting-edge AI technology with industry expertise. Fast results, competitive pricing, and unmatched accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-center">
              Get Started Now
            </Link>
            <Link href="/about" className="btn-outline text-center">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
