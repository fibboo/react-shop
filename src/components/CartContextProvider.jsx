import {useState} from "react";
import CartContext from "../contexts/CartContext.js";

export default function CartContextProvider(props) {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const foundItem = items.find(i => i.id === item.id);
    if (foundItem) {
      const count = foundItem.count + 1;
      const updatedItem = {...foundItem, count};
      setItems(items.map(i => i.id === item.id ? updatedItem : i));
    } else {
      setItems([...items, {...item, count: 1}]);
    }
  }

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const incrementItem = (id) => {
    const foundItem = items.find(i => i.id === id);
    if (foundItem) {
      const count = foundItem.count + 1;
      const updatedItem = {...foundItem, count};
      setItems(items.map(i => i.id === id ? updatedItem : i));
    }
  }

  const decrementItem = (id) => {
    const foundItem = items.find(i => i.id === id);
    if (foundItem) {
      const count = foundItem.count - 1;
      const updatedItem = {...foundItem, count};
      setItems(items.map(i => i.id === id ? updatedItem : i));
    }
  }

  const emptyCart = () => {
    setItems([]);
  }

  const value = {items, addItem, removeItem, incrementItem, decrementItem, emptyCart};

  return (
      <CartContext.Provider value={value}>
        {props.children}
      </CartContext.Provider>
  )
}
