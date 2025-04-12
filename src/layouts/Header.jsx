import logo from '/logo.png';


export default function Header() {
  return (
    <nav className="border border-slate-600 shadow-lg rounded-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between md:justify-between py-4">
          <a href="/react-movies" className="text-white text-2xl font-bold flex items-center flex-1 justify-center md:justify-start">
            <img src={logo} alt="logo" className="w-10 h-10 mr-2"/>
            React Template
          </a>

          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="https://github.com/fibboo" target="_blank"
                 className="text-white hover:text-gray-200 transition duration-300">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}