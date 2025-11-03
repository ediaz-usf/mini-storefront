'use client';

import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
   
    return (
        <div>
            {products.map((p => <ProductCard key={p.id} product={p} addToCart={addToCart}/>))}
        </div>

    )


}