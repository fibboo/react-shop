export default function Footer() {
  return (
      <footer className="border-t border-slate-600 shadow-lg">
        <div className="mx-auto flex justify-center py-4">
          <span className="mx-auto text-sm text-gray-400 flex items-center">© {new Date().getFullYear()}
            <a href="https://t.me/fibboo" className="hover:underline" target='_blank'> @fibboo</a>
          </span>
          <a href="https://github.com/fibboo" target="_blank"
             className="mx-auto hover:underline text-sm font-medium text-gray-400"
          >Github</a>
        </div>
      </footer>
  );
}