import React from "react";
import logo from '../assets/logo.png'
import { MagnifyingGlassCircleIcon ,HeartIcon,ShoppingBagIcon} from "@heroicons/react/24/solid";
import { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenCart } from "../app/CartSlice";
import { selectTotalQantity } from './../app/CartSlice';

const Navbar = () => {
    const [navState ,setNavState] = useState(false);
    const totalQantity = useSelector(selectTotalQantity)

    const dispatch =useDispatch();

    const onCartToggle =()=>{
dispatch( setOpenCart({
  cartState : true
  
}))
    }

    const onNavScroll =()=>{
        if (window.scrollY >30) {
            setNavState(true);
        }else{
            setNavState(false);
        }
    }
    useEffect(() =>{
    window.addEventListener('scroll' ,onNavScroll)
      return 
      
    }, [])
    
  return (
    <>
          <header className={!navState ? 'absolute top-7 left-0 right-0 opacity-100 z-50' : 
      'fixed top-0 blur-effect-theme left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200]'}>
        <nav className=" flex items-center justify-between nike-container ">
          <div className="flex items-center ">
            <img 
                src={logo} 
                alt="logo/img" 
                className={`w-16 h-auto ${navState && "filter brightness-0"}`} />
          </div>
          <ul className="flex items-center justify-center gap-2">
            <li className="grid items-center"><MagnifyingGlassCircleIcon className={`icon-style
             ${navState && "text-slate-900 transition-all duration-300"}`}/></li>
            <li className="grid items-center"> <HeartIcon className={`icon-style
             ${navState && "text-slate-900 transition-all duration-300"}`}/> </li>
            <li className="grid items-center">
<button type="button"  onClick={onCartToggle} className="border-none  outline-none 
active:scale-110 transition-all duration-300 relative"><ShoppingBagIcon className={`icon-style
 ${navState && "text-slate-900 transition-all duration-300"}`}/>   
<div className={`absolute top-3 right-1  w-4 h-4 text-[0.65rem] leading-tight
 font-medium rounded-full flex items-center justify-center cursor-pointer
hover:scale-110 transition-all duration-300 ${navState ? 'bg-slate-900 text-white shadow-slate-300'
 :'bg-slate-900 shadow-slate-100 text-white'}`}>{totalQantity}</div>  </button>  </li>
   </ul>
        </nav>
      </header>


    </>
  );
};

export default Navbar;


