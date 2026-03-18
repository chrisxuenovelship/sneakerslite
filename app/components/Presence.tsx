export default function Presence() {
  const locations = [
    {
      flag: '🇭🇰',
      name: 'Hong Kong',
      description: 'Regional headquarters for APAC operations',
    },
    {
      flag: '🇨🇳',
      name: 'China',
      description: 'Major authentication and logistics hub',
    },
    {
      flag: '🇸🇬',
      name: 'Singapore',
      description: 'Global operational center',
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
            Global Presence
          </h2>
          <p className="text-lg text-gray-600">
            Strategically positioned to serve you worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <button
              key={index}
              className="group p-8 rounded-xl border-2 border-gray-200 hover:border-brand-cyan bg-white hover:bg-gradient-to-br hover:from-cyan-50 hover:to-white transition-all duration-300 transform hover:scale-105 cursor-pointer text-center"
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">
                {location.flag}
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-2">
                {location.name}
              </h3>
              <p className="text-gray-600 group-hover:text-brand-cyan transition">
                {location.description}
              </p>
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            Want to Learn more?
          </h3>
          <a
            href="/contact"
            className="inline-block bg-brand-cyan hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
