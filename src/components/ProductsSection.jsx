export default function ProductsSection({ onOpenShop }) {
  return (
    <section className="bg-yellow-400 text-black py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
      
        <h2 className="text-3xl font-bold mb-4">List Unlimited Products</h2>

      
        <p className="mb-6 text-lg">
          List unlimited products on all marketplaces and have an unlimited earning potential.
        </p>

    
<ul className="flex flex-wrap justify-center gap-4 mb-6">
  <li className="bg-white text-black px-6 py-2 rounded-full font-medium shadow">
    Products Sold Elsewhere
  </li>
  <li className="bg-white text-black px-6 py-2 rounded-full font-medium shadow">
    Sold on Amazon, Etsy
  </li>
  <li className="bg-white text-black px-6 py-2 rounded-full font-medium shadow">
    Seamless + Simplistic Experience
  </li>
</ul>

           <img
          src="/images/Group 49.jpg"   
          alt="Products visual"
          className="mx-auto mb-6 w-48 h-auto rounded-lg shadow-lg"
        />

      
        <button
          onClick={onOpenShop}
          className="mt-8 bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Claim your store
        </button>
      </div>
    </section>
  );
}
