'use client';

export default function ProductCard({ product }) {

    return (
        <div>
            <h1>{product.name}</h1>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>In Stock: {product.stock}</p>

            <button disabled={product.stock === 0} onclick={() => alert(`Added ${product.name} to cart!`)}>

            </button>
        </div>
        
    )

}