'use client';

export default function StatusMessage({ state }) {
    if (state === 'loading') return <p>Loading products...</p>;
    if (state === 'error') return <p>Error loading products. Please try again.</p>;
    if (state === 'empty') return <p>No products available.</p>;
    return null;
}