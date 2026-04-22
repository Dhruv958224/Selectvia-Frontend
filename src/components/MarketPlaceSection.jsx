export default function MarketplaceSection({ onOpenShop }) {
  return (
    <section className="bg-indigo-900 text-white py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Bring All Your Marketplace Listings at One Place
        </h2>
        <p className="mb-4">
          Seamlessly manage every aspect of your listing in one place with our easy-to-use platform.
        </p>
         <img
          src="/images/Group 50.jpg"  
          alt="Marketplace visual"
          className="mx-auto mb-6 w-48 h-auto rounded-lg shadow-lg"
        />
        <button
          onClick={onOpenShop}
          className="bg-white text-indigo-900 px-6 py-2 rounded hover:bg-gray-100"
        >
          Claim your store
        </button>
      </div>
    </section>
  );
}
