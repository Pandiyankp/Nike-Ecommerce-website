import React from "react";
import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from 'react-redux';
import { setRemoveItemFromCart ,setIncItemQTY,setDecItemQTY} from "../../app/CartSlice";
const CartItem = ({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) => {

  const despatch = useDispatch();
  const onRemoveItem =()=>{
 despatch(setRemoveItemFromCart({ id, title, text, img, color, shadow, price, cartQuantity }))
  }
  const onIncItemQTY  = () => {
    despatch(setIncItemQTY({ id, title, text, img, color, shadow, price, cartQuantity }))
  }
const onDecItemQTY = () => {
despatch(setDecItemQTY({ id, title, text, img, color, shadow, price, cartQuantity }))
}
  return (
    <div className="flex items-center justify-between w-full px-5">
      <div className=" flex items-center gap-5">
        <div
          className={`bg-gradient-to-b ${color}${shadow} relative rounded p-3
        hover:scale-105 transition-all ease-in-out grid items-center`}
        >
          <img
            src={img}
            alt={`img/cart-item/${id}`}
            className="w-36 h-auto object-fill"
          />
          <div className=" absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs
          rounded px-1">${price}</div>
        </div>
        {/* ------------- */}

        <div className="grid items-center gap-4">
          <div className="grid items-center leading-none">
            <h1 className="font-medium text-lg text-slate-900">{title}</h1>
            <p className="text-sm text-slate-800 ">{text}</p>
          </div>
          <div className="flex items-center justify-around w-full">
            <button
              className="bg-theme-cart rounded text-white storke-[2] w-6 h-6 
            flex items-center justify-center active:scale-90"
              type="button" onClick={onDecItemQTY}
            >
              <MinusIcon className="w-5 h-5 text-white storke-[2]" />
            </button>
            <div
              className="bg-theme-cart rounded text-white font-medium w-7 h-6
            flex items-center justify-center"
            >
              {cartQuantity}
            </div>
            <button
              className="bg-theme-cart rounded text-white storke-[2] w-6 h-6 
              flex items-center justify-center active:scale-90"
  
              type="button" onClick={onIncItemQTY}
            >
              <PlusIcon className="w-5 h-5  text-white storke-[2]" />
            </button>
          </div>
         </div>
      </div>
      {/* ---------------- */}
      <div className="grid items-center gap-5 ">
        <div className="grid items-center justify-center">
          <h1 className="text-lg lg:text-base  text-slate-900 font-medium ">
            ${price * cartQuantity}
          </h1>
        </div>
        <div className="grid items-center justify-center">
          <button
            className="bg-theme-cart rounded p-1 grid items-center justify-items-center cursor-pointer"
            type="button"onClick={onRemoveItem}
          >
            <TrashIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
