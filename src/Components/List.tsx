import React from "react";
import { useAppSelector } from "../store/store";
import { useAppDispatch } from '../store/store';
import { fetchProducts, reloadState } from '../store/features/productSlice';
import { useEffect } from "react";
import { platform } from "os";

const List = () => {
    const products = useAppSelector((state) => state.product.products);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return (
        <>
            {products.length}
            {products.map((p) => {
                return (

                    <div style={{display : 'flex'}}>
                        <h4>{p.name}</h4>
                        <p
                        onClick={(e) => {
                            const filteredArray = products.filter((pr) => pr._id !== p._id )
                            dispatch(reloadState({productsArray : filteredArray}))
                        }}
                        style={{ color: "red" }} >delete</p>
                    </div>



                )
            })}
        </>

    );
};

export default List;