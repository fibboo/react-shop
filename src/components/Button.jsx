export default function Button({onClick, children}) {
  return (
      <button
          className="
            bg-emerald-200 hover:bg-emerald-300 text-zinc-900
            font-bold
            px-6 py-3 mt-4
            rounded-2xl
            shadow-lg
            transition-transform
            duration-150
            active:scale-95
            active:shadow-inner
          "
          onClick={onClick}
      >
        {children}
      </button>
  );

}