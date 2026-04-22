export default function BrandSection() {
  return (
    <section className="bg-orange-500 text-white py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Your Brand</h2>
        <p className="mb-4">Sell Everything Everywhere</p>
        <p>List from one place</p>
                  <img
          src="/images/Group 51.jpg"   
          alt="Brand visual"
          className="mx-auto mb-6 w-48 h-auto rounded-lg shadow-lg"
        />

        <div className="mt-6">
          <span className="block text-sm">selectvia.com/your-store-name</span>
          <button className="mt-2 bg-black text-white px-6 py-2 rounded">
            Claim your store
          </button>
        </div>
      </div>
    </section>
  );
}
