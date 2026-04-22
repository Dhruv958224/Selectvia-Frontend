import { useState } from "react";

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(0);

  const increase = () => {
    if (quantity < 5) setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <article className="rounded-lg bg-white shadow p-4 flex flex-col items-center">
      <div className="h-48 w-full flex items-center justify-center bg-gray-100 rounded mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <h3 className="font-semibold text-center">{product.name}</h3>
      <p className="text-sm text-gray-600 text-center">{product.description}</p>
      <span className="mt-2 text-indigo-600 font-bold">{product.price}</span>

      <div className="flex items-center gap-2 mt-3">
        <button
          onClick={decrease}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          -
        </button>
        <span className="px-4">{quantity}</span>
        <button
          onClick={increase}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      <button className="mt-3 w-full rounded bg-black text-white py-2 hover:bg-gray-800 transition">
        Add to Cart
      </button>
    </article>
  );
}
