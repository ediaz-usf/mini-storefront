'use client';

import {useState, useEffect } from 'react';
import ProductList from "./ProductList";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import CartSummary from "./CartSummary";
import StatusMessage from "./StatusMessage";

export default function Catalog() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [category, setCategory] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const [cart, setCart] = useState({});

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

    const filteredProducts = products.filter(p => 
        (category ? p.category === category : true) &&
        (maxPrice ? p.price <= parseFloat(maxPrice) : true)
    );

    
    //define addToCart
    function addToCart(product) {
        if (product.stock <= 0) return;

        setCart(prevCart => ({...prevCart, [product.id]: (prevCart[product.id] || 0) + 1}));
    }


    if (loading) return <StatusMessage state="loading" />;
    if (error) return <StatusMessage state="error" />;
    if (filteredProducts.length === 0) return <StatusMessage state="empty" />;


    return (
        <div>

            <CategoryFilter value={category} setCategory={setCategory} />
            <PriceFilter value={maxPrice} setMaxPrice={setMaxPrice} />
            <ProductList products={filteredProducts} addToCart={addToCart} />
            <CartSummary cart={cart} products={products} clearCart={setCart} />

        </div>
    )

}