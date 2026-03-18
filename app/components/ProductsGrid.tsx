export default function ProductsGrid() {
  const brands = [
    { name: 'Nike', emoji: '👟' },
    { name: 'Jordan', emoji: '🏀' },
    { name: 'adidas', emoji: '👟' },
    { name: 'New Balance', emoji: '👟' },
    { name: 'ASICS', emoji: '👟' },
    { name: 'Converse', emoji: '👟' },
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
              <div className="text-5xl md:text-6xl mb-4 group-hover:scale-125 group-hover:hue-rotate-180 transition-all duration-300">
                {brand.emoji}
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
