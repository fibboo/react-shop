import {useContext, useEffect} from "react";
import CartContext from "../helpers/CartContext.js";

export default function Toast() {
  const {toastItemName, closeToast} = useContext(CartContext)

  useEffect(() => {
    const toastId = setTimeout(closeToast, 3000)

    return () => clearTimeout(toastId)
  }, [toastItemName])

  return (
      <div className='fixed top-20 right-4 z-50'>
        <div id="toast-success"
             className="flex items-center w-full max-w-xs p-4 mb-4
                        bg-slate-800
                        border-b border-slate-600 shadow-lg"
             role="alert">
          <div
              className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-200 bg-green-700 rounded-lg">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                 viewBox="0 0 20 20">
              <path
                  d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ms-3 text-sm font-normal"><span className='font-bold'>{toastItemName}</span> added to cart</div>
          <button type="button"
                  className="ms-auto -mx-1.5 -my-1.5 inline-flex items-center justify-center h-8 w-8
                  bg-gray-800 text-gray-500 hover:text-white hover:bg-gray-700
                  rounded-lg focus:ring-2 focus:ring-gray-300 p-1"
                  data-dismiss-target="#toast-success" aria-label="Close"
                  onClick={closeToast}>
            <span className="sr-only">Close</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
          </button>
        </div>
      </div>
  )
}