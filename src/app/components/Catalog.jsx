'use client';

// import necessary components
import {useState, useEffect } from 'react';
import ProductList from "./ProductList";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import CartSummary from "./CartSummary";
import StatusMessage from "./StatusMessage";


export default function Catalog() {
    // state variables
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [category, setCategory] = useState('');
    const [maxPrice, setMaxPrice] = useState("");

    const [cart, setCart] = useState({});

    // fetch products
    useEffect(() => {
        async function loadProducts() {
            try {
                const res = await fetch('/api/products');
                const data = await res.json();
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError(true);
            }
        }
        loadProducts();
    }, []);


    // simulate stock changes with interval
    useEffect(() => {
        const interval = setInterval(() => {
            setProducts(prev => 
                prev.map(p => 
                    p.stock > 0 ? { ...p, stock: p.stock - 1 } : p
                )
            );
        }, 30000);
        
        return () => clearInterval(interval);

    }, []);

    //filter products based on category and maxPrice
    const filteredProducts = products.filter(p => 
        (category ? p.category === category : true) &&
        (maxPrice ? p.price <= parseFloat(maxPrice) : true)
    );

    
    //define addToCart
    function addToCart(product) {
        if (product.stock <= 0) return;

        setCart(prevCart => ({...prevCart, [product.id]: (prevCart[product.id] || 0) + 1}));
    }

    // shows errors or loading states
    if (loading) return <StatusMessage state="loading" />;
    if (error) return <StatusMessage state="error" />;

    // shows the main catalog
    return (
        <div>

            <CategoryFilter value={category} onChange={setCategory} />
            <PriceFilter value={maxPrice} onChange={setMaxPrice} />

            {filteredProducts.length === 0 ? 
                (<StatusMessage type="empty" />) 
                    : 
                (<ProductList products={filteredProducts} addToCart={addToCart} />)}

            <CartSummary cart={cart} products={products} clearCart={setCart} />

        </div>
    )

}