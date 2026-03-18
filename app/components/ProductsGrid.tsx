export default function ProductsGrid() {
  const products = [
    {
      name: 'Air Jordan 1 Retro High',
      model: 'OG Bred',
      price: '$1,299',
      icon: '👟',
      color: 'from-red-100 to-red-50',
    },
    {
      name: 'Nike Dunk Low',
      model: 'University Blue',
      price: '$899',
      icon: '👟',
      color: 'from-blue-100 to-blue-50',
    },
    {
      name: 'Yeezy Boost 350',
      model: 'V2 Zebra',
      price: '$1,499',
      icon: '👟',
      color: 'from-gray-100 to-gray-50',
    },
    {
      name: 'New Balance 990v6',
      model: 'Grey',
      price: '$649',
      icon: '👟',
      color: 'from-slate-100 to-slate-50',
    },
    {
      name: 'Travis Scott Air Jordan 1',
      model: 'Retro High OG',
      price: '$1,899',
      icon: '👟',
      color: 'from-amber-100 to-amber-50',
    },
    {
      name: 'Sacai x Nike Blazer',
      model: 'Mid Vintage',
      price: '$899',
      icon: '👟',
      color: 'from-violet-100 to-violet-50',
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
            Popular Sneakers Authenticated
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by sneaker enthusiasts worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${product.color} rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:border-brand-cyan border border-transparent cursor-pointer group`}
            >
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform transform group-hover:rotate-12">
                {product.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {product.model}
              </p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <p className="text-2xl font-bold text-brand-cyan">
                  {product.price}
                </p>
                <button className="bg-brand-cyan text-white px-4 py-2 rounded-lg font-semibold hover:bg-cyan-700 transition">
                  Verify
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
