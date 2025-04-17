import {useContext} from "react";
import CartContext from "../helpers/CartContext.js";
import CartItem from "./CartItem.jsx";

export default function Cart() {
  const {items, sum, openCloseCart, emptyCart} = useContext(CartContext)

  return (
      <div className="fixed top-20 left-1/2 -translate-x-1/2 right-auto
                      sm:left-auto sm:right-5 sm:translate-x-0
                      w-[calc(100%-1rem)] max-w-sm
                      px-4 py-8 sm:px-6 lg:px-8
                      bg-slate-100
                      border border-slate-600 shadow-lg"
           aria-modal="true"
           role="dialog"
           tabIndex="-1"
      >

        <button className="absolute end-4 top-4 text-gray-800 transition hover:scale-110" onClick={openCloseCart}>
          <span className="sr-only">Close cart</span>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div className="mt-4 space-y-6">
          <ul className="space-y-4 overflow-y-auto max-h-[calc(100vh-25rem)] pr-2 scrollbar-hide">
            {items.length > 0 ?
                items.map(item => <CartItem key={item.mainId} {...item} />) :
                <h4 className='col-span-full text-center text-xl text-gray-900'>Cart is empty!</h4>}
          </ul>

          {items.length > 0 && (
              <div className="text-right text-xl font-semibold text-gray-800">
                Total: ${sum.toFixed(2)}
              </div>
          )}


          <div className="space-y-4 text-center">
            {items.length > 0 ? (
                <>
                  <button
                      className="block w-full rounded-sm bg-red-600 px-5 py-3 text-sm text-white transition hover:bg-red-500"
                      onClick={emptyCart}
                  >
                    Empty cart
                  </button>

                  <a href="#"
                     className="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </a>
                </>
            ) : null}

            <a href="#"
               className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
               onClick={openCloseCart}
            >
              Continue shopping
            </a>
          </div>
        </div>
      </div>
  )
}