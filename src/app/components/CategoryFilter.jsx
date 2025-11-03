'use client';

export default function CategoryFilter({ value, onChange }) {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option value=""> All</option>
            <option value="Electronics"> Electronics</option>
            <option value="Furniture"> Furniture</option>
            <option value="Clothing"> Clothing</option>
            <option value="Accessories"> Accessories</option>
        </select> 
    )
}