import {useContext} from "react";
import CartContext from "../helpers/CartContext.js";

export default function CartIcon() {
  const {items, openCloseCart} = useContext(CartContext)
  const itemCount = items.length;

  return (
      <div
          className="relative inline-block transform transition-transform active:scale-90"
          onClick={openCloseCart}
      >
        <svg
            className="w-8 h-8 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="none" viewBox="0 0 24 24"
        >
          <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
          />
        </svg>
        {itemCount > 0 && (
            <span
                className="absolute -top-1.5 -right-1.5
                          bg-red-600 text-white text-xs
                          rounded-full w-5 h-5 flex items-center justify-center"
            >
          {itemCount}
        </span>
        )}
      </div>
  );
}