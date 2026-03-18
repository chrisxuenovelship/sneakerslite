export default function USPCards() {
  const cards = [
    {
      title: 'FASTER',
      description: 'Get authentication results in minutes, not days. Our streamlined process delivers quick verification without compromising quality.',
      icon: '⚡',
    },
    {
      title: 'CHEAPER',
      description: 'Competitive pricing that doesn\'t cut corners. Premium authentication at prices that make sense for your business.',
      icon: '💰',
    },
    {
      title: 'CONSISTENT',
      description: 'Industry-leading accuracy and reliability. Every authentication backed by rigorous standards and expertise.',
      icon: '✓',
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
            Why Choose SneakersLite?
          </h2>
          <p className="text-lg text-gray-600">
            Three core pillars that set us apart
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-brand-cyan group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-brand-dark">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
