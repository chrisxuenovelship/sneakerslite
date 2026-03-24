'use client'

import Image from 'next/image'

export default function ProductsGrid() {
  const brands = [
    { name: 'Nike', logo: '/images/brands/nike.svg' },
    { name: 'Jordan', logo: '/images/brands/jordan.svg' },
    { name: 'adidas', logo: '/images/brands/adidas.svg' },
    { name: 'New Balance', logo: '/images/brands/newbalance.svg' },
    { name: 'ASICS', logo: '/images/brands/asics.svg' },
    { name: 'Converse', logo: '/images/brands/converse.svg' },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
            Brands we are able to authenticate
          </h2>
          <p className="text-lg text-gray-600">
            We authenticate sneakers across the world's leading brands
          </p>
        </div>

        {/* Mobile: 2 columns | Desktop: 3 columns (2 rows) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-brand-cyan cursor-pointer group flex flex-col items-center justify-center text-center"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mb-4 group-hover:scale-110 transition-all duration-300 relative">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain filter invert brightness-0"
                  priority={true}
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                {brand.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
