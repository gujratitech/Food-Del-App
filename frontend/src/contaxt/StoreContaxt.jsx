import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext=createContext(null)


const StoreCOntextProvider=(props)=>{

    const [cartitems,setcartitems]=useState({});

    const addtocart=(itemId)=>{
        if(!cartitems[itemId]){
            setcartitems((prev)=>({...prev,[itemId]:1}));
        }
        else{
            setcartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        }
    }

    const removefromcart=(itemId)=>{
        setcartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }

   const gettotalcartamount=()=>{
        let totalamount=0;
        for(const item in cartitems){
            if(cartitems[item]>0)
            {
                let iteminfo =food_list.find((product)=>product._id === item);
                totalamount+=iteminfo.price* cartitems[item];
            }
        }
        return totalamount;

   }

    const contextValue={
        food_list,
        cartitems,
        setcartitems,
        addtocart,
        removefromcart,
        gettotalcartamount
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )


}

export default StoreCOntextProvider