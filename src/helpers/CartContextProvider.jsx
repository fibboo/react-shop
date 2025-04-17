import {useEffect, useReducer} from "react";
import CartContext from "./CartContext.js";
import reducer, {ActionType} from "./Reducer.jsx";

const getItems = JSON.parse(localStorage.getItem('cart')) || [];
const getSum = +(localStorage.getItem('sum')) || 0;

const initialState = {
  cartOpen: false,
  items: getItems,
  sum: getSum,
  toastItemName: '',
}

export default function CartContextProvider({children}) {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.openCloseCart = (event) => {
    event.preventDefault();
    dispatch({type: ActionType.TOGGLE_CART});
  }

  value.addItem = (item) => {
    dispatch({type: ActionType.ADD_ITEM, payload: item});
  }

  value.removeItem = (id) => {
    dispatch({type: ActionType.REMOVE_ITEM, payload: id});
  }

  value.incrementItem = (id) => {
    dispatch({type: ActionType.INCREMENT_ITEM, payload: id});
  }

  value.decrementItem = (id) => {
    dispatch({type: ActionType.DECREMENT_ITEM, payload: id});
  }

  value.emptyCart = () => {
    dispatch({type: ActionType.EMPTY_CART})
  }

  value.closeToast = () => {
    dispatch({type: ActionType.CLOSE_TOAST})
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(value.items));
    localStorage.setItem('sum', value.sum)
  }, [value.items, value.sum])

  return (
      <CartContext.Provider value={value}>
        {children}
      </CartContext.Provider>
  )
}
