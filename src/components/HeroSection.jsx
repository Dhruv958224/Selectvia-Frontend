export default function HeroSection({ onOpenShop }) {
  return (
    <section className="bg-blue-500 text-white py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">

        
        <h2 className="text-3xl font-bold mb-4">
          Grow Your eCommerce Brand Effectively
        </h2>
        <p className="mb-6">
          Join 1000+ brands using Selectvia to create a unified catalog that sells across all platforms.
        </p>
          <img
          src="/images/hero-bg.jpg"   
          alt="Hero visual"
          className="mx-auto mb-6 w-48 h-auto rounded-lg shadow-lg"
        />

        <button
          onClick={onOpenShop}
          className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-100"
        >
          See How?
        </button>
      </div>
    </section>
  );
}
