"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-orange-500">
          Gagan Shivanna
        </h1>

        <div className="hidden md:flex space-x-6">
          {["Home","About","Experience","Skills","Projects","Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-orange-500 transition"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
