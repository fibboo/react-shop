export default function Footer() {
  return (
      <footer className="border border-slate-600 shadow-lg rounded-xl">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span
          className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {new Date().getFullYear()}
        <a href="https://t.me/fibboo" className="hover:underline" target='_blank'> @fibboo</a>
    </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="https://github.com/fibboo" className="hover:underline me-4 md:me-6">Github</a>
            </li>
          </ul>
        </div>
      </footer>
  );
}
