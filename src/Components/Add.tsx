import React from "react";
import { useRef } from "react";
import { addProduct } from "../store/features/productSlice";
import { useAppDispatch } from "../store/store";

export const Add = () => {
    const inputValue = useRef("")
    const dispatch = useAppDispatch();
    return(
        <div>
              <input
            onChange={(e) => inputValue.current = e.target.value}
            
            />
            <button
            onClick={(e) => {
                dispatch(addProduct({price : 123,image : '1e213',stock : 300, name : inputValue.current}))
            }}
            >ADD</button>
        </div>
        
          
       
    )
}