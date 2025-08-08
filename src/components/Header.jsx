// src/components/Header.jsx
function Header() {
  return (
    <header className="bg-white shadow-md p-4 fixed w-full z-20 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          C&I Interior Decor
        </h1>
        <nav>
          <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition px-4 py-2">
            Portfolio
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition px-4 py-2">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;