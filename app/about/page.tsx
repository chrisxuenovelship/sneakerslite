import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function About() {
  const milestones = [
    {
      year: '2024',
      title: 'CyberPort Incubation',
      description: 'Selected as one of the most promising sneaker tech startups in Hong Kong through the prestigious CyberPort accelerator program.',
    },
    {
      year: '2025',
      title: 'Series A Funding',
      description: 'Secured Series A funding to expand operations across APAC and establish regional hubs in Hong Kong, China, and Singapore.',
    },
  ]

  return (
    <main className="w-full">
      <Navigation />
      
      <div className="pt-16 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
              About <span className="text-brand-cyan">SneakersLite</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Revolutionizing sneaker authentication through cutting-edge AI technology and industry expertise
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Vision */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-dark">
                  Our Vision
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To become the global standard for sneaker authentication, making counterfeit sneakers a thing of the past through innovative technology and uncompromising quality.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We envision a world where every sneaker enthusiast and collector can authenticate their prized possessions with confidence, speed, and affordability.
                </p>
              </div>

              {/* Mission */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-dark">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To deliver fast, affordable, and consistent sneaker authentication through AI-powered analysis combined with expert human verification.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We're committed to protecting the sneaker community from fraud while maintaining transparent pricing and exceptional customer service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-brand-dark">
            Key Milestones
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-white border-l-4 border-brand-cyan rounded-lg p-8 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="text-2xl font-bold text-brand-cyan">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-brand-dark mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-brand-dark">
              Our Core Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-2 text-brand-dark">Innovation</h3>
                <p className="text-gray-600">
                  Constantly pushing the boundaries of authentication technology
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2 text-brand-dark">Trust</h3>
                <p className="text-gray-600">
                  Building lasting relationships through transparency and reliability
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-xl font-bold mb-2 text-brand-dark">Excellence</h3>
                <p className="text-gray-600">
                  Delivering premium quality in every interaction and service
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
