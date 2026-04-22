export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Selectvia</h1>
      <div className="flex items-center space-x-4">
        <button className="hover:text-orange-400">Sign in</button>
        <button className="text-2xl">☰</button> 
      </div>
    </nav>
  );
}
