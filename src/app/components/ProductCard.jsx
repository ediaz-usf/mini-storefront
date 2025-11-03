'use client';

export default function ProductCard({ product, addToCart }) {

    return (
        <div>
            <h1>{product.name}</h1>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>In Stock: {product.stock}</p>

            <button disabled={product.stock === 0} onClick={() => addToCart(product)}>
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
        </div>
        
    )

}