export default function Home() {
  return (
    <main className="min-h-screen bg-green-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">
          SwadKart
        </h1>
        <p className="text-2xl mb-4">
          Nature Se Seedha Aap Tak
        </p>
        <p className="max-w-2xl mx-auto text-lg">
          Premium Quality Spices, Dry Fruits & Healthy Foods
          delivered with purity, freshness and trust.
        </p>

        <a
          href="https://www.facebook.com/people/SwadKart/61590928815698/"
          target="_blank"
          className="inline-block mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg"
        >
          Visit Our Facebook Page
        </a>
      </section>

      {/* About */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-6">
          Welcome to SwadKart
        </h2>

        <p className="max-w-3xl mx-auto text-lg">
          SwadKart brings premium spices, dry fruits, seeds and healthy food
          products directly to your home. Our mission is to provide natural,
          hygienically packed and high-quality products at affordable prices.
        </p>
      </section>

      {/* Products */}
      <section className="py-16 bg-white px-6">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          Our Product Range
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-green-100 rounded-xl p-8 text-center shadow">
            <h3 className="text-2xl font-bold mb-4">🌶️ Spices</h3>
            <p>
              Haldi Powder, Lal Mirch Powder, Jeera, Ajwain,
              Choti Elaichi and more.
            </p>
          </div>

          <div className="bg-green-100 rounded-xl p-8 text-center shadow">
            <h3 className="text-2xl font-bold mb-4">🥜 Dry Fruits</h3>
            <p>
              Almonds, Cashews, Raisins, Pistachios,
              Walnuts and premium dry fruits.
            </p>
          </div>

          <div className="bg-green-100 rounded-xl p-8 text-center shadow">
            <h3 className="text-2xl font-bold mb-4">🌱 Seeds & Healthy Foods</h3>
            <p>
              Flax Seeds, Pumpkin Seeds, Chia Seeds and
              healthy nutrition products.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="font-bold text-xl">100% Natural</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="font-bold text-xl">Premium Quality</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="font-bold text-xl">Hygienically Packed</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="font-bold text-xl">Fresh & Trusted</h3>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-green-800 text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

        <p className="text-xl mb-3">
          📍 New Delhi, India
        </p>

        <p className="text-xl mb-3">
          📞 +91 8471009169
        </p>

        <p className="text-xl mb-6">
          🌐 SwadKart
        </p>

        <a
          href="https://wa.me/918471009169"
          target="_blank"
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold"
        >
          WhatsApp Us
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        © 2026 SwadKart | Nature Se Seedha Aap Tak
      </footer>
    </main>
  );
}