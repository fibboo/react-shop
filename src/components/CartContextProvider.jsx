import {useEffect, useState} from "react";
import CartContext from "../contexts/CartContext.js";

const getItems = JSON.parse(localStorage.getItem('cart')) || [];
const getSum = +(localStorage.getItem('sum')) || 0;

export default function CartContextProvider(props) {
  const [items, setItems] = useState(getItems);
  const [sum, setSum] = useState(getSum);
  const [cartOpen, setCartOpen] = useState(false);
  const [toastItemName, setToastItemName] = useState('');

  const openCloseCart = (event) => {
    event.preventDefault();
    setCartOpen(!cartOpen)
  }

  const addItem = (item) => {
    const foundItem = items.find(i => i.id === item.id);
    if (foundItem) {
      const updatedItem = {...foundItem, count: foundItem.count + 1};
      setItems(items.map(i => i.id === item.id ? updatedItem : i));
      setSum(prevSum => prevSum + item.price);
    } else {
      setItems([...items, {...item, count: 1}]);
      setSum(prevSum => prevSum + item.price);
    }
    setToastItemName(item.name);
  }

  const removeItem = (id) => {
    const foundItem = items.find(i => i.id === id);
    if (!foundItem) {
      return;
    }
    setItems(items.filter(item => item.id !== id))
    setSum(prevSum => prevSum - (foundItem.price * foundItem.count));
  }

  const incrementItem = (id) => {
    const foundItem = items.find(i => i.id === id);
    if (foundItem) {
      const count = foundItem.count + 1;
      const updatedItem = {...foundItem, count};
      setItems(items.map(i => i.id === id ? updatedItem : i));
      setSum(prevSum => prevSum + foundItem.price);
    }
  }

  const decrementItem = (id) => {
    const foundItem = items.find(i => i.id === id);
    if (foundItem) {
      const count = foundItem.count - 1;
      if (count <= 0) {
        removeItem(id);
        return;
      }
      const updatedItem = {...foundItem, count};
      setItems(items.map(i => i.id === id ? updatedItem : i));
      setSum(prevSum => prevSum - foundItem.price);
    }
  }

  const emptyCart = () => {
    setItems([]);
    setSum(0);
  }

  const closeToast = () => {
    setToastItemName('');
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
    localStorage.setItem('sum', sum)
  }, [items, sum])

  const value = {
    items, addItem, removeItem, incrementItem, decrementItem, emptyCart, cartOpen, openCloseCart, sum,
    toastItemName, closeToast
  };

  return (
      <CartContext.Provider value={value}>
        {props.children}
      </CartContext.Provider>
  )
}
