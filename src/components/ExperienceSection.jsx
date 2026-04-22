export default function ExperienceSection({ onOpenShop }) {
  return (
    <section className="bg-purple-600 text-white py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Immersive Buyer Experience</h2>
        <p className="mb-6">
          Showcase your products in a way that makes buyers fall in love with your brand.
        </p>
        <img
          src="/images/Group 52.jpg"  
          alt="Experience visual"
          className="mx-auto mb-6 w-48 h-auto rounded-lg shadow-lg"
        />
        <button
          onClick={onOpenShop}
          className="bg-white text-purple-600 px-6 py-2 rounded hover:bg-gray-100"
        >
          Claim your store
        </button>
      </div>
    </section>
  );
}
