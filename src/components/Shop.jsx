import {useContext, useEffect, useState} from 'react';
import {API_KEY, API_URL} from "../configs.js";
import Preloader from "../elememts/Preloader.jsx";
import Items from "./Items.jsx";
import Cart from "./Cart.jsx";
import CartContext from "../helpers/CartContext.js";
import Toast from "../elememts/Toast.jsx";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const {cartOpen, toastItemName} = useContext(CartContext)

  useEffect(function getItems() {
    setLoading(true);
    fetch(API_URL, {headers: {'Authorization': API_KEY}})
        .then(response => response.json())
        .then(data => {
          setItems(data.shop);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => setLoading(false));
  }, [])

  return (
      <main className='flex flex-col justify-center-safe items-center flex-1 p-10'>
        {toastItemName && <Toast/>}
        {cartOpen && <Cart/>}
        {loading ? <Preloader/> : <Items items={items}/>}
      </main>

  );
}

