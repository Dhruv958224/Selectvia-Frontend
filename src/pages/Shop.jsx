import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";


 const products = [
  { name: "Green Wayfarer Rimmed Eyeglasses", description: "Best and affordable eyewear", price: "$49.99", image: "/images/S1.jpg" },
  { name: "Pink Rectangle Rimmed Eyeglasses", description: "Adjustable nose pads ensure comfort", price: "$49.99", image: "/images/S2.jpg" },
  { name: "Green Round Rimmed Eyeglasses", description: "Classic round style", price: "$49.99", image: "/images/S3.jpg" },
  { name: "Brown Round Rimmed Eyeglasses", description: "Trendy blue finish", price: "$49.99", image: "/images/S4.jpg" },
  { name: "Green Round Rimmed Eyeglasses", description: "Warm brown tone", price: "$49.99", image: "/images/S5.jpg" },
  { name: "Brown Round Rimmed Eyeglasses", description: "Adjustable fit for all", price: "$49.99", image: "/images/S6.jpg" },
  { name: "The Lens Brand Adjustable Fit", description: "Adjustable fit for all", price: "$49.99", image: "/images/S7.jpg" },
  { name: "Green Wayfarer Rimmed Eyeglasses", description: "Adjustable fit for all", price: "$49.99", image: "/images/S8.jpg" },
  { name: "Green Round Rimmed Eyeglasses", description: "Adjustable fit for all", price: "$49.99", image: "/images/S9.jpg" },
  { name: "Pink Round Rimmed Eyeglasses", description: "Adjustable fit for all", price: "$49.99", image: "/images/S10.jpg" },
  { name: "Pink Rectangle Rimmed Eyeglasses", description: "Adjustable fit for all", price: "$49.99", image: "/images/S11.jpg" },
  
];

const chips = ["Search", "Trending", "Popular", "Filter"];

export default function Shop() {
  const navigate = useNavigate();

  return (
    <main className="mx-auto w-full bg-gray-100 min-h-screen">
    
      <header className="bg-indigo-900 text-white px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">The Lens Brand</h1>
          <p className="text-sm">Best and affordable eyewear for everyone</p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="bg-white text-indigo-900 px-3 py-1 rounded text-sm"
        >
          ← Back
        </button>
      </header>

      <section className="flex gap-2 px-6 py-4 overflow-x-auto">
        {chips.map((chip) => (
          <button
            key={chip}
            className="rounded-full border px-4 py-1 text-sm bg-white text-gray-700"
          >
            {chip}
          </button>
        ))}
      </section>

      
      <section className="grid grid-cols-2 sm:grid-cols-3 gap-6 px-6">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
        
      </section>

    
      <footer className="bg-orange-500 text-center py-6 mt-8">
        <h3 className="text-white text-lg font-semibold mb-2">Create Your Own Lens</h3>
        <button className="bg-white text-orange-500 px-6 py-2 rounded font-medium">
          Try Build Lens
        </button>
      </footer>
    </main>
  );
}
