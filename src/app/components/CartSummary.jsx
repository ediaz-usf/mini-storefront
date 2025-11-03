'use client';

export default function CartSummary({ cart, products, clearCart }) {
    
    const total = Object.entries(cart).reduce((sum, [id, qty]) => {
        const product = products.find((p) => p.id === id);
        return sum + (product.price * qty);  
    }, 0);
    
    return (
        <div>
            <h2>Total: ${total}</h2>
            <button onClick={() => clearCart({})}>
                Clear Cart
            </button>
        </div>
    )
}