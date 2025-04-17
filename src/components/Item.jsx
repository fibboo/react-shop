import Button from "../elememts/Button.jsx";
import {useContext} from "react";
import CartContext from "../helpers/CartContext.js";

export default function Item(props) {
  const {addItem} = useContext(CartContext)

  return (
      <div className="border border-slate-600 max-w-sm shadow-lg rounded-lg">
        <img
            className="rounded-t-lg"
            src={!props.displayAssets[0].full_background ?
                `https://placehold.co/500x500/455a64/b5d0e4?text=${props.displayName}` :
                props.displayAssets[0].full_background}
            alt={props.displayName}
        />
        <div className="p-5">
          <h5
              className="mb-2 text-2xl font-bold line-clamp-1"
              title={props.displayName}
          >
            {props.displayName}
          </h5>

          <p className="mb-3 font-normal line-clamp-2 min-h-12">
            {props.displayDescription}
          </p>

          <p className="mb-3 font-normal flex justify-between">
            <span className='text-gray-400'>{props.rarity.name}</span>
            <span className='text-xl font-bold text-green-500'>${props.price.regularPrice}</span>
          </p>
          <Button onClick={() => addItem({
            id: props.mainId,
            name: props.displayName,
            price: props.price.regularPrice,
            image: props.displayAssets[0].full_background,
          })}>Buy</Button>
        </div>
      </div>)
}