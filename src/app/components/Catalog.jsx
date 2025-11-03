'use client';

import { use, useEffect, useState } from 'react';
//import GET from './api/products/route';
//import ProductCard from './components/ProductCard';
import ProductList from './components/ProductList';
import CategoryFilter from './components/CategoryFilter';
import PriceFilter from './components/PriceFilter';
import CartSumamry from './components/CartSummary';
import StatusMessage from './components/StatusMessage';
import ProductCard from './ProductCard';


export default function Catalog() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [category, setCategory] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const [cart, setCart] = useState({});

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch('/api/products');
                const data = await res.json();
                setProducts(data);
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


}